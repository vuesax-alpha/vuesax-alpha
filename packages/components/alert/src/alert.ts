import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { useColorProp } from '@vuesax-alpha/hooks'
import { buildProps, isBoolean, isNumber } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Alert from './alert.vue'

export const alertProps = buildProps({
  /**
   * @description Component color - Accept Vuesax's color, Hex, rgb
   */
  color: { ...useColorProp, default: 'primary' },
  /**
   * @description	whether alert can be dismissed.
   */
  closable: {
    type: Boolean,
  },
  /**
   * @description With this property you can hide the content of the alert.
   */
  hiddenContent: {
    type: Boolean,
    default: null,
  },
  /**
   * @description Determine if the component is visible.
   * @default 'true'
   */
  modelValue: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Determine the page that is active (this property is linked to the slots="page-{n}").
   * @default 0
   */
  page: {
    type: Number,
    default: 0,
  },
  /**
   * @description Add a progress bar to the alert and the value is the percentage of width.
   * @default 0
   */
  progress: {
    type: [Number, String],
    default: 0,
  },
  /**
   * @deprecated
   */
  time: {
    type: [Number, String],
    default: 0,
  },
  /**
   * @description Change the style of all the alert.
   * @enum | '' | border | flat | gradient | relief | shadow | solid |
   * @default ''
   */
  type: {
    type: String,
    values: [
      '',
      'border',
      'flat',
      'gradient',
      'relief',
      'shadow',
      'solid',
    ] as const,
    default: '',
  },

  /** TODO: remove in 0.3.0 */
  /** @deprecated use prop [type] instead */
  border: Boolean,
  /** @deprecated use prop [type] instead */
  flat: Boolean,
  /** @deprecated use prop [type] instead */
  gradient: Boolean,
  /** @deprecated use prop [type] instead */
  relief: Boolean,
  /** @deprecated use prop [type] instead */
  shadow: Boolean,
  /** @deprecated use prop [type] instead */
  solid: Boolean,
} as const)

export type AlertProps = ExtractPropTypes<typeof alertProps>

export const alertEmits = {
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
  'update:page': (value: number) => isNumber(value),
  'update:hiddenContent': (value: boolean) => isBoolean(value),
}

export type AlertEmits = typeof alertEmits

export type AlertInstance = InstanceType<typeof Alert>
