import { computed, getCurrentInstance, inject, ref } from 'vue'
import { isArray, isUndefined } from '@vuesax-alpha/utils'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { checkboxGroupContextKey } from '@vuesax-alpha/tokens'
import type { CheckboxProps } from './../checkbox'

export const useCheckboxModel = (props: CheckboxProps) => {
  // self model check status
  const selfModel = ref<boolean>(false)
  const { emit } = getCurrentInstance()!
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => isUndefined(checkboxGroup) === false)
  const isLimitExceeded = ref(false)
  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value
    },

    set(val: unknown) {
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup?.max?.value !== undefined &&
          val.length > checkboxGroup?.max.value
        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val)
        return
      }

      let updatedValue = val
      // have self value
      if (val && props.value) {
        updatedValue = props.value
      }

      emit(UPDATE_MODEL_EVENT, updatedValue)
      selfModel.value = !!val
    },
  })

  return {
    model,
    isGroup,
    isLimitExceeded,
  }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
