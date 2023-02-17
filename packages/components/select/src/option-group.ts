import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type OptionGroup from './option-group.vue'

export const optionGroupProps = buildProps({
  label: {
    type: String,
    required: true,
  },
} as const)

export type OptionGroupProps = ExtractPropTypes<typeof optionGroupProps>
export type OptionGroupInstance = InstanceType<typeof OptionGroup>
