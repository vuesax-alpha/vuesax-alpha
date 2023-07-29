import { buildProps } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'

export const expandProps = buildProps({
  colspan: Number,
} as const)

export type TableThProps = ExtractPropTypes<typeof expandProps>
