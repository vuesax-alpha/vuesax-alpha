import {
  buildProps,
  definePropType,
  isNumber,
  isStringNumber,
} from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Close from './close.vue'

export const closeProps = buildProps({
  hover: {
    type: String,
  },
  scale: {
    type: definePropType<string | number>([String, Number]),
    validator: (value: number | string) =>
      (isStringNumber(`${value}`) || isNumber(value)) &&
      Number(value) >= 0 &&
      Number(value) <= 1,
    default: 1,
  },
} as const)

export type CloseProps = ExtractPropTypes<typeof closeProps>
export type CloseInstance = InstanceType<typeof Close>
