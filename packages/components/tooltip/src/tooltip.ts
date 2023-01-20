import { createModelToggleComposable } from '@vuesax-alpha/hooks'
import { buildProps } from '@vuesax-alpha/utils'
import { tooltipContentProps } from './content'
import { tooltipTriggerProps } from './trigger'
import type { ExtractPropTypes } from 'vue'
import type Tooltip from './tooltip.vue'

export const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle,
} = createModelToggleComposable('visible' as const)

export type TooltipTriggerType = 'hover' | 'focus' | 'click' | 'contextmenu'

export const tooltipProps = buildProps({
  ...tooltipTriggerProps,
  ...tooltipContentProps,

  /** @description tooltip is loading */
  loading: Boolean,

  /**
   * @description position of Tooltip
   * @enum `top` | `right` | `bottom` | `left`
   * @default `top`
   * */
  placement: {
    type: String,
    values: ['top', 'right', 'bottom', 'left'] as const,
    default: 'top',
  },

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

  showAfter: {
    type: Number,
    default: 0,
  },
  hideAfter: {
    type: Number,
    default: 0,
  },

  /** @description Remove the arrow from the tooltip. */
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

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

export const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  'before-show',
  'before-hide',
  'show',
  'hide',
  'open',
  'close',
]
export type TooltipEmits = typeof tooltipEmits

export type TooltipInstance = InstanceType<typeof Tooltip>
