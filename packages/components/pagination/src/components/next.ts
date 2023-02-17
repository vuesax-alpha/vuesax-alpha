import { buildProps, iconPropType } from '@vuesax-alpha/utils'
import type { ExtractPropType } from '@vuesax-alpha/utils'
import type Next from './next.vue'

export const paginationNextProps = buildProps({
  nextText: {
    type: String,
    default: '',
  },
  nextIcon: {
    type: iconPropType,
  },
} as const)

export type NextProps = ExtractPropType<typeof paginationNextProps>

export type NextInstance = InstanceType<typeof Next>
