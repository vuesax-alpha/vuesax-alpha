import type { Placement, Side } from '../types'

export const getSide = (placement: Placement): Side =>
  placement.split('-')[0] as Side
