import type { Alignment } from '../types'

const oppositeAlignmentMap = {
  start: 'end',
  end: 'start',
}

export const getOppositeAlignmentPlacement = <T extends string>(
  placement: T
): T =>
  placement.replace(
    /start|end/g,
    (alignment) => oppositeAlignmentMap[alignment as Alignment]
  ) as T
