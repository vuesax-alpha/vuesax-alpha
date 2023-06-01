import { buildProps, isBoolean, isString } from '@vuesax-alpha/utils'

import { useColorProp } from '@vuesax-alpha/hooks'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import type { ExtractPropTypes } from 'vue'
import type Navbar from './navbar.vue'

export const navbarProps = buildProps({
  modelValue: {
    type: String,
  },
  /**
   * @description Component color - Accept Vuesax's color, Hex, rgb
   */
  color: useColorProp,

  /** @description Defines if the component is fixed on the screen. */
  fixed: {
    type: Boolean,
  },

  /** @description Add a shadow to the component. */
  shadow: {
    type: Boolean,
  },

  /** @description Add functionality to add shadow to component when scrollTop is more than 0. */
  shadowScroll: {
    type: Boolean,
  },

  /** @description Add the functionality to hide and show the component based on whether the scroll is lowered or raised.*/
  hideScroll: {
    type: Boolean,
  },

  /** @description Change the text color of items to white. */
  textWhite: {
    type: Boolean,
  },

  /** @description Change the border radius to 0 by making the component square. */
  square: {
    type: Boolean,
  },

  /** @description Determines if the component has padding and the user scrolling is removed making an effect. */
  paddingScroll: {
    type: Boolean,
  },

  /** @description Delete the active line in the component. */
  notLine: {
    type: Boolean,
  },

  /** @description Add the functionality that when the elements of this slot cannot be correctly they are visually removed. */
  leftCollapsed: {
    type: Boolean,
  },

  /** @description Add the functionality that when the elements of this slot cannot be correctly they are visually removed. */
  centerCollapsed: {
    type: Boolean,
  },

  /** @description Add the functionality that when the elements of this slot cannot be correctly they are visually removed. */
  rightCollapsed: {
    type: Boolean,
  },

  /** @description Determines the element to which the scroll event will be requested. */
  targetScroll: {
    type: String,
  },
} as const)

export type NavbarProps = ExtractPropTypes<typeof navbarProps>

export const navbarEmits = {
  collapsed: (val: unknown): val is boolean => isBoolean(val),
  [UPDATE_MODEL_EVENT]: (val: string): val is string => isString(val),
}

export type NavbarEmits = typeof navbarEmits

export type NavbarInstance = InstanceType<typeof Navbar>
