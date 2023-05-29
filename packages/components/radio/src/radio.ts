import { buildProps, isBoolean, isNumber, isString } from '@vuesax-alpha/utils'

import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { useColorProp } from '@vuesax-alpha/hooks'
import type { EmitFn } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'
import type Radio from './radio.vue'

export const radioProps = buildProps({
  color: useColorProp,
  modelValue: {
    type: [Boolean, String, Number],
    default: null,
  },
  value: {
    type: [Boolean, String, Number],
    default: '',
  },
  /**
   * @description whether Radio is disabled
   */
  disabled: Boolean,
  /**
   * @description the value of Radio
   */
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
  name: String,
  loading: {
    type: Boolean,
    default: false,
  },
  labelBefore: {
    type: Boolean,
    default: false,
  },
})

export type RadioProps = ExtractPropTypes<typeof radioProps>

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type RadioEmits = typeof radioEmits
export type RadioEmitFn = EmitFn<RadioEmits>

export type RadioInstance = InstanceType<typeof Radio>
