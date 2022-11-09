import { setColor } from './index'

export interface VuetuiOptions {
  colors?: VuetuiColors
}

export interface VuetuiColors {
  [item: string]: any
  primary: string
  success: string
  danger: string
  warn: string
  dark: string
}

const defineColors = (colors: VuetuiColors) => {
  Object.keys(colors).forEach((item) => {
    if (document.body) {
      setColor(item, colors[item], document.body)
    }
  })
}

export const defineVuetuiOptions = (options: VuetuiOptions) => {
  if (!!options.colors) {
    defineColors(options.colors)
  }
}
