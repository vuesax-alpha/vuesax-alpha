import { buildProps } from '@vuesax-alpha/utils'
import type Total from './total.vue'
import type { ExtractPropTypes } from 'vue'

export const paginationTotalProps = buildProps({
  total: Number,
} as const)

export type PaginationTotalProps = ExtractPropTypes<typeof paginationTotalProps>

export type TotalInstance = InstanceType<typeof Total>
