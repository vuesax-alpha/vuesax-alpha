import { createCoords, round } from '@vuesax-alpha/hooks/use-floating/utils'
import { isHTMLElement } from '@vuesax-alpha/hooks/use-floating/utils/dom'
import { unwrapElement } from '../utils/unwrap-element'
import { getCssDimensions } from '../utils/get-css-demenssions'
import type { Coords } from '@vuesax-alpha/hooks/use-floating/utils'
import type { VirtualElement } from '../types'

export function getScale(element: Element | VirtualElement): Coords {
  const domElement = unwrapElement(element)

  if (!isHTMLElement(domElement)) {
    return createCoords(1)
  }

  const rect = domElement.getBoundingClientRect()
  const { width, height, $ } = getCssDimensions(domElement)
  let x = ($ ? round(rect.width) : rect.width) / width
  let y = ($ ? round(rect.height) : rect.height) / height

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1
  }

  if (!y || !Number.isFinite(y)) {
    y = 1
  }

  return {
    x,
    y,
  }
}
