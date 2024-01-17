import { getCssDimensions } from '../utils/get-css-demenssions'
import type { Dimensions } from '@vuesax-alpha/hooks/use-floating/utils'

export function getDimensions(element: Element): Dimensions {
  const { width, height } = getCssDimensions(element)
  return { width, height }
}
