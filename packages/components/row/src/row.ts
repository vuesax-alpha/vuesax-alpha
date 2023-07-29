import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Row from './row.vue'
export const RowJustify = [
  'start',
  'center',
  'end',
  'space-around',
  'space-between',
  'space-evenly',
] as const

export const RowAlign = ['top', 'middle', 'bottom'] as const
export const RowDerection = [
  'row',
  'row-reverse',
  'column',
  'column-reverse',
] as const

export const rowProps = buildProps({
  /**
   * @description grid spacing
   */
  gutter: {
    type: Number,
    default: 0,
  },
  /**
   * @description horizontal alignment of flex layout
   */
  justify: {
    type: String,
    values: RowJustify,
    default: 'start',
  },
  direction: {
    type: String,
    values: RowDerection,
    default: 'row',
  },
  /**
   * @description vertical alignment of flex layout
   */
  align: {
    type: String,
    values: RowAlign,
    default: 'top',
  },
})

export type RowProps = ExtractPropTypes<typeof rowProps>
export type RowInstance = InstanceType<typeof Row>
