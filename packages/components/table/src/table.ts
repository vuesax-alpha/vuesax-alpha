import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Table from './table.vue'

export const tableProps = buildProps({})

export type TableProps = ExtractPropTypes<typeof tableProps>
export type TableInstance = InstanceType<typeof Table>
