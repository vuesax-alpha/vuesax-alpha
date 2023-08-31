<template>
  <div
    :class="[
      ns.b(),
      ns.is('disabled', isDisabled),
      ns.is('readonly', readonly),
      ns.is('without-controls', !controls),
    ]"
    :style="wrapperStyle"
    @dragstart.prevent
  >
    <span
      v-if="controls"
      v-repeat-click="decrease"
      role="button"
      :class="[ns.e('decrease'), ns.is('disabled', minDisabled)]"
      @keydown.enter="decrease"
    >
      <vs-icon>
        <minus />
      </vs-icon>
    </span>
    <span
      v-if="controls"
      v-repeat-click="increase"
      role="button"
      :class="[ns.e('increase'), ns.is('disabled', maxDisabled)]"
      @keydown.enter="increase"
    >
      <vs-icon>
        <plus />
      </vs-icon>
    </span>
    <vs-input
      :id="id"
      ref="input"
      type="number"
      block
      :step="step"
      :model-value="displayValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="isDisabled"
      :max="max"
      :min="min"
      :name="name"
      :label="label"
      @wheel.prevent
      @keydown.up.prevent="increase"
      @keydown.down.prevent="decrease"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
      @change="handleInputChange"
    />
  </div>
</template>
<script lang="ts" setup>
import {
  computed,
  onMounted,
  onUpdated,
  reactive,
  ref,
  toRef,
  watch,
} from 'vue'
import { isNil } from 'lodash-unified'
import { VsInput } from '@vuesax-alpha/components/input'
import { VsIcon } from '@vuesax-alpha/components/icon'
import { RepeatClick as vRepeatClick } from '@vuesax-alpha/directives'
import { useDisabled, useNamespace } from '@vuesax-alpha/hooks'
import {
  debugWarn,
  getVsColor,
  isNumber,
  isString,
  isUndefined,
  throwError,
} from '@vuesax-alpha/utils'
import { Minus, Plus } from '@vuesax-alpha/icons-vue'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@vuesax-alpha/constants'
import { inputNumberEmits, inputNumberProps } from './input-number'

import type { InputInstance } from '@vuesax-alpha/components/input'

defineOptions({
  name: 'VsInputNumber',
})

const props = defineProps(inputNumberProps)
const emit = defineEmits(inputNumberEmits)

const ns = useNamespace('input-number')
const input = ref<InputInstance>()

interface Data {
  currentValue: number | null | undefined
  userInput: null | number | string
}
const data = reactive<Data>({
  currentValue: props.modelValue,
  userInput: null,
})

const wrapperStyle = computed(() => ({
  [ns.cssVarBlockName('color')]: getVsColor(props.color),
  [ns.cssVarBlockName('background')]: getVsColor(props.background),
}))

const isDisabled = useDisabled(toRef(props, 'disabled'))

const minDisabled = computed(
  () => isNumber(props.modelValue) && props.modelValue <= props.min
)
const maxDisabled = computed(
  () => isNumber(props.modelValue) && props.modelValue >= props.max
)

const numPrecision = computed(() => {
  const stepPrecision = getPrecision(props.step)
  if (!isUndefined(props.precision)) {
    if (stepPrecision > props.precision) {
      debugWarn(
        'InputNumber',
        'precision should not be less than the decimal places of step'
      )
    }
    return props.precision
  } else {
    return Math.max(getPrecision(props.modelValue), stepPrecision)
  }
})

const displayValue = computed(() => {
  if (data.userInput !== null) {
    return data.userInput
  }
  let currentValue: number | string | undefined | null = data.currentValue
  if (isNil(currentValue)) return ''
  if (isNumber(currentValue)) {
    if (Number.isNaN(currentValue)) return ''
    if (!isUndefined(props.precision)) {
      currentValue = currentValue.toFixed(props.precision)
    }
  }
  return currentValue
})
const toPrecision = (num: number, pre?: number) => {
  if (isUndefined(pre)) pre = numPrecision.value
  if (pre === 0) return Math.round(num)
  let snum = String(num)
  const pointPos = snum.indexOf('.')
  if (pointPos === -1) return num
  const nums = snum.replace('.', '').split('')
  const datum = nums[pointPos + pre]
  if (!datum) return num
  const length = snum.length
  if (snum.charAt(length - 1) === '5') {
    snum = `${snum.slice(0, Math.max(0, length - 1))}6`
  }
  return Number.parseFloat(Number(snum).toFixed(pre))
}
const getPrecision = (value: number | null | undefined) => {
  if (isNil(value)) return 0
  const valueString = value.toString()
  const dotPosition = valueString.indexOf('.')
  let precision = 0
  if (dotPosition !== -1) {
    precision = valueString.length - dotPosition - 1
  }
  return precision
}
const ensurePrecision = (val: number, coefficient: 1 | -1 = 1) => {
  if (!isNumber(val)) return data.currentValue
  // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
  return toPrecision(val + props.step * coefficient)
}
const increase = () => {
  if (props.readonly || isDisabled.value || maxDisabled.value) return
  const value = Number(displayValue.value) || 0
  const newVal = ensurePrecision(value)
  setCurrentValue(newVal)
  emit(INPUT_EVENT, data.currentValue)
}
const decrease = () => {
  if (props.readonly || isDisabled.value || minDisabled.value) return
  const value = Number(displayValue.value) || 0
  const newVal = ensurePrecision(value, -1)
  setCurrentValue(newVal)
  emit(INPUT_EVENT, data.currentValue)
}
const verifyValue = (
  value: number | string | null | undefined,
  update?: boolean
): number | null | undefined => {
  const { max, min, step, precision, stepStrictly, valueOnClear } = props
  if (max < min) {
    throwError('InputNumber', 'min should not be greater than max.')
  }
  let newVal = Number(value)
  if (isNil(value) || Number.isNaN(newVal)) {
    return null
  }
  if (value === '') {
    if (valueOnClear === null) {
      return null
    }
    newVal = isString(valueOnClear) ? { min, max }[valueOnClear] : valueOnClear
  }
  if (stepStrictly) {
    newVal = toPrecision(Math.round(newVal / step) * step, precision)
  }
  if (!isUndefined(precision)) {
    newVal = toPrecision(newVal, precision)
  }
  if (newVal > max || newVal < min) {
    newVal = newVal > max ? max : min
    update && emit(UPDATE_MODEL_EVENT, newVal)
  }
  return newVal
}
const setCurrentValue = (
  value: number | string | null | undefined,
  emitChange = true
) => {
  const oldVal = data.currentValue
  const newVal = verifyValue(value)
  if (!emitChange) {
    emit(UPDATE_MODEL_EVENT, newVal!)
    return
  }
  if (oldVal === newVal) return
  data.userInput = null
  emit(UPDATE_MODEL_EVENT, newVal!)
  emit(CHANGE_EVENT, newVal!, oldVal!)

  data.currentValue = newVal
}
const handleInput = (value: string) => {
  data.userInput = value
  const newVal = value === '' ? null : Number(value)
  emit(INPUT_EVENT, newVal)
  setCurrentValue(newVal, false)
}
const handleInputChange = (value: string) => {
  const newVal = value !== '' ? Number(value) : ''
  if ((isNumber(newVal) && !Number.isNaN(newVal)) || value === '') {
    setCurrentValue(newVal)
  }
  data.userInput = null
}

const focus = () => {
  input.value?.focus?.()
}

const blur = () => {
  input.value?.blur?.()
}

const handleFocus = (event: MouseEvent | FocusEvent) => {
  emit('focus', event)
}

const handleBlur = (event: MouseEvent | FocusEvent) => {
  emit('blur', event)
}

watch(
  () => props.modelValue,
  (value) => {
    const userInput = verifyValue(data.userInput)
    const newValue = verifyValue(value, true)
    if (!isNumber(userInput) && (!userInput || userInput !== newValue)) {
      data.currentValue = newValue
      data.userInput = null
    }
  },
  { immediate: true }
)
onMounted(() => {
  const { min, max, modelValue } = props
  const innerInput = input.value?.inputRef as HTMLInputElement
  innerInput.setAttribute('role', 'spinbutton')
  if (Number.isFinite(max)) {
    innerInput.setAttribute('aria-valuemax', String(max))
  } else {
    innerInput.removeAttribute('aria-valuemax')
  }
  if (Number.isFinite(min)) {
    innerInput.setAttribute('aria-valuemin', String(min))
  } else {
    innerInput.removeAttribute('aria-valuemin')
  }
  innerInput.setAttribute(
    'aria-valuenow',
    data.currentValue || data.currentValue === 0
      ? String(data.currentValue)
      : ''
  )
  innerInput.setAttribute('aria-disabled', String(isDisabled.value))
  if (!isNumber(modelValue) && modelValue != null) {
    let val: number | null = Number(modelValue)
    if (Number.isNaN(val)) {
      val = null
    }
    emit(UPDATE_MODEL_EVENT, val!)
  }
})
onUpdated(() => {
  const innerInput = input.value?.inputRef
  innerInput?.setAttribute('aria-valuenow', `${data.currentValue ?? ''}`)
})
defineExpose({
  /** @description get focus the input component */
  focus,
  /** @description remove focus the input component */
  blur,
})
</script>
