import { buildProps } from '@vuesax-alpha/utils'
import { popperProps } from '@vuesax-alpha/components/popper'
import type Tooltip from './tooltip.vue'

import type { ExtractPropTypes } from 'vue'

export const tooltipProps = buildProps({
  ...popperProps,
  animation: {
    type: String,
    default: 'tooltip',
  },
  interactivity: {
    type: Boolean,
    default: false,
  },
  /**
   * @description tooltip style
   * @enum `shadow` | `border` | `border-thick`
   * */
  type: {
    type: String,
    values: ['shadow', 'border', 'border-thick'] as const,
    default: '',
  },
  /**
   * @description Change the border radius
   * @enum `circle` | `square`
   * */
  shape: {
    type: String,
    values: ['circle', 'square', 'default'] as const,
    default: '',
  },
  effect: {
    type: String,
    values: ['light', 'dark'] as const,
    default: 'dark',
  },
  showArrow: {
    type: Boolean,
    default: true,
  },

  loading: Boolean,
  offset: {
    type: Number,
    default: 8,
  },

  /** @deprecated use placement instead*/
  bottom: Boolean,
  /** @deprecated use placement instead*/
  left: Boolean,
  /** @deprecated use placement instead*/
  right: Boolean,
  /** @deprecated use placement instead*/
  top: Boolean,

  /** @deprecated use trigger instead */
  notHover: Boolean,

  /** @deprecated use type instead */
  shadow: Boolean,
  /** @deprecated use type instead */
  border: Boolean,
  /** @deprecated use type instead */
  borderThick: Boolean,

  /** @deprecated use shape instead */
  square: Boolean,
  /** @deprecated use shape instead */
  circle: Boolean,
})

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

export type TooltipInstance = InstanceType<typeof Tooltip>

export type TooltipExpose = {
  isVisible: boolean
  contentRef: HTMLElement | undefined
  triggerRef: HTMLElement | undefined
  show: () => void
  hide: () => void
  update: () => void
  destroy: () => void
}
