import { buildProps, definePropType } from '@vuesax-alpha/utils'
import type { EmitFn } from '@vuesax-alpha/utils'
import type Tag from './tag.vue'
import type { ExtractPropTypes } from 'vue'
import type { SelectOptionValue } from './tokens'

export const tagProps = buildProps({
  label: {
    type: String,
  },
  value: {
    type: definePropType<SelectOptionValue>([String, Number, Object]),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
} as const)

export type TagProps = ExtractPropTypes<typeof tagProps>

export const tagEmits = {
  close: (event: Event) => event instanceof Event,
} as const

export type TagEmits = EmitFn<typeof tagEmits>

export type TagInstance = InstanceType<typeof Tag>
