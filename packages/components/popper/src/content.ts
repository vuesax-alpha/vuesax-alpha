import { buildProps, definePropType } from '@vuesax-alpha/utils'
import { defaultZIndex, placements } from '@vuesax-alpha/constants'
import type {
  FlipOptions,
  OffsetOptions,
  Placement,
  ShiftOptions,
  Strategy,
} from '@vuesax-alpha/hooks/use-floating/vue'
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
  strategy: {
    type: definePropType<Strategy>(String),
    values: POSITIONING_STRATEGIES,
    default: 'fixed',
  },
  /**
   * @description fit popper's width to trigger element
   */
  fit: Boolean,
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
  flip: {
    type: definePropType<FlipOptions | boolean>([Object, Boolean]),
    default: () => ({}),
  },
  shift: {
    type: definePropType<ShiftOptions | boolean>([Object, Boolean]),
    default: () => ({}),
  },
  windowResize: {
    type: Boolean,
    default: true,
  },
  windowScroll: {
    type: Boolean,
    default: true,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  offset: {
    type: definePropType<OffsetOptions>([Number, Object]),
    default: 12,
  },
  content: String,
  rawContent: Boolean,
  popperClass: {
    type: definePropType<ClassType>([String, Array, Object]),
    default: '',
  },
  popperStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
    default: '',
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
