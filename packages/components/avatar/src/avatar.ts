import { buildProps, isValidComponentColor } from '@vuesax-alpha/utils'
import { vuesaxColors } from '@vuesax-alpha/constants'
import { useColorProp } from '@vuesax-alpha/hooks'
import type { ExtractPropTypes } from 'vue'
import type Avatar from './avatar.vue'

export const avatarProps = buildProps({
  /**
   * @description Component color - Accept Vuesax's color, Hex, rgb
   */
  color: useColorProp,

  /**
   * @description Badge position
   * @enum | top-right | bottom-right | bottom-left | top-left
   * @default 'bottom-right'
   */
  badgePosition: {
    type: String,
    values: ['top-right', 'bottom-right', 'bottom-left', 'top-left'] as const,
    default: 'bottom-right',
  },

  /**
   * @description Change the color of the badge inside the avatar.
   * @default 'primary'
   */
  badgeColor: {
    type: String,
    values: vuesaxColors,
    validator: isValidComponentColor,
    default: 'primary',
  },

  /**
   * @description Determine if the badge is active.
   */
  badge: { type: Boolean },

  /**
   * @description Add a border to the avatar.
   */
  history: { type: Boolean },

  /**
   * @description truefalse	Change the color of the border to a gradient.
   */
  historyGradient: { type: Boolean },

  /**
   * @description Add a loading animation to the avatar.
   */
  loading: { type: Boolean },

  /**
   * @description Determine if the avatar has a pointer cursor.
   */
  pointer: { type: Boolean },

  /**
   * @description Change the style of the avatar by making it [square | circulating | rounded]
   * @enum | circle | square | default |
   * @default 'default'
   */
  shape: {
    type: String,
    values: ['circle', 'square', 'default'] as const,
    default: 'default',
  },

  /**
   * @description Change the size of the avatar component.
   */
  size: {
    type: [Number, String],
  },

  /**
   * @description Add an animation to the writing badge.
   */
  writing: { type: Boolean },

  /** @deprecated */
  circle: {
    type: Boolean,
  },
  /** @deprecated */
  square: {
    type: Boolean,
  },
} as const)

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export type AvatarInstance = InstanceType<typeof Avatar>
