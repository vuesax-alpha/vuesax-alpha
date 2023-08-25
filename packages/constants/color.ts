export const rgbRE = /^(rgb|rgba)/
export const rgbNumberRE =
  /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/
export const leadingHashRE = /^(#)/
export const hexShorthandRE = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
export const hexFullRE = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i

export type RGB = `rgb(${number},${number},${number})`
export type RGBA = `rgba(${number},${number},${number},${number})`
export type HEX = `#${string}`

export const componentColors = [
  'primary',
  'success',
  'danger',
  'warn',
  'dark',
  'text',
] as const

export type ComponentColor = (typeof componentColors)[number]

export type ColorProviderContext = {
  [T in ComponentColor]?: Color
}

export const vuesaxColors = [
  ...componentColors,
  'light',
  'secondary',
  // social colors
  'facebook',
  'twitter',
  'youtube',
  'pinterest',
  'linkedin',
  'snapchat',
  'whatsapp',
  'tumblr',
  'reddit',
  'spotify',
  'amazon',
  'medium',
  'vimeo',
  'skype',
  'dribbble',
  'slack',
  'yahoo',
  'twitch',
  'discord',
  'telegram',
  'google-plus',
  'messenger',
] as const

export type VuesaxColor = (typeof vuesaxColors)[number]

export type Color = RGB | RGBA | HEX | VuesaxColor
