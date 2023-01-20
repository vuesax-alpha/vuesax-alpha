import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Radio from './radio.vue'

export const radioProps = buildProps({})

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioInstance = InstanceType<typeof Radio>
