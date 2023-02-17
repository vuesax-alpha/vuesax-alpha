import { buildProps, definePropType } from '@vuesax-alpha/utils'
import { tooltipRootProps } from './root'
import { tooltipTriggerProps } from './trigger'
import { tooltipArrowProps } from './arrow'
import { tooltipContentProps } from './content'

import type { ExtractPropTypes, TeleportProps, TransitionProps } from 'vue'

export const tooltipProps = buildProps({
  ...tooltipRootProps,
  ...tooltipArrowProps,
  ...tooltipTriggerProps,
  ...tooltipContentProps,
  alwaysOn: Boolean,
  fullTransition: Boolean,
  transitionProps: {
    type: definePropType<TransitionProps | null>(Object),
    default: null,
  },
  teleported: Boolean,
  to: {
    type: definePropType<TeleportProps['to']>(String),
    default: 'body',
  },

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
} as const)

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
