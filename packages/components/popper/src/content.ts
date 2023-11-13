import { buildProps, definePropType } from '@vuesax-alpha/utils'
import { defaultZIndex, placements } from '@vuesax-alpha/constants'
import type {
  ArrowOptions,
  FlipOptions,
  OffsetOptions,
  Placement,
  ShiftOptions,
  Strategy,
} from '@floating-ui/vue'
import type { EmitFn } from '@vuesax-alpha/utils'
import type Content from './content.vue'

import type { ExtractPropTypes, StyleValue } from 'vue'

const POSITIONING_STRATEGIES = ['fixed', 'absolute'] as const

type ClassObjectType = Record<string, boolean>
type ClassType = string | ClassObjectType | ClassType[]

export const popperContentProps = buildProps({
  animation: {
    type: String,
    default: 'fade-in-linear',
  },
  appendTo: {
    type: definePropType<string | HTMLElement>(String),
  },
  // because model toggle prop is generated dynamically
  // so the typing cannot be evaluated by typescript as type:
  // [name]: { type: Boolean, default: null }
  // so we need to declare that again for type checking.
  /**
   * @description visibility of Tooltip
   */
  visible: {
    type: definePropType<boolean | null>(Boolean),
    default: null,
  },
  teleported: {
    type: Boolean,
    default: true,
  },
  disabled: Boolean,
  flip: Boolean,
  flipOptions: {
    type: definePropType<FlipOptions>(Object),
  },
  offsetOptions: {
    type: definePropType<OffsetOptions>([Number, Function, Object]),
  },
  shift: Boolean,
  shiftOptions: {
    type: definePropType<ShiftOptions>(Object),
  },
  arrow: Boolean,
  arrowOptions: {
    type: definePropType<ArrowOptions>(Object),
  },
  strategy: {
    type: definePropType<Strategy>(String),
    values: POSITIONING_STRATEGIES,
    default: 'absolute',
  },
  placement: {
    type: definePropType<Placement>(String),
    values: placements,
    default: 'bottom',
  },
  zIndex: {
    type: Number,
    default: defaultZIndex,
  },
  interactivity: {
    type: Boolean,
    default: true,
  },
  windowResize: {
    type: Boolean,
    default: true,
  },
  windowScroll: {
    type: Boolean,
    default: true,
  },
  content: String,
  rawContent: Boolean,
  popperClass: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  popperStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  floatingPosition: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  /**
   * @description `persistent` is `false`, popper content will be destroyed
   */
  persistent: Boolean,
})

export type PopperContentProps = ExtractPropTypes<typeof popperContentProps>

export const popperContentEmits = {
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true,
}
export type PopperContentEmits = typeof popperContentEmits
export type PopperContentEmitFn = EmitFn<PopperContentEmits>

export type PopperContentInstance = InstanceType<typeof Content>
