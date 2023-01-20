import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Check from './check.vue'

export const checkProps = buildProps({
  indeterminate: {
    type: Boolean,
  },
  active: {
    type: Boolean,
  },
} as const)

export type CheckProps = ExtractPropTypes<typeof checkProps>
export type CheckInstance = InstanceType<typeof Check>
