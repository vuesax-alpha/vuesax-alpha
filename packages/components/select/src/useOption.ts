import { computed, inject, toRaw, watch } from 'vue'
import { isObject as _isObject } from '@vue/shared'
import { get } from 'lodash-unified'
import { escapeStringRegexp, throwError } from '@vuesax-alpha/utils'
import { selectContextKey, selectGroupContextKey } from './tokens'

import type { OptionProps } from './option'
import type { SelectOptionStates, SelectValue } from './tokens'

export function useOption(props: OptionProps, states: SelectOptionStates) {
  const select = inject(selectContextKey)
  const selectGroup = inject(selectGroupContextKey, { disabled: false })

  if (!select) {
    throwError(
      'Select Option',
      'Option component must be called inside select | option-group component'
    )
  }

  const isObject = computed(() => _isObject(props.value))

  const isSelected = computed(() => {
    if (!select.props.multiple) {
      return isEqual(props.value, select.props.modelValue)
    } else {
      // @ts-ignore
      return contains(select.props.modelValue, props.value)
    }
  })

  const limitReached = computed(() => {
    if (select.props.multiple && select.props.multipleLimit) {
      const modelValue = (select.props.modelValue || []) as SelectValue[]
      return (
        !isSelected.value &&
        modelValue.length >= select.props.multipleLimit &&
        select.props.multipleLimit > 0
      )
    }
    return false
  })

  const currentLabel = computed(() => {
    return (
      props.label || ((isObject.value ? '' : props.value) as unknown as string)
    )
  })

  const currentValue = computed(() => {
    return props.value || props.label || ''
  })

  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value
  })

  const contains = (arr: unknown[], target: unknown) => {
    if (!isObject.value) {
      return arr && arr.includes(target)
    } else {
      const modelKey = select.props.modelKey
      return (
        arr &&
        arr.some((item) => {
          return toRaw(get(item, modelKey)) === get(target, modelKey)
        })
      )
    }
  }

  const isEqual = (a: unknown, b: unknown) => {
    if (!isObject.value) {
      return a === b
    } else {
      const { modelKey } = select.props
      return get(a, modelKey) === get(b, modelKey)
    }
  }

  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex = select.optionsArray.indexOf(
        select.options.get(props.value)!
      )
    }
  }

  watch(
    () => currentLabel.value,
    () => {
      // !remote
      if (!states.userCreated) select.setSelected()
    }
  )

  // watch(
  //   () => props.value,
  //   (val, oldVal) => {
  //     const { modelKey } = select.props

  //     if (!Object.is(val, oldVal)) {
  //       select.onOptionDestroy(oldVal, vm)
  //       select.onOptionCreate(vm)
  //     }

  //     // !remote
  //     if (!vm.userCreated) {
  //       if (
  //         modelKey &&
  //         typeof val === 'object' &&
  //         typeof oldVal === 'object' &&
  //         val[modelKey] === oldVal[modelKey]
  //       ) {
  //         return
  //       }
  //       select.setSelected()
  //     }
  //   }
  // )

  watch(
    () => selectGroup.disabled,
    (val) => {
      states.groupDisabled = val
    },
    { immediate: true }
  )

  watch(
    () => select.query,
    (query: string) => {
      const regexp = new RegExp(escapeStringRegexp(query), 'i')
      states.visible = regexp.test(`${currentLabel.value}`)
      if (!states.visible) {
        select.filteredOptionsCount--
      }
    }
  )

  return {
    select,
    currentLabel,
    currentValue,
    isSelected,
    isDisabled,
    hoverItem,
  }
}
