import { evaluate, getAlignment, getSide, getSideAxis } from '../../utils'
import type { Coords } from '../../utils'
import type { Derivable, Middleware, MiddlewareState } from '../types'

type OffsetValue =
  | number
  | Partial<{
      /**
       * @default 0
       */
      mainAxis: number
      /**
       * @default 0
       */
      crossAxis: number
      /**
       * @default null
       */
      alignmentAxis: number | null
    }>

export type OffsetOptions = OffsetValue | Derivable<OffsetValue>

export async function convertValueToCoords(
  state: MiddlewareState,
  options: OffsetOptions
): Promise<Coords> {
  const { placement, platform, elements } = state
  const rtl = await platform.isRTL?.(elements.floating)

  const side = getSide(placement)
  const alignment = getAlignment(placement)
  const isVertical = getSideAxis(placement) === 'y'
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1
  const crossAxisMulti = rtl && isVertical ? -1 : 1
  const rawValue = evaluate(options, state)

  let { mainAxis, crossAxis, alignmentAxis } =
    typeof rawValue === 'number'
      ? { mainAxis: rawValue, crossAxis: 0, alignmentAxis: null }
      : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...rawValue }

  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis
  }

  return isVertical
    ? { x: crossAxis * crossAxisMulti, y: mainAxis * mainAxisMulti }
    : { x: mainAxis * mainAxisMulti, y: crossAxis * crossAxisMulti }
}

export const offset = (options: OffsetOptions = 0): Middleware => ({
  name: 'offset',
  options,
  async fn(state) {
    const { x, y, placement, middlewareData } = state
    const diffCoords = await convertValueToCoords(state, options)

    if (
      placement === middlewareData.offset?.placement &&
      middlewareData.arrow?.alignmentOffset
    ) {
      return {}
    }

    return {
      x: x + diffCoords.x,
      y: y + diffCoords.y,
      data: {
        ...diffCoords,
        placement,
      },
    }
  },
})
