import {
  getDocumentElement,
  getNodeScroll,
} from '@vuesax-alpha/hooks/use-floating/utils/dom'
import { getBoundingClientRect } from './get-bounding-client-rect'

export function getWindowScrollBarX(element: Element): number {
  return (
    getBoundingClientRect(getDocumentElement(element)).left +
    getNodeScroll(element).scrollLeft
  )
}
