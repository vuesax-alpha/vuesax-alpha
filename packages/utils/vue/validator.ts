import { componentSizes } from '@vuesax-alpha/constants'
import { acceptColor } from '../color'
import type { Color, ComponentSize } from '@vuesax-alpha/constants'

export const isValidComponentSize = (val: string): val is ComponentSize | '' =>
  ['', ...componentSizes].includes(val)

export const isValidComponentColor = (color: string): color is Color =>
  acceptColor(color)
