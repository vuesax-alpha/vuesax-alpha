import {
  getDocumentElement,
  getWindow,
  isWebKit,
} from '@vuesax-alpha/hooks/use-floating/utils/dom'
import type { Rect, Strategy } from '@vuesax-alpha/hooks/use-floating/utils'

export function getViewportRect(element: Element, strategy: Strategy): Rect {
  const win = getWindow(element)
  const html = getDocumentElement(element)
  const visualViewport = win.visualViewport

  let width = html.clientWidth
  let height = html.clientHeight
  let x = 0
  let y = 0

  if (visualViewport) {
    width = visualViewport.width
    height = visualViewport.height

    const visualViewportBased = isWebKit()

    if (!visualViewportBased || (visualViewportBased && strategy === 'fixed')) {
      x = visualViewport.offsetLeft
      y = visualViewport.offsetTop
    }
  }

  return {
    width,
    height,
    x,
    y,
  }
}
