// @ts-nocheck
import {
  computed,
  nextTick,
  reactive,
  ref,
  shallowRef,
  toRaw,
  triggerRef,
  watch,
} from 'vue'
import { isObject } from '@vue/shared'
import {
  get,
  indexOf,
  isEqual,
  isNil,
  last,
  debounce as lodashDebounce,
  toArray,
} from 'lodash-unified'
import { isClient } from '@vueuse/core'
import { EVENT_CODE, UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import {
  isBoolean,
  isFunction,
  isKorean,
  isString,
  scrollIntoView,
} from '@vuesax-alpha/utils'
import { useId, useNamespace } from '@vuesax-alpha/hooks'
import type { TooltipExpose } from '@vuesax-alpha/components/tooltip/src/tooltip.vue'
import type { SelectEmitsFn, SelectProps } from './select'

import type { ComponentPublicInstance } from 'vue'
import type {
  SelectOptionContext,
  SelectOptionValue,
  SelectStates,
  SelectValue,
} from './tokens'

export function useSelectStates(props: SelectProps): SelectStates {
  return reactive({
    options: new Map(),
    cachedOptions: new Map(),
    selected: [],
    createdLabel: null,
    createdSelected: false,
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: '',
    hoverIndex: -1,
    query: '',
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: '',
    currentPlaceholder: props.placeholder,
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    prefixWidth: 11,
    tagInMultiLine: false,
    mouseEnter: false,
  })
}

export const useSelect = (
  props: SelectProps,
  states: SelectStates,
  emit: SelectEmitsFn
) => {
  const ns = useNamespace('select')

  // template refs
  const reference = ref<HTMLInputElement | null>(null)
  const input = ref<HTMLInputElement | null>(null)
  const tooltipRef = ref<TooltipExpose | null>(null)
  const tags = ref<HTMLElement | null>(null)
  const selectWrapper = ref<HTMLElement | null>(null)
  const scrollbar = ref<{
    handleScroll: () => void
  } | null>(null)
  const hoverOption = ref<SelectOptionContext | null>()
  const query = shallowRef<string>('')
  const inputId = useId(props.id)
  const groupQuery = shallowRef('')
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
      props.clearable &&
      !selectDisabled.value &&
      states.inputHovering &&
      hasValue
    return criteria
  })

  const optionsArray = computed(() => Array.from(states.options.values()))

  const cachedOptionsArray = computed(() =>
    Array.from(states.cachedOptions.values())
  )

  const selectedArray = computed<SelectOptionContext[]>(() =>
    toArray(states.selected)
  )

  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value
      .filter((option) => {
        return !option.userCreated
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

  watch(
    () => props.placeholder,
    (val) => {
      states.cachedPlaceHolder = states.currentPlaceholder = val
    }
  )

  watch(
    () => props.modelValue,
    (val) => {
      if (props.multiple) {
        // @ts-ignore
        if ((val && val.length > 0) || (input.value && states.query !== '')) {
          states.currentPlaceholder = ''
        } else {
          states.currentPlaceholder = states.cachedPlaceHolder
        }
        if (props.filter) {
          states.query = ''
          handleQueryChange(states.query)
        }
      }
      setSelected()
      if (props.filter && !props.multiple) {
        states.inputLength = 20
      }
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
        states.query = ''
        states.previousQuery = null
        states.selectedLabel = ''
        states.inputLength = 20
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
        tooltipRef.value?.updateTooltip?.()

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
            query.value = ''

            triggerRef(query)
            triggerRef(groupQuery)
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
      tooltipRef.value?.updateTooltip?.()

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
        hoverOption.value = optionsArray.value[0]
      } else {
        hoverOption.value = undefined
      }
      optionsArray.value.forEach((option) => {
        option.hover = isEqual(hoverOption.value, option)
      })
    }
  )

  const handleQueryChange = async (val: string) => {
    if (states.previousQuery === val || states.isOnComposition) return
    if (states.previousQuery === null && isFunction(props.filterMethod)) {
      states.previousQuery = val
      return
    }
    states.previousQuery = val
    nextTick(() => {
      if (states.visible) tooltipRef.value?.updateTooltip?.()
    })
    states.hoverIndex = -1
    if (props.multiple && props.filter) {
      nextTick(() => {
        const length = input.value!.value.length * 15 + 20
        states.inputLength = props.collapseTags ? Math.min(50, length) : length
        managePlaceholder()
      })
    }
    if (isFunction(props.filterMethod)) {
      props.filterMethod(val)
      triggerRef(groupQuery)
    } else {
      states.filteredOptionsCount = states.optionsCount
      query.value = val

      triggerRef(query)
      triggerRef(groupQuery)
    }
    if (
      props.defaultFirstOption &&
      props.filter &&
      states.filteredOptionsCount
    ) {
      await nextTick()
      checkDefaultFirstOption()
    }
  }

  const managePlaceholder = () => {
    if (states.currentPlaceholder !== '') {
      states.currentPlaceholder = input.value!.value
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
   *   (NOTE: there must be only one user-created option in dropdown list with query)
   * - if there's no user-created option in list, just find the first one as usual
   *   (NOTE: exclude options that are disabled or in disabled-group)
   */
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter(
      (n) => n.visible && !n.disabled && !n.groupDisabled
    )
    const userCreatedOption = optionsInDropdown.find((n) => n.userCreated)
    const firstOriginOption = optionsInDropdown[0]
    states.hoverIndex = getValueIndex(
      optionsArray.value,
      firstOriginOption || userCreatedOption
    )
  }

  const setSelected = () => {
    if (!props.multiple) {
      const option = getOption(props.modelValue as SelectOptionValue)
      if (option.userCreated) {
        states.createdLabel = `${option.value}`
        states.createdSelected = true
      } else {
        states.createdSelected = false
      }
      states.selectedLabel = option.currentLabel
      states.selected = [option]
      if (props.filter) states.query = states.selectedLabel
      return
    } else {
      states.selectedLabel = ''
    }
    const result: SelectOptionContext[] = []
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value))
      })
    }
    states.selected = result
  }

  const getOption = (value: SelectOptionValue): SelectOptionContext => {
    let option

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
    const label = isObject(value) ? value.label : !isNil(value) ? value : ''
    const newOption: SelectOptionContext = {
      value,
      currentLabel: label,
    } as any
    if (props.multiple) {
      newOption.hitState = false
    }
    return newOption
  }

  const resetHoverIndex = () => {
    setTimeout(() => {
      const modelKey = props.modelKey
      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex((item) => {
          return getValueKey(item) === getValueKey(selectedArray.value[0])
        })
      } else {
        if (selectedArray.value.length > 0) {
          states.hoverIndex = Math.min.apply(
            null,
            selectedArray.value.map((selected) => {
              return optionsArray.value.findIndex((item) => {
                return get(item, modelKey) === get(selected, modelKey)
              })
            })
          )
        } else {
          states.hoverIndex = -1
        }
      }
    }, 300)
  }

  const handleResize = () => {
    tooltipRef.value?.updateTooltip?.()
  }

  const onInputChange = () => {
    if (props.filter && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel
      handleQueryChange(states.query || '')
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

  const deletePrevTag = (e: KeyboardEvent) => {
    if (!props.multiple) return

    const value = (e.target as HTMLInputElement).value

    if (value.length <= 0 && !toggleLastOptionHitState()) {
      // @ts-ignore
      const value = props.modelValue.slice()
      value.pop()
      emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
    }

    // @ts-ignore
    if (value.length === 1 && props.modelValue.length === 0) {
      states.currentPlaceholder = states.cachedPlaceHolder
    }
  }

  const deleteTag = (event: MouseEvent, tag: SelectOptionValue) => {
    const hasTag = states.cachedOptions.get(tag)
    if (!hasTag) return
    const index = selectedArray.value.indexOf(hasTag)
    if (index > -1 && !selectDisabled.value) {
      const value = (props.modelValue as SelectOptionValue[]).slice()
      value.splice(index, 1)
      emit(UPDATE_MODEL_EVENT, value)
      emitChange(value)
      emit('remove-tag', tag)
    }
    event.stopPropagation()
  }

  const deleteSelected = () => {
    const value: string | any[] = props.multiple ? [] : ''
    if (!isString(value)) {
      for (const item of selectedArray.value) {
        if (item.isDisabled) value.push(item.value)
      }
    }
    emit(UPDATE_MODEL_EVENT, value)
    emitChange(value)
    states.hoverIndex = -1
    states.visible = false
    emit('clear')
  }

  const handleOptionSelect = (
    option: SelectOptionContext,
    byClick: boolean
  ) => {
    if (props.multiple) {
      const value = ((props.modelValue || []) as SelectOptionValue[]).slice()
      const optionIndex = indexOf(selectedArray.value, option)
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
      if (option.userCreated) {
        states.query = ''
        handleQueryChange('')
        states.inputLength = 20
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
    if (!isObject(option.value)) return arr.indexOf(option)

    const modelKey = props.modelKey
    let index = -1
    arr.some((item, i) => {
      if (toRaw(get(item.value, modelKey)) === get(option.value, modelKey)) {
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

    if (option.value) {
      const options = optionsArray.value.filter(
        (item) => item.value === option.value
      )
      if (options.length > 0) {
        target = options[0].el
      }
    }

    if (tooltipRef.value && target) {
      const menu = tooltipRef.value?.popperRef?.contentRef?.querySelector?.(
        `.${ns.be('dropdown', 'wrap')}`
      )
      if (menu) {
        scrollIntoView(menu as HTMLElement, target)
      }
    }
    scrollbar.value?.handleScroll()
  }

  const onOptionCreate = (vm: SelectOptionContext) => {
    states.optionsCount++
    states.filteredOptionsCount++
    states.options.set(vm.value, vm)
    states.cachedOptions.set(vm.value, vm)
  }

  const onOptionDestroy = (key: SelectOptionValue, vm: SelectOptionContext) => {
    if (states.options.get(key) === vm) {
      states.optionsCount--
      states.filteredOptionsCount--
      states.options.delete(key)
    }
  }

  const resetInputState = (e: KeyboardEvent) => {
    if (e.code !== EVENT_CODE.backspace) toggleLastOptionHitState(false)
    states.inputLength = input.value!.value.length * 15 + 20
  }

  const toggleLastOptionHitState = (hit?: boolean) => {
    const option = last(selectedArray.value)
    if (!option) return

    if (isBoolean(hit)) {
      option.hitState = hit
      return hit
    }

    option.hitState = !option.hitState
    return option.hitState
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

  const handleMenuEnter = () => {
    nextTick(() => scrollToOption(selectedArray.value[0]))
  }

  const handleFocus = (event: FocusEvent) => {
    if (!states.softFocus) {
      if (props.filter) {
        if (!states.visible) {
          states.menuVisibleOnFocus = true
        }
        states.visible = true
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

  const handleClose = () => {
    states.visible = false
  }

  const handleKeydownEscape = (event: KeyboardEvent) => {
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
        if (!tooltipRef.value || !tooltipRef.value.isFocusInsideContent()) {
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

  const getValueKey = (item: SelectOptionContext) => {
    return isObject(item.value) ? get(item.value, props.modelKey) : item.value
  }

  const optionsAllDisabled = computed(() =>
    optionsArray.value
      .filter((option) => option.visible)
      .every((option) => option.disabled)
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
        option.disabled === true ||
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

  return {
    showNewOption,
    inputId,
    optionsArray,
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
    setSelected,
    managePlaceholder,
    selectDisabled,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    blur,
    handleBlur,
    handleClearClick,
    handleClose,
    handleKeydownEscape,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropMenuVisible,
    query,
    groupQuery,

    // DOM ref
    reference,
    input,
    tooltipRef,
    tags,
    selectWrapper,
    scrollbar,

    // Mouser Event
    handleMouseEnter,
    handleMouseLeave,
  }
}
