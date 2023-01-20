import { buildProps, iconPropType } from '@vuesax-alpha/utils'
import type { ExtractPropType } from '@vuesax-alpha/utils'
import type Prev from './prev.vue'

export const paginationPrevProps = buildProps({
  prevText: {
    type: String,
    default: '',
  },
  prevIcon: {
    type: iconPropType,
  },
} as const)

export type PrevProps = ExtractPropType<typeof paginationPrevProps>

export type PrevInstance = InstanceType<typeof Prev>
