import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropType } from '@vuesax-alpha/utils'
import type Arrow from './arrow.vue'

export const arrowProps = buildProps({
  less: {
    type: Boolean,
  },
} as const)

export type ArrowProps = ExtractPropType<typeof arrowProps>
export type ArrowInstance = InstanceType<typeof Arrow>
