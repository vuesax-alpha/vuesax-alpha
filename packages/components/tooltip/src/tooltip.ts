import { buildProps } from '@vuesax-alpha/utils'
import { createModelToggleComposable } from '@vuesax-alpha/hooks'
import { popperArrowProps, popperProps } from '@vuesax-alpha/components/popper'
import { tooltipContentProps } from './content'
import { tooltipTriggerProps } from './trigger'
import type Tooltip from './tooltip.vue'

import type { ExtractPropTypes } from 'vue'

export const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle,
} = createModelToggleComposable('visible' as const)

export const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...tooltipContentProps,
  ...tooltipTriggerProps,
  ...popperArrowProps,

  showArrow: {
    type: Boolean,
    default: true,
  },

  /** @description tooltip is loading */
  loading: Boolean,

  /**
   * @description Change the border radius
   * @enum `circle` | `square`
   * */
  shape: {
    type: String,
    values: ['circle', 'square'] as const,
  },

  /**
   * @description tooltip style
   * @enum `shadow` | `border` | `border-thick`
   * @default ''
   * */
  type: {
    type: String,
    values: ['', 'shadow', 'border', 'border-thick'] as const,
    default: '',
  },

  /** @deprecated use showArraw instead. */
  notArrow: Boolean,

  /** @deprecated use visible instead */
  modelValue: Boolean,

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

  /** @deprecated use enterable instead. */
  interactivity: Boolean,
  /** @deprecated use shape instead */
  square: Boolean,
  /** @deprecated use shape instead */
  circle: Boolean,
})

export const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  'before-show',
  'before-hide',
  'show',
  'hide',
  'open',
  'close',
]

export type TooltipProps = ExtractPropTypes<typeof useTooltipProps>

export type TooltipInstance = InstanceType<typeof Tooltip>
