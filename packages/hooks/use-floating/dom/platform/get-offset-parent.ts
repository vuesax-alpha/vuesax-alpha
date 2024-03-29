import {
  getContainingBlock,
  getNodeName,
  getWindow,
  isContainingBlock,
  isHTMLElement,
  isTableElement,
} from '@vuesax-alpha/hooks/use-floating/utils/dom'

type Polyfill = (element: HTMLElement) => Element | null

function getTrueOffsetParent(
  element: Element,
  polyfill: Polyfill | undefined
): Element | null {
  if (
    !isHTMLElement(element) ||
    getComputedStyle(element).position === 'fixed'
  ) {
    return null
  }

  if (polyfill) {
    return polyfill(element)
  }

  return element.offsetParent
}

export function getOffsetParent(
  element: Element,
  polyfill?: Polyfill
): Element | Window {
  const window = getWindow(element)

  if (!isHTMLElement(element)) {
    return window
  }

  let offsetParent = getTrueOffsetParent(element, polyfill)

  while (
    offsetParent &&
    isTableElement(offsetParent) &&
    getComputedStyle(offsetParent).position === 'static'
  ) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill)
  }

  if (
    offsetParent &&
    (getNodeName(offsetParent) === 'html' ||
      (getNodeName(offsetParent) === 'body' &&
        getComputedStyle(offsetParent).position === 'static' &&
        !isContainingBlock(offsetParent)))
  ) {
    return window
  }

  return offsetParent || getContainingBlock(element) || window
}
