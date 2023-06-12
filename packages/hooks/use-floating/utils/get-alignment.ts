import type { Alignment } from '../types'

export const getAlignment = <T extends string>(placement: T): Alignment =>
  placement.split('-')[1] as Alignment
