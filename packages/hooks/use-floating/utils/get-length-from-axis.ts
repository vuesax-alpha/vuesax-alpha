import type { Axis, Length } from '../types'

export const getLengthFromAxis = (axis: Axis): Length =>
  axis === 'y' ? 'height' : 'width'
