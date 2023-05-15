import { placements } from '@popperjs/core'
import { isNil } from 'lodash-unified'
import { popperCoreConfigProps } from '@vuesax-alpha/components/popper/src/content'
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
  notValue: {
    type: definePropType<SelectOptionValue>([String, Number, Object]),
    default: '',
  },
  popperOptions: popperCoreConfigProps.popperOptions,
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
  allowCreate: Boolean,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0,
  },
  filter: Boolean,
  filterMethod: {
    type: definePropType<(val: string) => void>(Function),
  },
  collapseChips: Boolean,
  /**
   * @description set default select is firt option
   */
  defaultFirstOption: Boolean,
  /**
   * @description whether Select is disabled
   */
  disabled: Boolean,

  /**
   * @description Add a loading animation to the input.
   */
  loading: Boolean,
  /**
   * @description Select color - Accept Vuesax's color, Hex, rgb
   */
  color: { ...useColorProp, default: 'primary' },
  /**
   * @description State color - Accept Vuesax's color, Hex, rgb
   */
  state: useColorProp,
  block: Boolean,
  /**
   * @description hide scrollbar
   */
  hideScrollbar: Boolean,

  /**
   * @description label is placeholder when input empty
   */
  labelFloat: Boolean,

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
  nativeScrollbar: Boolean,
  /**
   * @description native input readonly
   */
  clearable: Boolean,
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

export interface SelectExpose {
  /** focus to select */
  readonly focus: () => void
  /** blur select */
  readonly blur: () => void
}
