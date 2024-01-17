import {
  getComputedStyle,
  getNodeScroll,
  max,
} from '@vuesax-alpha/hooks/use-floating/utils'

import { getDocumentElement } from '../platform/get-document-element'
import { getWindowScrollBarX } from './get-window-scrollbar-x'
import type { Rect } from '@vuesax-alpha/hooks/use-floating/utils'

export function getDocumentRect(element: HTMLElement): Rect {
  const html = getDocumentElement(element)
  const scroll = getNodeScroll(element)
  const body = element.ownerDocument.body

  const width = max(
    html.scrollWidth,
    html.clientWidth,
    body.scrollWidth,
    body.clientWidth
  )
  const height = max(
    html.scrollHeight,
    html.clientHeight,
    body.scrollHeight,
    body.clientHeight
  )

  let x = -scroll.scrollLeft + getWindowScrollBarX(element)
  const y = -scroll.scrollTop

  if (getComputedStyle(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width
  }

  return {
    width,
    height,
    x,
    y,
  }
}
