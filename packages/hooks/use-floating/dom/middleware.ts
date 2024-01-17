import {
  arrow as arrowCore,
  flip as flipCore,
  limitShift as limitShiftCore,
  shift as shiftCore,
} from '@vuesax-alpha/hooks/use-floating/core'
import type { Coords } from '../utils'
import type {
  Derivable,
  LimitShiftOptions,
} from '@vuesax-alpha/hooks/use-floating/core'

import type {
  ArrowOptions,
  FlipOptions,
  Middleware,
  MiddlewareState,
  ShiftOptions,
} from './types'

export { detectOverflow, offset } from '@vuesax-alpha/hooks/use-floating/core'

export const shift: (
  options?: ShiftOptions | Derivable<ShiftOptions>
) => Middleware = shiftCore

export const flip: (
  options?: FlipOptions | Derivable<FlipOptions>
) => Middleware = flipCore

export const arrow: (
  options: ArrowOptions | Derivable<ArrowOptions>
) => Middleware = arrowCore

export const limitShift: (
  options?: LimitShiftOptions | Derivable<LimitShiftOptions>
) => {
  options: any
  fn: (state: MiddlewareState) => Coords
} = limitShiftCore
