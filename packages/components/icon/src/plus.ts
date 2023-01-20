import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Plus from './plus.vue'

export const plusProps = buildProps({
  less: {
    type: Boolean,
  },
} as const)

export type PlusProps = ExtractPropTypes<typeof plusProps>
export type PlusInstance = InstanceType<typeof Plus>
