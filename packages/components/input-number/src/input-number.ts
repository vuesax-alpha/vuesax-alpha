import { isNil } from 'lodash-unified'
import { buildProps, isNumber } from '@vuesax-alpha/utils'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@vuesax-alpha/constants'
import { useColorProp } from '@vuesax-alpha/hooks'
import type { ExtractPropTypes } from 'vue'
import type InputNumber from './input-number.vue'

export const inputNumberProps = buildProps({
  color: useColorProp,
  background: useColorProp,
  /**
   * @description same as `id` in native input
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description incremental step
   */
  step: {
    type: Number,
    default: 1,
  },
  /**
   * @description whether input value can only be multiple of step
   */
  stepStrictly: { type: Boolean },
  /**
   * @description the maximum allowed value
   */
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY,
  },
  /**
   * @description the minimum allowed value
   */
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY,
  },
  /**
   * @description binding value
   */
  modelValue: { type: Number },
  /**
   * @description same as `readonly` in native input
   */
  readonly: { type: Boolean },
  /**
   * @description whether the component is disabled
   */
  disabled: { type: Boolean },
  /**
   * @description whether to enable the control buttons
   */
  controls: {
    type: Boolean,
    default: true,
  },

  /**
   * @description value should be set when input box is cleared
   */
  valueOnClear: {
    type: [String, Number, null],
    validator: (val: 'min' | 'max' | number | null) =>
      val === null || isNumber(val) || ['min', 'max'].includes(val),
    default: null,
  },
  /**
   * @description same as `name` in native input
   */
  name: { type: String },
  /**
   * @description same as `label` in native input
   */
  label: { type: String },
  /**
   * @description same as `placeholder` in native input
   */
  placeholder: { type: String },
  /**
   * @description precision of input value
   */
  precision: {
    type: Number,
    validator: (val: number) =>
      val >= 0 && val === Number.parseInt(`${val}`, 10),
  },
} as const)
export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>

export const inputNumberEmits = {
  [CHANGE_EVENT]: (cur: number | undefined, prev: number | undefined) =>
    prev !== cur,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  [INPUT_EVENT]: (val: number | null | undefined) =>
    isNumber(val) || isNil(val),
  [UPDATE_MODEL_EVENT]: (val: number | undefined) =>
    isNumber(val) || isNil(val),
}
export type InputNumberEmits = typeof inputNumberEmits

export type InputNumberInstance = InstanceType<typeof InputNumber>
