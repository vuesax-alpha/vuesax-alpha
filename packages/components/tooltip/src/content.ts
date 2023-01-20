import { placements } from '@popperjs/core'
import { buildProps, definePropType } from '@vuesax-alpha/utils'
import { useDelayedToggleProps, useNamespace } from '@vuesax-alpha/hooks'
import type { StyleValue } from 'vue'
import type { Options, Placement } from '@popperjs/core'
import type { ExtractPropType } from '@vuesax-alpha/utils'

const ns = useNamespace('tooltip')

type ClassObjectType = Record<string, boolean>
type ClassType = string | ClassObjectType | ClassType[]

const POSITIONING_STRATEGIES = ['fixed', 'absolute'] as const

export const tooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  boundariesPadding: {
    type: Number,
    default: 0,
  },
  fallbackPlacements: {
    type: definePropType<Placement[]>(Array),
    default: undefined,
  },
  gpuAcceleration: {
    type: Boolean,
    default: true,
  },
  offset: {
    type: Number,
    default: 12,
  },
  placement: {
    type: String,
    values: placements,
    default: 'bottom',
  },
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => ({}),
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: 'absolute',
  },
  id: String,
  style: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  className: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  effect: {
    type: String,
    default: 'dark',
  },
  enterable: {
    type: Boolean,
    default: true,
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false,
  },
  trapping: {
    type: Boolean,
    default: false,
  },
  popperClass: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  popperStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  referenceEl: {
    type: definePropType<HTMLElement>(Object),
  },
  triggerTargetEl: {
    type: definePropType<HTMLElement>(Object),
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true,
  },
  ariaLabel: {
    type: String,
    default: undefined,
  },
  virtualTriggering: Boolean,
  zIndex: Number,

  appendTo: {
    type: definePropType<string | HTMLElement>([String, Object]),
  },
  content: {
    type: String,
    default: '',
  },
  rawContent: {
    type: Boolean,
    default: false,
  },
  persistent: Boolean,

  visible: {
    type: definePropType<boolean | null>(Boolean),
    default: null,
  },
  transition: {
    type: String,
    default: `${ns.namespace.value}-fade-in-linear`,
  },
  teleported: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
  },
})

export const tooltipContentEmits = {
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true,
}

export type TooltipContentEmits = typeof tooltipContentEmits
export type TooltipContentProps = ExtractPropType<typeof tooltipContentProps>
