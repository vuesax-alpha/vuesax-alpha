import { computed, getCurrentInstance } from 'vue'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import type { Ref } from 'vue'
import type { InputProps } from './../input'

export const useInputClearable = (
  props: InputProps,
  {
    hovering,
    focused,
  }: {
    hovering: Ref<boolean>
    focused: Ref<boolean>
  }
) => {
  const { emit } = getCurrentInstance()!

  const clear = () => {
    if (props.disabled || props.loading) return

    emit(UPDATE_MODEL_EVENT, '')
    emit('change', '')
    emit('clear')
    emit('input', '')
  }

  const showClear = computed(
    () =>
      props.clearable &&
      !props.disabled &&
      !props.loading &&
      String(props.modelValue) &&
      (focused.value || hovering.value)
  )

  return {
    clear,
    showClear,
  }
}
