import { getSide } from './get-side'
import type { Axis, Placement } from '../types'

export const getAxis = (
  placement: Placement
): { mainAxis: Axis; crossAxis: Axis } => {
  let mainAxis: Axis = 'x'
  let crossAxis: Axis = 'y'

  if (!['top', 'bottom'].includes(getSide(placement))) {
    mainAxis = 'y'
    crossAxis = 'x'
  }

  return { mainAxis, crossAxis }
}
