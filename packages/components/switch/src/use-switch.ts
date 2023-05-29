import { computed } from 'vue'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@vuesax-alpha/constants'
import type { SwitchEmitFn, SwitchProps } from './switch'

export const useSwitch = (props: SwitchProps, emit: SwitchEmitFn) => {
  const checked = computed(() => props.modelValue === props.activeValue)
  const isLoading = computed(() => props.loading)
  const isDisabled = computed(() => props.disabled || isLoading.value)

  if (![props.activeValue, props.inactiveValue].includes(props.modelValue)) {
    emit(UPDATE_MODEL_EVENT, props.inactiveValue)
    emit(CHANGE_EVENT, props.inactiveValue)
    emit(INPUT_EVENT, props.inactiveValue)
  }

  const handleChange = () => {
    const val = checked.value ? props.inactiveValue : props.activeValue
    emit(UPDATE_MODEL_EVENT, val)
    emit(CHANGE_EVENT, val)
    emit(INPUT_EVENT, val)
  }

  const switchValue = () => {
    if (isDisabled.value) return

    handleChange()
  }

  return {
    checked,
    isDisabled,
    isLoading,

    handleChange,
    switchValue,
  }
}
