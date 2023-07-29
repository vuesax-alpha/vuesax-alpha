import {
  type ComponentInternalInstance,
  computed,
  inject,
  onBeforeMount,
  ref,
  toRaw,
} from 'vue'
import { isEqual, isNil, toArray } from 'lodash-unified'
import { isArray, isBoolean, isObject, isUndefined } from '@vuesax-alpha/utils'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { useDisabled } from '@vuesax-alpha/hooks'
import { checkboxGroupContextKey } from '@vuesax-alpha/tokens'
import type {
  CheckboxEmitsFn,
  CheckboxProps,
  CheckboxValueType,
} from './../checkbox'

const setStoreValue = (
  props: CheckboxProps,
  { model }: Pick<UseCheckbox, 'model'>
) => {
  if (props.checked) {
    if (isArray(model.value) && !model.value.includes(props.value)) {
      model.value.push(props.value)
    } else {
      model.value = props.value || true
    }
  }
}

export const useCheckbox = (
  props: CheckboxProps,
  emit: CheckboxEmitsFn,
  slots: ComponentInternalInstance['slots']
) => {
  // self model check status
  const selfModel = ref<boolean>(false)
  const isLimitExceeded = ref<boolean>(false)

  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => isUndefined(checkboxGroup) === false)

  const isChecked = computed<boolean>(() => {
    const value = model.value || checkboxGroup?.modelValue

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

  const isLimitDisabled = computed(() => {
    const max = Number(checkboxGroup?.max?.value || props.max)
    const min = Number(checkboxGroup?.min?.value || props.min)

    return (
      (!isNil(max) && toArray(model.value).length >= max && !isChecked.value) ||
      (!isNil(min) && toArray(model.value).length <= min && isChecked.value)
    )
  })

  const isDisabled = useDisabled(
    computed(() => checkboxGroup?.disabled.value || isLimitDisabled.value)
  )

  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue || selfModel.value
    },

    set(val: CheckboxValueType) {
      if (isDisabled.value || isLimitExceeded.value) return

      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup?.max?.value !== undefined &&
          val.length > checkboxGroup?.max.value
        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val)
        return
      }

      let updatedValue: CheckboxValueType = val
      // have self value
      if (val && props.value) {
        updatedValue = props.value
      }

      if (isBoolean(updatedValue)) {
        emit(UPDATE_MODEL_EVENT, updatedValue)
      } else if (isArray(props.modelValue)) {
        const modelValueRaw = props.modelValue.map(toRaw)

        const indexVal = modelValueRaw.findIndex((e) =>
          isEqual(e, updatedValue)
        )

        if (indexVal == -1) {
          modelValueRaw.push(updatedValue)
        } else {
          modelValueRaw.splice(indexVal, 1)
        }
        emit('update:modelValue', modelValueRaw)
      } else {
        if (updatedValue !== props.modelValue) {
          if (val) {
            emit(UPDATE_MODEL_EVENT, [props.modelValue, updatedValue])
          } else {
            emit(UPDATE_MODEL_EVENT, updatedValue)
          }
        } else {
          emit(UPDATE_MODEL_EVENT, props.notValue || false)
        }
      }

      selfModel.value = !!val
    },
  })

  onBeforeMount(() => {
    if (props.checked || props.checkedForce) {
      model.value = props.value || true
    }
  })

  const getCheckboxValue = (value: string | number | boolean) => {
    return value === props.value || value === true
  }

  const handleChange = (e: Event) => {
    if (isLimitExceeded.value) return

    const target = e.target as HTMLInputElement
    emit('change', getCheckboxValue(target.checked))
  }

  setStoreValue(props, { model })

  return {
    isChecked,
    isDisabled,
    hasOwnLabel,
    model,
    handleChange,
  }
}

export type UseCheckbox = ReturnType<typeof useCheckbox>
