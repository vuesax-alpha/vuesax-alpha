import { getWindow } from '@vuesax-alpha/hooks/use-floating/utils'

export function isElement(value: unknown): value is Element {
  return value instanceof Element || value instanceof getWindow(value).Element
}
