import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Option from './option.vue'

export const optionProps = buildProps({})

export type OptionProps = ExtractPropTypes<typeof optionProps>
export type OptionInstance = InstanceType<typeof Option>
