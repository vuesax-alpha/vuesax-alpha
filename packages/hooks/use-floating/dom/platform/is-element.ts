import { getWindow } from '@vuesax-alpha/hooks/use-floating/utils/dom'

export function isElement(value: unknown): value is Element {
  return value instanceof Element || value instanceof getWindow(value).Element
}
