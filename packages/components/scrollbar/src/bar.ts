import { buildProps } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'
import type Bar from './bar.vue'

export const barProps = buildProps({
  always: {
    type: Boolean,
    default: true,
  },
  width: { type: String },
  height: { type: String },
  ratioX: {
    type: Number,
    default: 1,
  },
  ratioY: {
    type: Number,
    default: 1,
  },
  thickness: {
    type: [Number, String],
    default: 6,
  },
} as const)
export type BarProps = ExtractPropTypes<typeof barProps>

export type BarInstance = InstanceType<typeof Bar>
