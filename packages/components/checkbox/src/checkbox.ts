import { useColorProp } from '@vuesax-alpha/hooks'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { buildProps, isBoolean, isNumber, isString } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Checkbox from './checkbox.vue'

export type CheckboxValueType = string | number | boolean | object

export const checkboxProps = buildProps({
  /**
   * @description Component color - Accept Vuesax's color, Hex, rgb
   */
  color: useColorProp,

  /**
   * @description binding value
   */
  modelValue: {
    type: [Boolean, String, Number],
    default: undefined,
  },

  /**
   * @description self value of the Checkbox, used inside a `checkbox-group`
   */
  value: {
    type: [String, Boolean, Number, Object],
  },

  /** @description checkbox id */
  id: {
    type: String,
    default: null,
  },

  /** @description Set indeterminate state, only responsible for style control */
  indeterminate: Boolean,

  /** @description if the Checkbox is checked */
  checked: Boolean,

  /** @description Force checked component */
  checkedForce: Boolean,
  /**
   * @description whether the Checkbox is disabled
   */
  disabled: Boolean,
  /**
   * @description if the Checkbox is loading
   */
  loading: Boolean,
  /**
   * @description Label of the Checkbox
   */
  label: String,
  /**
   * @description Change the position of the label.
   */
  labelBefore: Boolean,
  /**
   * @description Add a line in the center of the label when checked.
   */
  lineThrough: Boolean,
  /**
   * @description native 'name' attribute
   */
  name: {
    type: String,
    default: undefined,
  },
} as const)

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
export type CheckboxInstance = InstanceType<typeof Checkbox>
