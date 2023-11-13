import { buildProps, definePropType } from '@vuesax-alpha/utils'
import { popperProps } from '@vuesax-alpha/components/popper'
import { useColorProp } from '@vuesax-alpha/hooks'
import type { OffsetOptions } from '@floating-ui/vue'
import type Tooltip from './tooltip.vue'

import type { ExtractPropTypes } from 'vue'

export const tooltipProps = buildProps({
  ...popperProps,
  color: useColorProp,
  animation: {
    type: String,
    default: 'tooltip',
  },
  interactivity: {
    type: Boolean,
    default: false,
  },
  appendTo: {
    type: definePropType<string | HTMLElement>(String),
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

  arrow: {
    type: Boolean,
    default: true,
  },

  loading: Boolean,

  offsetOptions: {
    type: definePropType<OffsetOptions>([Number, Function]),
    default: 8,
  },
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
