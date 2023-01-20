import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Close from './close.vue'

export const closeProps = buildProps({
  hover: {
    type: String,
  },
} as const)

export type CloseProps = ExtractPropTypes<typeof closeProps>
export type CloseInstance = InstanceType<typeof Close>
