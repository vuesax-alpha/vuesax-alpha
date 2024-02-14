import { buildProps, definePropType, isNumber } from '@vuesax-alpha/utils'
import type { ExtractPropTypes, StyleValue } from 'vue'
import type Scrollbar from './scrollbar.vue'

export const scrollbarProps = buildProps({
  /**
   * @description height of scrollbar
   */
  height: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description max height of scrollbar
   */
  maxHeight: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description whether to use the native scrollbar
   */
  native: {
    type: Boolean,
    default: false,
  },
  /**
   * @description style of wrap
   */
  wrapStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: '',
  },
  /**
   * @description class of wrap
   */
  wrapClass: {
    type: [String, Array],
    default: '',
  },
  /**
   * @description class of view
   */
  viewClass: {
    type: [String, Array],
    default: '',
  },
  /**
   * @description style of view
   */
  viewStyle: {
    type: [String, Array, Object],
    default: '',
  },
  /**
   * @description do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance
   */
  noresize: { type: Boolean },
  /**
   * @description element tag of the view
   */
  tag: {
    type: String,
    default: 'div',
  },
  /**
   * @description always show
   */
  always: {
    type: Boolean,
    default: true,
  },
  /**
   * @description minimum size height of scrollbar
   */
  minSize: {
    type: Number,
    default: 20,
  },
  /**
   * @description thickness - thumb width
   */
  thickness: {
    type: [Number, String],
    default: 6,
  },
} as const)
export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>

export type ScrollEmitParams = {
  scrollTop: number
  scrollLeft: number
}
export const scrollbarEmits = {
  scroll: ({ scrollTop, scrollLeft }: ScrollEmitParams) =>
    [scrollTop, scrollLeft].every(isNumber),
}
export type ScrollbarEmits = typeof scrollbarEmits

export type ScrollbarInstance = InstanceType<typeof Scrollbar>
