import { computed, ref, toRefs } from 'vue'

import { useVModel } from '@vueuse/core'
import type { RadioEmitFn, RadioProps } from './radio'

export const useRadio = (props: RadioProps, emit: RadioEmitFn) => {
  const model = useVModel(props, 'modelValue', emit)

  const { disabled, loading } = toRefs(props)
  const isDisabled = computed(() => disabled.value || loading.value)
  const checked = computed(() => props.modelValue === props.activeValue)

  if (![props.activeValue, props.inactiveValue].includes(props.modelValue)) {
    model.value = props.inactiveValue
  }

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
