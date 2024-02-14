import { isNil } from 'lodash-unified'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { useColorProp } from '@vuesax-alpha/hooks'
import {
  buildProps,
  definePropType,
  isNumber,
  isString,
} from '@vuesax-alpha/utils'

import type { ExtractPropTypes, StyleValue } from 'vue'
import type { EmitFn } from '@vuesax-alpha/utils'
import type Input from './input.vue'

export type InputValue = string | number | null | undefined

export const inputProps = buildProps({
  /**
   * @description native input readonly
   */
  clearable: {
    type: Boolean,
    default: false,
  },

  /**
   * @description Component color - Accept Vuesax's color, Hex, rgb
   */
  color: useColorProp,

  /**
   * @description whether Input is disabled
   */
  disabled: { type: Boolean },

  /**
   * @description put the icon to the back of the input
   */
  iconAfter: { type: Boolean },

  /**
   * @description input id
   */
  id: {
    type: String,
    default: null,
  },

  /**
   * @description input style
   * @enum `border` | `shadow` | `transparent`
   */
  inputStyle: {
    type: String,
    values: ['border', 'shadow', 'transparent'] as const,
    default: null,
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
   * @description Add a loading animation to the input.
   */
  loading: { type: Boolean },

  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<InputValue>([String, Number]),
    default: '',
  },

  /**
   * @description input placeholder
   */
  placeholder: {
    type: String,
    default: null,
  },

  /**
   * @description progress bar starting in red and ending in green.
   */
  progress: { type: Number },

  /**
   * @description input shape
   * @enum `rounded` | `square`
   */
  shape: {
    type: String,
    values: ['rounded', 'square'] as const,
    default: 'rounded',
  },

  /**
   * @description add toggleable password icon
   */
  showPassword: {
    type: Boolean,
    default: false,
  },

  /**
   * @description Change the background color of the component by changing its status.
   */
  state: useColorProp,

  /**
   * @description set text input to white color
   */
  textWhite: { type: Boolean },

  /**
   * @description type of input, native input type.
   */
  type: {
    type: String,
    default: 'text',
  },
  /** @description input wrapper classes */
  wrapClasses: {
    type: String,
  },
  /** @description input wrapper styles */
  wrapStyles: {
    type: definePropType<StyleValue>([String, Object, Array]),
  },

  /**
   * @description set input width 100%
   */
  block: { type: Boolean },

  /** @deprecated */
  border: Boolean,
  /** @deprecated */
  labelPlaceholder: String,
  /** @deprecated */
  shadow: Boolean,
  /** @deprecated */
  square: Boolean,
  /** @deprecated */
  transparent: Boolean,
} as const)

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (text: InputValue) =>
    isString(text) || isNumber(text) || isNil(text),
  /**
   * @description triggers when clicking the icon
   */
  clickIcon: (evt: Event) => evt instanceof Event,
  /**
   * @description triggers when the Input is cleared by clicking the clear button
   */
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  clear: () => true,
  input: (value: string) => !isNil(value),
  change: (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,

  // NOTE: when autofill by browser, the keydown event is instanceof Event, not KeyboardEvent
  keydown: (evt: KeyboardEvent | Event) => evt instanceof Event,
}

export type InputEmits = typeof inputEmits
export type InputEmitsFn = EmitFn<InputEmits>
export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputInstance = InstanceType<typeof Input>
