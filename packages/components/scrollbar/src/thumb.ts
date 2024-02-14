import { buildProps } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'
import type Thumb from './thumb.vue'

export const thumbProps = buildProps({
  vertical: { type: Boolean },
  size: { type: String },
  move: { type: Number },
  ratio: {
    type: Number,
    required: true,
  },
  always: { type: Boolean },
} as const)
export type ThumbProps = ExtractPropTypes<typeof thumbProps>

export type ThumbInstance = InstanceType<typeof Thumb>
