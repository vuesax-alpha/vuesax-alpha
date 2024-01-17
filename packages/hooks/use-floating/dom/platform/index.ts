import { getDocumentElement } from '../../utils/dom'
import { getClientRects } from './get-client-rect'
import { convertOffsetParentRelativeRectToViewportRelativeRect } from './convert-offset-parent-relative-rect-to-viewport-relative-rect'
import { getClippingRect } from './get-clipping-rect'
import { getDimensions } from './get-dimensions'
import { getScale } from './get-scale'
import { isElement } from './is-element'
import { isRTL } from './is-rtl'
import { getOffsetParent } from './get-offset-parent'
import { getElementRects } from './get-element-rects'
import type { Platform } from '../types'

export const platform: Required<Platform> = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL,
}
