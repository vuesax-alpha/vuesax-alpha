import { buildProps, definePropType } from '@vuesax-alpha/utils'
import { tooltipSides } from './common'

import type { CSSProperties, ExtractPropTypes } from 'vue'
import type { TooltipSides } from './common'

export const tooltipArrowProps = buildProps({
  width: {
    type: Number,
    default: 10,
  },
  height: {
    type: Number,
    default: 10,
  },
  style: {
    type: definePropType<CSSProperties | null>(Object),
    default: null,
  },
} as const)

export const tooltipArrowSpecialProps = buildProps({
  side: {
    type: definePropType<TooltipSides>(String),
    values: tooltipSides,
    required: true,
  },
} as const)

export type TooltipArrowProps = ExtractPropTypes<typeof tooltipArrowProps>
