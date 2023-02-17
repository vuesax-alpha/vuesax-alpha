import { placements } from '@popperjs/core'
import { isNil } from 'lodash-unified'
import { useColorProp } from '@vuesax-alpha/hooks'
import {
  buildProps,
  definePropType,
  isArray,
  isBoolean,
  isNumber,
  isObject,
  isString,
} from '@vuesax-alpha/utils'
import type { EmitFn } from '@vuesax-alpha/utils'
import type { SelectOptionValue, SelectValue } from './tokens'

import type { ExtractPropTypes } from 'vue'
import type Select from './select.vue'

export const selectProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<SelectValue>([Array, String, Number, Object]),
    default: '',
  },
  modelKey: {
    type: String,
    default: 'value',
  },
  placement: {
    type: String,
    values: placements,
    default: 'bottom-start',
  },
  persistent: {
    type: Boolean,
    default: true,
  },
  teleported: {
    type: Boolean,
    default: true,
  },
  allowCreate: {
    type: Boolean,
    default: false,
  },
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0,
  },
  filter: {
    type: Boolean,
    default: false,
  },
  filterMethod: {
    type: definePropType<(val: string) => void>(Function),
  },
  collapseTags: {
    type: Boolean,
    default: false,
  },
  /**
   * @description set default select is firt option
   */
  defaultFirstOption: {
    type: Boolean,
    default: false,
  },
  /**
   * @description whether Select is disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  collapseChips: {
    type: Boolean,
    default: false,
  },

  /**
   * @description Add a loading animation to the input.
   */
  loading: {
    type: Boolean,
    default: false,
  },

  /**
   * @description State color - Accept Vuesax's color, Hex, rgb
   */
  state: useColorProp,
  block: {
    type: Boolean,
    default: false,
  },
  /**
   * @description hide scrollbar
   */
  hideScrollbar: {
    type: Boolean,
    default: false,
  },

  /**
   * @description label is placeholder when input empty
   */
  labelFloat: {
    type: Boolean,
    default: false,
  },

  /**
   * @description a label above the component.
   */
  label: {
    type: String,
    default: null,
  },

  /**
   * @description input placeholder
   */
  placeholder: {
    type: String,
    default: null,
  },
  id: {
    type: String,
  },
  /**
   * @description show native scrollbar
   */
  nativeScrollbar: {
    type: Boolean,
    default: false,
  },
  /**
   * @description native input readonly
   */
  clearable: {
    type: Boolean,
    default: false,
  },
} as const)

export type SelectProps = ExtractPropTypes<typeof selectProps>

export const selectEmits = {
  'update:modelValue': (val: SelectValue) =>
    isArray(val) ||
    isString(val) ||
    isNumber(val) ||
    isBoolean(val) ||
    isObject(val) ||
    isNil(val),
  'visible-change': (val: boolean) => isBoolean(val),
  'remove-tag': (val: SelectOptionValue) => val,
  focus: (event: FocusEvent | Event) => event instanceof Event,
  blur: (event: FocusEvent | Event) => event instanceof Event,
  change: (val: SelectValue) =>
    isArray(val) ||
    isString(val) ||
    isNumber(val) ||
    isBoolean(val) ||
    isObject(val) ||
    isNil(val),
  clear: () => true,
}

export type SelectEmits = typeof selectEmits

export type SelectEmitsFn = EmitFn<SelectEmits>

export type SelectInstance = InstanceType<typeof Select>
