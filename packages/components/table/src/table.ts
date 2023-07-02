import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import {
  buildProps,
  definePropType,
  isArray,
  isNumber,
  isObject,
  isString,
} from '@vuesax-alpha/utils'
import type { EmitFn } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Table from './table.vue'

export type TableModelValueType = string | number | object

export const tableProps = buildProps({
  modelValue: {
    type: definePropType<TableModelValueType | TableModelValueType[]>([
      Array,
      String,
      Number,
      Object,
    ]),
    default: null,
  },
  striped: Boolean,
  loading: Boolean,
  multiple: Boolean,
} as const)

export type TableProps = ExtractPropTypes<typeof tableProps>

export const tableEmits = {
  [UPDATE_MODEL_EVENT]: (value: TableModelValueType) =>
    isArray(value) || isString(value) || isNumber(value) || isObject(value),
}

export type TableEmits = typeof tableEmits
export type TableEmitFn = EmitFn<TableEmits>

export type TableInstance = InstanceType<typeof Table>
