import { computed, inject, ref, toRaw } from 'vue'
import { isEqual } from 'lodash-unified'
import { isArray, isBoolean, isObject, isUndefined } from '@vuesax-alpha/utils'

import { useDisabled } from '@vuesax-alpha/hooks'
import { checkboxGroupContextKey } from '@vuesax-alpha/tokens'
import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from '../composables'

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Pick<CheckboxModel, 'model'>
) => {
  const isFocused = ref(false)
  const isChecked = computed<boolean>(() => {
    const value = model.value

    if (isBoolean(value)) return value

    if (isArray(value)) {
      if (isObject(props.value)) {
        return value.map(toRaw).some((o) => isEqual(o, props.value))
      }
      return value.map(toRaw).includes(props.value)
    }

    if (value !== null && value !== undefined) return value === props.value

    if (props.checkedForce) return true

    return !!value
  })

  const hasOwnLabel = computed<boolean>(() => {
    return !!(slots.default || props.label)
  })

  const checkboxGroup = inject(checkboxGroupContextKey, undefined)

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.max?.value
    const min = checkboxGroup?.min?.value
    return (
      (!isUndefined(max) && model.value.length >= max && !isChecked.value) ||
      (!isUndefined(min) && model.value.length <= min && isChecked.value)
    )
  })

  const isDisabled = useDisabled(
    computed(() => checkboxGroup?.disabled.value || isLimitDisabled.value)
  )

  return {
    isChecked,
    isFocused,
    isDisabled,
    isLimitDisabled,
    hasOwnLabel,
  }
}

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>
