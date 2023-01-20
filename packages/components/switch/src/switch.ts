import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Switch from './switch.vue'

export const switchProps = buildProps({})

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchInstance = InstanceType<typeof Switch>
