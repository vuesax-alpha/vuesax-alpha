import {
  computed,
  nextTick,
  reactive,
  ref,
  shallowRef,
  triggerRef,
  watch,
} from 'vue'
import {
  findLastIndex,
  isArray,
  isEqual,
  isNil,
  debounce as lodashDebounce,
} from 'lodash-unified'
import { EVENT_CODE, UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import {
  isBoolean,
  isClient,
  isFunction,
  isKorean,
  isObject,
  removeStyle,
  scrollIntoView,
  setStyle,
} from '@vuesax-alpha/utils'
import { useId, useLocale, useNamespace } from '@vuesax-alpha/hooks'
import type { PopperExpose } from '@vuesax-alpha/components/popper'
import type { SelectEmitsFn, SelectProps } from './select'

import type {
  SelectOptionContext,
  SelectOptionValue,
  SelectStates,
  SelectTargetElement,
  SelectValue,
} from './tokens'

export function useSelectStates(props: SelectProps): SelectStates {
  return reactive({
    options: new Map(),
    cachedOptions: new Map(),
    selected: new Map(),
    disabledOptions: new Map(),
    createdLabel: null,
    targetOnElement: null,
    createdSelected: false,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    cachedPlaceHolder: '',
    currentPlaceholder: props.placeholder,
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    mouseEnter: false,
  })
}

export const useSelect = (
  props: SelectProps,
  states: SelectStates,
  emit: SelectEmitsFn
) => {
  const ns = useNamespace('select')
  const { t } = useLocale()

  // template refs
  const reference = ref<HTMLInputElement>()
  const input = ref<HTMLInputElement>()
  const popperRef = ref<PopperExpose>()
  const chips = ref<HTMLElement>()
  const selectWrapper = ref<HTMLElement>()
  const scrollbar = ref<{
    handleScroll: () => void
  }>()
  const hoverOption = ref<SelectOptionContext>()
  const inputId = useId(props.id)
  const queryChange = shallowRef<string>('')
  const debounce = ref(0)
  const readonly = computed(
    () => !props.filter || props.multiple || !states.visible
  )

  const selectDisabled = computed(() => props.disabled)

  const showClose = computed(() => {
    const hasValue = props.multiple
      ? Array.isArray(props.modelValue) && props.modelValue.length > 0
      : props.modelValue !== undefined &&
        props.modelValue !== null &&
        props.modelValue !== ''

    const criteria =
      props.clearable && !selectDisabled.value && states.mouseEnter && hasValue
    return criteria
  })

  const optionsArray = computed(() => Array.from(states.options.values()))

  const cachedOptionsArray = computed(() =>
    Array.from(states.cachedOptions.values())
  )

  const selectedArray = computed(() => Array.from(states.selected.values()))

  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value
      .filter((option) => {
        return !option.created
      })
      .some((option) => {
        return option.currentLabel === states.query
      })
    return (
      props.filter &&
      props.allowCreate &&
      states.query !== '' &&
      !hasExistingOption
    )
  })

  const dropMenuVisible = computed({
    get() {
      return states.visible
    },
    set(val: boolean) {
      states.visible = val
    },
  })

  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t('vs.select.loading')
    }

    if (
      props.filter &&
      states.query &&
      states.options.size > 0 &&
      states.filteredOptionsCount === 0
    ) {
      return props.noMatchText || t('vs.select.noMatch')
    }
    if (states.options.size === 0) {
      return props.noDataText || t('vs.select.noData')
    }
    return null
  })

  watch(
    () => props.placeholder,
    (val) => {
      states.cachedPlaceHolder = states.currentPlaceholder = val

      const hasValue =
        props.multiple &&
        Array.isArray(props.modelValue) &&
        props.modelValue.length > 0

      if (hasValue) {
        states.currentPlaceholder = ''
      }
    }
  )

  watch(
    () => props.modelValue,
    (val) => {
      if (props.multiple) {
        if (
          // @ts-ignore
          (val && val.length > 0) ||
          (input.value && states.query !== '')
        ) {
          states.currentPlaceholder = ''
        } else {
          states.currentPlaceholder = states.cachedPlaceHolder
        }
        if (props.filter) {
          states.query = ''
          handleQueryChange(states.query)
        }

        nextTick(() => {
          if (reference.value && chips.value) {
            reference.value.style.height = `${chips.value.scrollHeight - 1}px`
          }
        })
      }
      setSelected()
      nextTick(() => {
        popperRef.value?.updatePopper()
      })
    },
    {
      flush: 'post',
      deep: true,
    }
  )

  watch(
    () => states.visible,
    (val) => {
      if (!val) {
        input.value && input.value.blur()
        handleQueryChange('')
        states.query = ''
        states.previousQuery = null
        states.selectedLabel = ''
        states.menuVisibleOnFocus = false
        resetHoverIndex()

        nextTick(() => {
          if (
            input.value &&
            input.value.value === '' &&
            selectedArray.value.length === 0
          ) {
            states.currentPlaceholder = states.cachedPlaceHolder
          }
        })

        if (!props.multiple) {
          if (selectedArray.value.length) {
            if (
              props.filter &&
              props.allowCreate &&
              states.createdSelected &&
              states.createdLabel
            ) {
              states.selectedLabel = states.createdLabel
            } else {
              states.selectedLabel = selectedArray.value[0].currentLabel
            }
            if (props.filter) states.query = states.selectedLabel
          }

          if (props.filter) {
            states.currentPlaceholder = states.cachedPlaceHolder
          }
        }
      } else {
        popperRef.value?.updatePopper()

        if (props.filter) {
          states.filteredOptionsCount = states.optionsCount
          states.query = states.selectedLabel
          if (props.multiple) {
            input.value?.focus()
          } else {
            if (states.selectedLabel) {
              states.currentPlaceholder = `${states.selectedLabel}`
              states.selectedLabel = ''
            }
          }

          states.query && handleQueryChange(states.query)
          if (!props.multiple) {
            queryChange.value = ''

            triggerRef(queryChange)
          }
        }
      }
      emit('visible-change', val)
    }
  )

  watch(
    // fix `Array.prototype.push/splice/..` cannot trigger non-deep watcher
    // https://github.com/vuejs/vue-next/issues/2116
    () => states.options.entries(),
    () => {
      if (!isClient) return
      popperRef.value?.updatePopper()

      const inputs = selectWrapper.value?.querySelectorAll('input') || []
      if (
        !Array.from(inputs).includes(document.activeElement as HTMLInputElement)
      ) {
        setSelected()
      }
      if (
        props.defaultFirstOption &&
        props.filter &&
        states.filteredOptionsCount
      ) {
        checkDefaultFirstOption()
      }
    },
    {
      flush: 'post',
    }
  )

  watch(
    () => states.hoverIndex,
    (val) => {
      if (val > -1) {
        hoverOption.value = optionsArray.value[val]
      } else {
        hoverOption.value = undefined
      }
      optionsArray.value.forEach((option) => {
        option.hover = isEqual(hoverOption.value, option)
      })
    }
  )

  const handleQueryChange = (val: string) => {
    if (states.previousQuery === val || states.isOnComposition) return
    if (states.previousQuery === null && isFunction(props.filterMethod)) {
      states.previousQuery = val
      return
    }
    states.previousQuery = val
    nextTick(() => {
      if (states.visible) popperRef.value?.updatePopper()
    })
    states.hoverIndex = -1
    if (props.multiple && props.filter) {
      nextTick(() => {
        managePlaceholder()
      })
    }
    if (isFunction(props.filterMethod)) {
      props.filterMethod(val)
    } else {
      states.filteredOptionsCount = states.optionsCount
      queryChange.value = val

      triggerRef(queryChange)
    }
    if (
      props.defaultFirstOption &&
      props.filter &&
      states.filteredOptionsCount
    ) {
      nextTick(() => {
        checkDefaultFirstOption()
      })
    }
  }

  const managePlaceholder = () => {
    if (states.currentPlaceholder !== '') {
      states.currentPlaceholder = input.value?.value
        ? ''
        : states.cachedPlaceHolder
    }
  }

  /**
   * find and highlight first option as default selected
   * @remark
   * - if the first option in dropdown list is user-created,
   *   it would be at the end of the optionsArray
   *   so find it and set hover.
   *   (NOTE: there must be only one user-created option in dropdown list with queryChange)
   * - if there's no user-created option in list, just find the first one as usual
   *   (NOTE: exclude options that are disabled or in disabled-group)
   */
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter(
      (n) => n.visible && !n.isDisabled && !n.groupDisabled
    )
    const userCreatedOption = optionsInDropdown.find((n) => n.created)
    const firstOriginOption = optionsInDropdown[0]
    states.hoverIndex = getValueIndex(
      optionsArray.value,
      firstOriginOption || userCreatedOption
    )
  }

  const setSelected = () => {
    states.selected.clear()

    if (!props.multiple) {
      const option = getOption(props.modelValue as SelectOptionValue)
      if (option.created) {
        states.createdLabel = `${option.value}`
        states.createdSelected = true
      } else {
        states.createdSelected = false
      }
      states.selectedLabel = option.currentLabel
      states.selected.set(option.value, option)
      if (props.filter) states.query = states.selectedLabel
      return
    }

    states.selectedLabel = ''

    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        const option = getOption(value)
        states.selected.set(option.value, option)
      })
    }
  }

  const getOption = (value: SelectOptionValue): SelectOptionContext => {
    let option: SelectOptionContext | null = null

    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i]

      const isEqualValue = isObject(value)
        ? isEqual(cachedOption.value, value)
        : cachedOption.value === value
      if (isEqualValue) {
        option = cachedOption
        break
      }
    }

    if (option) return option

    const label: string | any[] = isObject(value)
      ? ''
      : !isNil(value)
      ? String(value)
      : ''

    const newOption = {
      value,
      currentLabel: label,
      label,
      hit: true,
    } as SelectOptionContext

    if (props.multiple) {
      newOption.hit = false
    }

    return newOption
  }

  const resetHoverIndex = () => {
    setTimeout(() => {
      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex((item) => {
          return isEqual(item, selectedArray.value[0])
        })
        return
      }

      if (selectedArray.value.length > 0) {
        states.hoverIndex = Math.min.apply(
          null,
          selectedArray.value.map((selected) => {
            return optionsArray.value.findIndex((item) => {
              return isEqual(item.value, selected.value)
            })
          })
        )
        return
      }

      states.hoverIndex = -1
    }, 300)
  }

  const handleResize = () => {
    if (reference.value && chips.value) {
      reference.value.style.height = `${chips.value.scrollHeight}px`
    }
    popperRef.value?.updatePopper()
  }

  const onInputChange = () => {
    if (props.filter && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel
      handleQueryChange(states.selectedLabel || '')
    }
  }

  const debouncedOnInputChange = lodashDebounce(() => {
    onInputChange()
  }, debounce.value)

  const debouncedQueryChange = lodashDebounce((e) => {
    handleQueryChange(e.target.value)
  }, debounce.value)

  const emitChange = (val: SelectValue) => {
    if (!isEqual(props.modelValue, val)) {
      emit('change', val)
    }
  }

  const getLastNotDisabledIndex = (value: SelectOptionValue[]) =>
    findLastIndex(
      value,
      (it: SelectOptionValue) => !states.disabledOptions.has(it)
    )

  const deletePrevTag = (e: KeyboardEvent) => {
    if (!props.multiple) return
    if (e.code === EVENT_CODE.delete) return

    const value = (e.target as HTMLInputElement).value

    if (value.length <= 0 && !toggleLastOptionHitState()) {
      // @ts-ignore
      const value = props.modelValue.slice()
      const lastNotDisabledIndex = getLastNotDisabledIndex(value)
      if (lastNotDisabledIndex < 0) return
      value.splice(lastNotDisabledIndex, 1)
      emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
    }

    // @ts-ignore
    if (value.length === 1 && props.modelValue.length === 0) {
      states.currentPlaceholder = states.cachedPlaceHolder
    }
  }

  const deleteTag = (tag: SelectOptionValue) => {
    const hasTag = states.cachedOptions.get(tag)
    if (!hasTag) return
    const index = getValueIndex(selectedArray.value, hasTag)
    if (index > -1 && !selectDisabled.value) {
      // @ts-ignore
      const value = props.modelValue.slice()
      value.splice(index, 1)
      emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
      emit('remove-tag', tag)
    }
    focus()
  }

  const deleteSelected = () => {
    const value: SelectOptionValue | any[] = props.multiple
      ? []
      : props.notValue
    if (isArray(value)) {
      for (const item of selectedArray.value) {
        if (item.isDisabled) value.push(item.value)
      }
    }
    emit(UPDATE_MODEL_EVENT, value)
    emitChange(value)
    states.hoverIndex = -1
    states.visible = false
    emit('clear')
    focus()
  }

  const handleOptionSelect = (
    option: SelectOptionContext,
    byClick: boolean
  ) => {
    if (props.multiple) {
      let modelValue: SelectOptionValue[] = props.modelValue as any
      if (!isArray(props.modelValue)) {
        if (states.options.has(modelValue)) {
          modelValue = [modelValue]
        } else {
          modelValue = []
        }
      }

      const value = modelValue.slice()
      const optionIndex = getValueIndex(selectedArray.value, option)

      if (optionIndex > -1) {
        value.splice(optionIndex, 1)
      } else if (
        props.multipleLimit <= 0 ||
        value.length < props.multipleLimit
      ) {
        value.push(option.value)
      }
      emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
      if (option.created) {
        states.query = ''
        handleQueryChange('')
      }
      if (props.filter) input.value?.focus()
    } else {
      emit(UPDATE_MODEL_EVENT, option.value)
      emitChange(option.value)
      states.visible = false
    }
    states.isSilentBlur = byClick
    setSoftFocus()
    if (states.visible) return
    nextTick(() => {
      scrollToOption(option)
    })
  }

  const getValueIndex = (
    arr: SelectOptionContext[],
    option: SelectOptionContext
  ) => {
    let index = -1
    arr.some((item, i) => {
      if (isEqual(item.value, option.value)) {
        index = i
        return true
      }
      return false
    })
    return index
  }

  const setSoftFocus = () => {
    states.softFocus = true
    const _input = input.value || reference.value
    if (_input) {
      _input?.focus()
    }
  }

  const scrollToOption = (option: SelectOptionContext) => {
    let target

    if (option?.value) {
      const options = optionsArray.value.filter(
        (item) => item.value === option.value
      )
      if (options.length > 0) {
        target = options[0].el
      }
    }

    if (popperRef.value && target) {
      const menu: HTMLElement | null | undefined =
        popperRef.value?.contentRef?.querySelector?.(`.${ns.e('options')}`)
      if (menu) {
        setStyle(menu, 'scroll-behavior', 'smooth')
        scrollIntoView(menu as HTMLElement, target)
        removeStyle(menu, 'scroll-behavior')
      }
    }
    scrollbar.value?.handleScroll()
  }

  const onOptionCreate = (
    value: SelectOptionValue,
    option: SelectOptionContext
  ) => {
    states.optionsCount++
    states.filteredOptionsCount++
    states.options.set(value, option)
    states.cachedOptions.set(value, option)
    option.isDisabled && states.disabledOptions.set(value, option)
  }

  const onOptionDestroy = (
    value: SelectOptionValue,
    option: SelectOptionContext
  ) => {
    if (states.options.get(value) === option) {
      states.optionsCount--
      states.filteredOptionsCount--
      states.options.delete(value)
    }
  }

  const resetInputState = (e: KeyboardEvent) => {
    if (e.code !== EVENT_CODE.backspace) toggleLastOptionHitState(false)
  }

  const toggleLastOptionHitState = (hit?: boolean) => {
    if (!selectedArray.value.length) return

    const lastNotDisabledIndex = getLastNotDisabledIndex(
      selectedArray.value.map((it) => it.value)
    )
    const option = selectedArray.value[lastNotDisabledIndex]
    if (!option) return

    if (isBoolean(hit)) {
      option.hit = hit
      return hit
    }

    option.hit = !option.hit
    return option.hit
  }

  const handleComposition = (event: Event) => {
    const text = (event.target as HTMLInputElement)?.value
    if (event.type === 'compositionend') {
      states.isOnComposition = false
      nextTick(() => handleQueryChange(text))
    } else {
      const lastCharacter = text[text.length - 1] || ''
      states.isOnComposition = !isKorean(lastCharacter)
    }
  }

  const handleTarget = (
    target: SelectTargetElement | null,
    condition = true
  ) => {
    if (condition) states.targetOnElement = target
  }

  const handleMenuEnter = () => {
    nextTick(() => scrollToOption(selectedArray.value[0]))
  }

  const focus = () => {
    states.visible = true
    reference.value?.focus()
  }

  const handleFocus = (event: FocusEvent) => {
    if (!states.softFocus) {
      if (props.filter) {
        if (!states.visible) {
          states.menuVisibleOnFocus = true
        }
        // states.visible = true
      }
      emit('focus', event)
    } else {
      states.softFocus = false
    }
  }

  const blur = () => {
    states.visible = false
    reference.value?.blur()
  }

  const handleBlur = (event: FocusEvent) => {
    // https://github.com/ElemeFE/element/pull/10822
    nextTick(() => {
      if (states.isSilentBlur) {
        states.isSilentBlur = false
      } else {
        emit('blur', event)
      }
    })
    states.softFocus = false
  }

  const handleClearClick = () => {
    deleteSelected()
  }

  const showClearable = computed(() => {
    if (!props.clearable || props.disabled || props.loading) return false
    if (optionsArray.value.length === 0) return false

    const ignoreDisabledOptions = optionsArray.value.filter(
      (e) => e.isDisabled === false
    )
    if (ignoreDisabledOptions.length === 0) return false

    return states.mouseEnter
  })

  const handleClose = () => {
    states.visible = false
  }

  const handleKeydownEscape = (event: Event | KeyboardEvent) => {
    if (states.visible) {
      event.preventDefault()
      event.stopPropagation()
      states.visible = false
    }
  }

  const toggleMenu = (e?: MouseEvent) => {
    if (e && !states.mouseEnter) return

    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false
      } else {
        if (!popperRef.value || !popperRef.value.isFocusInsideContent) {
          states.visible = !states.visible
        }
      }
      if (states.visible) {
        ;(input.value || reference.value)?.focus()
      }
    }
  }

  const selectOption = () => {
    if (!states.visible) {
      toggleMenu()
    } else {
      if (optionsArray.value[states.hoverIndex]) {
        handleOptionSelect(optionsArray.value[states.hoverIndex], false)
      }
    }
  }

  const optionsAllDisabled = computed(() =>
    optionsArray.value
      .filter((option) => option.visible)
      .every((option) => option.isDisabled)
  )

  const navigateOptions = (direction: string = 'next' || 'prev') => {
    if (!states.visible) {
      states.visible = true
      return
    }
    if (states.options.size === 0 || states.filteredOptionsCount === 0) return
    if (states.isOnComposition) return

    if (!optionsAllDisabled.value) {
      if (direction === 'next') {
        states.hoverIndex++
        if (states.hoverIndex === states.options.size) {
          states.hoverIndex = 0
        }
      } else if (direction === 'prev') {
        states.hoverIndex--
        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.size - 1
        }
      }
      const option = optionsArray.value[states.hoverIndex]
      if (
        option.isDisabled === true ||
        option.groupDisabled === true ||
        !option.visible
      ) {
        navigateOptions(direction)
      }

      nextTick(
        () => !isNil(hoverOption.value) && scrollToOption(hoverOption.value)
      )
    }
  }

  const handleMouseEnter = () => {
    states.mouseEnter = true
  }

  const handleMouseLeave = () => {
    states.mouseEnter = false
  }

  const processBeforeOpen = () => true

  const processBeforeClose = () => {
    if (states.targetOnElement == null) return true
    return !['chip-close', 'input-filter'].includes(states.targetOnElement)
  }

  return {
    showNewOption,
    inputId,
    optionsArray,
    cachedOptionsArray,
    selectedArray,
    handleResize,
    debouncedOnInputChange,
    debouncedQueryChange,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    readonly,
    showClose,
    handleTarget,
    setSelected,
    managePlaceholder,
    selectDisabled,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    focus,
    handleFocus,
    blur,
    handleBlur,
    handleClearClick,
    showClearable,
    handleClose,
    handleKeydownEscape,
    toggleMenu,
    selectOption,
    navigateOptions,
    dropMenuVisible,
    queryChange,

    // DOM ref
    reference,
    input,
    popperRef,
    chips,
    selectWrapper,
    scrollbar,

    // Mouser Event
    handleMouseEnter,
    handleMouseLeave,

    processBeforeOpen,
    processBeforeClose,

    emptyText,

    resetHoverIndex,
  }
}
