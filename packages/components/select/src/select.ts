import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Select from './select.vue'

export const selectProps = buildProps({})

export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectInstance = InstanceType<typeof Select>
