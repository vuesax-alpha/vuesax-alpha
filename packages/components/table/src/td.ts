import { buildProps } from '@vuesax-alpha/utils'
import type { EmitFn } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'

export const tableTdProps = buildProps({
  checkbox: { type: Boolean },
  edit: { type: Boolean },
} as const)

export type TableTdProps = ExtractPropTypes<typeof tableTdProps>

export const tableTdEmits = {
  click: (event: Event | MouseEvent) => event instanceof Event,
}

export type TableTdEmits = typeof tableTdEmits

export type TableTdEmitFn = EmitFn<TableTdEmits>
