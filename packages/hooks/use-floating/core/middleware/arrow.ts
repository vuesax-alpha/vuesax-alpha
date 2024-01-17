import { unrefElement } from '@vueuse/core'
import {
  clamp,
  evaluate,
  getAlignment,
  getAlignmentAxis,
  getAxisLength,
  getPaddingObject,
  min as mathMin,
} from '@vuesax-alpha/hooks/use-floating/utils'
import type { MaybeElement } from '@vueuse/core'
import type { Padding } from '@vuesax-alpha/hooks/use-floating/utils'
import type { Derivable, Middleware } from '../types'

export interface ArrowOptions {
  /**
   * @default undefined
   */
  element: MaybeElement

  /**
   * @default 0
   */
  padding?: Padding
}

export const arrow = (
  options: ArrowOptions | Derivable<ArrowOptions>
): Middleware => ({
  name: 'arrow',
  options,
  async fn(state) {
    const { x, y, placement, rects, platform, elements, middlewareData } = state

    const { element, padding = 0 } = evaluate(options, state) || {}

    const htmlElement = unrefElement(element)

    if (htmlElement == null) {
      return {}
    }

    const paddingObject = getPaddingObject(padding)
    const coords = { x, y }
    const axis = getAlignmentAxis(placement)
    const length = getAxisLength(axis)
    const arrowDimensions = await platform.getDimensions(htmlElement)
    const isYAxis = axis === 'y'
    const minProp = isYAxis ? 'top' : 'left'
    const maxProp = isYAxis ? 'bottom' : 'right'
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth'

    const endDiff =
      rects.reference[length] +
      rects.reference[axis] -
      coords[axis] -
      rects.floating[length]
    const startDiff = coords[axis] - rects.reference[axis]

    const arrowOffsetParent = await platform.getOffsetParent?.(htmlElement)
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0

    if (!clientSize || !(await platform.isElement?.(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length]
    }

    const centerToReference = endDiff / 2 - startDiff / 2

    const largestPossiblePadding =
      clientSize / 2 - arrowDimensions[length] / 2 - 1
    const minPadding = mathMin(paddingObject[minProp], largestPossiblePadding)
    const maxPadding = mathMin(paddingObject[maxProp], largestPossiblePadding)

    const min = minPadding
    const max = clientSize - arrowDimensions[length] - maxPadding
    const center =
      clientSize / 2 - arrowDimensions[length] / 2 + centerToReference
    const offset = clamp(min, center, max)

    const shouldAddOffset =
      !middlewareData.arrow &&
      getAlignment(placement) != null &&
      center !== offset &&
      rects.reference[length] / 2 -
        (center < min ? minPadding : maxPadding) -
        arrowDimensions[length] / 2 <
        0
    const alignmentOffset = shouldAddOffset
      ? center < min
        ? center - min
        : center - max
      : 0

    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && { alignmentOffset }),
      },
      reset: shouldAddOffset,
    }
  },
})
