import { computed } from 'vue'
import { isArray, isBoolean } from '@vuesax-alpha/utils'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import type { SwitchEmitFn, SwitchProps } from './switch'

export const useSwitch = (props: SwitchProps, emit: SwitchEmitFn) => {
  const isLoading = computed(() => props.loading)
  const isDisabled = computed(() => props.disabled)

  const isChecked = computed(() => {
    if (props.modelValue) {
      if (isBoolean(props.modelValue)) return props.modelValue
      if (isArray(props.modelValue)) {
        return props.modelValue.some((e) => e == props.value)
      }
    }
    return false
  })

  const click = (event: Event) => {
    emit('click', event)
  }

  const input = (event: Event) => {
    if (isBoolean(props.modelValue)) {
      if (props.value !== null) emit(UPDATE_MODEL_EVENT, props.value)
      else emit(UPDATE_MODEL_EVENT, !props.modelValue)
    } else if (isArray(props.modelValue)) {
      const array = props.modelValue
      const indexOfValue = array.indexOf(props.value)

      if (indexOfValue == -1) {
        array.push(props.value)
      } else {
        array.splice(indexOfValue, 1)
      }
      emit(UPDATE_MODEL_EVENT, array)
    } else {
      if (props.value !== props.modelValue) {
        emit(UPDATE_MODEL_EVENT, props.value)
      } else {
        emit(UPDATE_MODEL_EVENT, props.notValue)
      }
    }
    emit('change', event)
  }

  return {
    isChecked,
    isDisabled,
    isLoading,

    click,
    input,
  }
}
