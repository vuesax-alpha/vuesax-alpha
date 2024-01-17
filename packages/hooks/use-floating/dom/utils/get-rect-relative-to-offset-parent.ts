import { createCoords } from '@vuesax-alpha/hooks/use-floating/utils'
import {
  getDocumentElement,
  getNodeName,
  getNodeScroll,
  isHTMLElement,
  isOverflowElement,
} from '@vuesax-alpha/hooks/use-floating/utils/dom'
import { getBoundingClientRect } from './get-bounding-client-rect'
import { getWindowScrollBarX } from './get-window-scrollbar-x'
import type {
  Rect,
  Strategy,
  VirtualElement,
} from '@vuesax-alpha/hooks/use-floating/utils'

export function getRectRelativeToOffsetParent(
  element: Element | VirtualElement,
  offsetParent: Element | Window,
  strategy: Strategy
): Rect {
  const isOffsetParentAnElement = isHTMLElement(offsetParent)
  const documentElement = getDocumentElement(offsetParent)
  const isFixed = strategy === 'fixed'
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent)

  let scroll = { scrollLeft: 0, scrollTop: 0 }
  const offsets = createCoords(0)

  if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
    if (
      getNodeName(offsetParent) !== 'body' ||
      isOverflowElement(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent)
    }

    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(
        offsetParent,
        true,
        isFixed,
        offsetParent
      )
      offsets.x = offsetRect.x + offsetParent.clientLeft
      offsets.y = offsetRect.y + offsetParent.clientTop
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement)
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height,
  }
}
