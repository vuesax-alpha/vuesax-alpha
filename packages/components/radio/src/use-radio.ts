import { computed, ref, toRefs } from 'vue'

import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import type { RadioEmitFn, RadioProps } from './radio'

export const useRadio = (props: RadioProps, emit: RadioEmitFn) => {
  const model = computed({
    get: () => props.modelValue,
    set: () => {
      emit(UPDATE_MODEL_EVENT, props.value)
    },
  })

  const { disabled, loading } = toRefs(props)
  const isDisabled = computed(() => disabled.value || loading.value)
  const checked = computed(() => props.modelValue === props.value)

  const focus = ref(false)

  return {
    focus,
    disabled,
    isDisabled,
    checked,
    loading,
    model,
  }
}
