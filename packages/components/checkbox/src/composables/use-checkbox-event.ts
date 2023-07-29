import { getCurrentInstance } from 'vue'

import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from '../composables'

export const useCheckboxEvent = (
  props: CheckboxProps,
  { isLimitExceeded }: Pick<CheckboxModel, 'isLimitExceeded'>
) => {
  const { emit } = getCurrentInstance()!

  function getCheckboxValue(value: string | number | boolean) {
    return value === props.value || value === true
  }

  function handleChange(e: Event) {
    if (isLimitExceeded.value) return

    const target = e.target as HTMLInputElement
    emit('change', getCheckboxValue(target.checked), e)
  }

  return {
    handleChange,
  }
}
