import { buildProps } from '@vuesax-alpha/utils'
import type { ExtractPropType } from '@vuesax-alpha/utils'
import type Progress from './progress.vue'

export const paginationProgressProps = buildProps({} as const)

export type ProgressProps = ExtractPropType<typeof paginationProgressProps>

export type ProgressInstance = InstanceType<typeof Progress>
