import { getAlignment, getAxis, getLengthFromAxis, getSide } from './utils'
import type { Coords, ElementRects, Placement } from './types'

export function computeCoordsFromPlacement(
  { reference, floating }: ElementRects,
  placement: Placement,
  options: Partial<{
    offset: number
    rtl: boolean
  }>
): Coords {
  const { offset = 0, rtl } = options

  const scrollTop = window.pageYOffset
  const scrollLeft = window.pageXOffset

  const commonX =
    reference.x + scrollLeft + reference.width / 2 - floating.width / 2
  const commonY = reference.y + scrollTop
  const { mainAxis, crossAxis } = getAxis(placement)
  const length = getLengthFromAxis(mainAxis)
  const commonAlign = reference[length] / 2 - floating[length] / 2
  const side = getSide(placement)
  const isVertical = mainAxis === 'x'

  let coords
  switch (side) {
    case 'top':
      coords = { x: commonX, y: commonY - floating.height }
      coords[crossAxis] -= offset
      break
    case 'bottom':
      coords = {
        x: commonX,
        y: commonY + reference.height,
      }
      coords[crossAxis] += offset
      break
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY + reference.height / 2 - floating.height / 2,
      }
      coords[crossAxis] += offset
      break
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY + reference.height / 2 - floating.height / 2,
      }
      coords[crossAxis] -= offset
      break
    default:
      coords = { x: reference.x, y: reference.y }
  }

  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1)
      break
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1)
      break
    default:
  }

  return coords
}
