import { convertOffsetParentRelativeRectToViewportRelativeRect } from './platform/convert-offset-parent-relative-rect-to-viewport-relative-rect'
import { getClientRects } from './platform/get-client-rect'
import { getClippingRect } from './platform/get-clipping-rect'
import { getDimensions } from './platform/get-dimensions'
import { getDocumentElement } from './platform/get-document-element'
import { getElementRects } from './platform/get-element-rects'
import { getOffsetParent } from './platform/get-offset-parent'
import { getScale } from './platform/get-scale'
import { isElement } from './platform/is-element'
import { isRTL } from './platform/is-rtl'
import type { Platform } from './types'

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
