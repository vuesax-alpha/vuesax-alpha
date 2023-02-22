import { useColorProp } from '@vuesax-alpha/hooks'
import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Button from './button.vue'

export const buttonProps = buildProps({
  /**
   * @description Determine if the component is active and change its style to that state.
   */
  active: { type: Boolean },

  /**
   * @description Determine if the animation is active for the user when hovering.
   */
  animateInactive: { type: Boolean },

  /**
   * @description Change the type of animation, this property only works if you have the slot animate.
   * @enum `scale` | `rotate` | `vertical`
   */
  animationType: {
    type: String,
    values: ['scale', 'rotate', 'vertical'] as const,
  },

  /**
   * @description Change the width of the component to the possible total determined by the parent element.
   */
  block: {
    type: Boolean,
  },

  /**
   * @description Component color - Accept Vuesax's color, Hex, rgb
   * @default 'primary'
   */
  color: { ...useColorProp, default: 'primary' },

  /**
   * @description Determine if the component contains only one icon,
   * by adding this property the component has an equal width and height.
   */
  icon: {
    type: Boolean,
  },

  /**
   * @description Add a loading animation to the avatar.
   */
  loading: { type: Boolean },

  /**
   * @description Change the style of the avatar by making it [square | circulating | rounded]
   * @enum | `circle` | `square` |
   */
  shape: {
    type: String,
    values: ['circle', 'square'] as const,
  },

  /**
   * @description Change the size of the avatar component.
   * @enum | `xl` | `large` | `default` | `small` | `mini` |
   * @default 'default'
   */
  size: {
    type: [Number, String],
    values: ['xl', 'large', 'default', 'small', 'mini'] as const,
    default: 'default',
  },

  /**
   * @description ripple style
   * @enum `cut` | `reverse`
   */
  ripple: {
    type: String,
    values: ['cut', 'reverse'] as const,
  },

  /**
   * @description Change the style of the component and its states.
   * @enum `default` | `border` | `flat` | `floating` | `gradient` | `shadow` | `relief` | `transparent`
   * @default 'default'
   */
  type: {
    type: String,
    values: [
      'default',
      'border',
      'flat',
      'floating',
      'gradient',
      'shadow',
      'relief',
      'transparent',
    ] as const,
    default: 'default',
  },

  /**
   * Determine if the component has the upload status active
   * by changing the style and adding the animation.
   */
  upload: {
    type: Boolean,
  },
  /** @deprecated @description use prop `type` instead */
  border: { type: Boolean },
  /** @deprecated @description use prop `type` instead */
  flat: { type: Boolean },
  /** @deprecated @description use prop `type` instead */
  floating: { type: Boolean },
  /** @deprecated @description use prop `type` instead */
  gradient: { type: Boolean },
  /** @deprecated @description use prop `type` instead */
  shadow: { type: Boolean },
  /** @deprecated @description use prop `type` instead */
  relief: { type: Boolean },
  /** @deprecated @description use prop `type` instead */
  transparent: { type: Boolean },
  /** @deprecated @description use prop `shape` instead */
  square: { type: Boolean },
  /** @deprecated @description use prop `shape` instead */
  circle: { type: Boolean },
  /** @deprecated */
  to: { type: [String, Object] },
  /** @deprecated */
  href: { type: String },
  /** @deprecated */
  blank: { type: Boolean },
} as const)

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
