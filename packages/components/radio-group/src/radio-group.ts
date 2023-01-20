import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type RadioGroup from './radio-group.vue'

export const radioGroupProps = buildProps({})

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioGroupInstance = InstanceType<typeof RadioGroup>
