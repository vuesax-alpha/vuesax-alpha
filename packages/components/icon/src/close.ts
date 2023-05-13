import {
  buildProps,
  definePropType,
  isNumber,
  isString,
} from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Close from './close.vue'

export const closeProps = buildProps({
  hover: {
    type: String,
  },
  scale: {
    type: definePropType<string | number>([String, Number]),
    validator: (value: number) =>
      isString(value) || (isNumber(value) && value >= 0 && value <= 1),
    default: 1,
  },
} as const)

export type CloseProps = ExtractPropTypes<typeof closeProps>
export type CloseInstance = InstanceType<typeof Close>
