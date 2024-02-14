import {
  buildProps,
  definePropType,
  isNumber,
  isObject,
  isString,
} from '@vuesax-alpha/utils'
import { useColorProp } from '@vuesax-alpha/hooks'
import type { TableModelValueType } from './table'
import type { EmitFn } from '@vuesax-alpha/utils'
import type { ExtractPropTypes } from 'vue'

export const tableTrProps = buildProps({
  color: useColorProp,
  data: {
    type: definePropType<TableModelValueType>([String, Number, Object]),
    default: null,
  },
  isSelected: {
    type: Boolean,
    default: null,
  },
  notClickSelected: { type: Boolean },
  openExpandOnlyTd: { type: Boolean },
} as const)

export type TableTrProps = ExtractPropTypes<typeof tableTrProps>

export const tableTrEmits = {
  click: (event: Event | MouseEvent) => event instanceof Event,
  selected: (value: TableModelValueType) =>
    isString(value) || isNumber(value) || isObject(value),
}

export type TableTrEmits = typeof tableTrEmits

export type TableTrEmitFn = EmitFn<TableTrEmits>
