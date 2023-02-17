import { buildProps, definePropType } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type { Placement, Strategy, VirtualElement } from '@floating-ui/dom'

const tooltipStrategies = ['absolute', 'fixed'] as const

const tooltipPlacements = [
  'top-start',
  'top-end',
  'top',
  'bottom-start',
  'bottom-end',
  'bottom',
  'left-start',
  'left-end',
  'left',
  'right-start',
  'right-end',
  'right',
] as const

export const tooltipContentProps = buildProps({
  ariaLabel: String,
  arrowPadding: {
    type: definePropType<number>(Number),
    default: 5,
  },
  effect: {
    type: String,
    default: '',
  },
  contentClass: String,
  /**
   * Placement of tooltip content relative to reference element (when absent it refers to trigger)
   */
  placement: {
    type: definePropType<Placement>(String),
    values: tooltipPlacements,
    default: 'bottom',
  },
  /**
   * Reference element for tooltip content to set its position
   */
  reference: {
    type: definePropType<HTMLElement | VirtualElement | null>(Object),
    default: null,
  },
  offset: {
    type: Number,
    default: 8,
  },
  strategy: {
    type: definePropType<Strategy>(String),
    values: tooltipStrategies,
    default: 'absolute',
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
} as const)

export type TooltipContentProps = ExtractPropTypes<typeof tooltipContentProps>
