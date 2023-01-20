import { isArray } from '@vuesax-alpha/utils'
import { useCheckboxEvent } from './use-checkbox-event'
import { useCheckboxModel } from './use-checkbox-model'
import { useCheckboxStatus } from './use-checkbox-status'

import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from './use-checkbox-model'

const setStoreValue = (
  props: CheckboxProps,
  { model }: Pick<CheckboxModel, 'model'>
) => {
  function addToStore() {
    if (isArray(model.value) && !model.value.includes(props.value)) {
      model.value.push(props.value)
    } else {
      model.value = props.value || true
    }
  }
  props.checked && addToStore()
}

export const useCheckbox = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots']
) => {
  const { model, isLimitExceeded } = useCheckboxModel(props)
  const { isDisabled, isFocused, isChecked, hasOwnLabel } = useCheckboxStatus(
    props,
    slots,
    { model }
  )
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
  })

  setStoreValue(props, { model })

  return {
    isChecked,
    isDisabled,
    isFocused,
    hasOwnLabel,
    model,
    handleChange,
    onClickRoot,
  }
}
