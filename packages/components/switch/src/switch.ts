import { isNil, isPlainObject } from 'lodash-unified'
import {
  buildProps,
  definePropType,
  isArray,
  isBoolean,
  isNumber,
  isObject,
  isString,
} from '@vuesax-alpha/utils'

import { useColorProp } from '@vuesax-alpha/hooks'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import type { EmitFn } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'
import type Switch from './switch.vue'

export type SwitchValue = string | number | object | boolean

export const switchProps = buildProps({
  color: useColorProp,
  modelValue: {
    type: definePropType<SwitchValue[] | SwitchValue>([
      Array,
      String,
      Number,
      Object,
      Boolean,
    ]),
    default: null,
  },
  value: {
    type: definePropType<SwitchValue>([String, Number, Object, Boolean]),
    default: null,
  },
  notValue: {
    type: definePropType<SwitchValue>([String, Number, Object, Boolean]),
    default: null,
  },
  disabled: Boolean,
  loading: Boolean,
  shape: {
    type: String,
    values: ['square'] as const,
    default: null,
  },
  /**
   * @deprecated use shape instead
   */
  square: Boolean,
  indeterminate: Boolean,
  icon: Boolean,
})

export type SwitchProps = ExtractPropTypes<typeof switchProps>

export const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val: SwitchValue | SwitchValue[] | null) =>
    isArray(val) ||
    isBoolean(val) ||
    isString(val) ||
    isNumber(val) ||
    isObject(val) ||
    isNil(val),
  change: (event: Event) => event instanceof Event,
  click: (event: Event) => event instanceof Event,
}

export type SwitchEmits = typeof switchEmits
export type SwitchEmitFn = EmitFn<SwitchEmits>

export type SwitchInstance = InstanceType<typeof Switch>
