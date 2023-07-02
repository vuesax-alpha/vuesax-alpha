import { buildProps } from '@vuesax-alpha/utils'
import type { EmitFn } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'

export const tableThProps = buildProps({
  sort: Boolean,
} as const)

export type TableThProps = ExtractPropTypes<typeof tableThProps>

export const tableThEmits = {
  click: (event: Event | MouseEvent) => event instanceof Event,
}

export type TableThEmits = typeof tableThEmits

export type TableThEmitFn = EmitFn<TableThEmits>
