import { buildProps } from '@vuesax-alpha/utils'

import type { EmitFn } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'
import type Chip from './chip.vue'

export const chipProps = buildProps({
  disabled: Boolean,
  hit: {
    type: Boolean,
    default: false,
  },
  shape: {
    type: String,
    values: ['square'] as const,
    default: '',
  },
  showClose: {
    type: Boolean,
    default: true,
  },
})

export type ChipProps = ExtractPropTypes<typeof chipProps>

export const chipEmits = {
  click: (e: Event | MouseEvent) => e instanceof Event,
  close: (e: Event | MouseEvent) => e instanceof Event,
}

export type ChipEmits = typeof chipEmits
export type ChipEmitFn = EmitFn<ChipEmits>

export type ChipInstance = InstanceType<typeof Chip>
