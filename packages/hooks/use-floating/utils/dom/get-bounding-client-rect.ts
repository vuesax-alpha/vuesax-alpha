import { rectToClientRect } from '../rect-to-client-rect'
import type { ClientRectObject } from '../../types'

export function getBoundingClientRect(element?: Element): ClientRectObject {
  if (!element) {
    return rectToClientRect({ width: 0, height: 0, x: 0, y: 0 })
  }

  const clientRect = element.getBoundingClientRect()

  const x = clientRect.left
  const y = clientRect.top
  const width = clientRect.width
  const height = clientRect.height

  return rectToClientRect({ width, height, x, y })
}
