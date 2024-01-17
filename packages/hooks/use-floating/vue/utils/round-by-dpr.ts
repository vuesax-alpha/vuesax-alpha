import { getDPR } from './get-dpr'

export function roundByDPR(element: Element, value: number) {
  const dpr = getDPR(element)
  return Math.round(value * dpr) / dpr
}
