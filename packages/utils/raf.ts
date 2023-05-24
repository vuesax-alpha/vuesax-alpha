import { isClient } from '@vueuse/core'

export const rAF = (fn: () => void) =>
  isClient
    ? requestAnimationFrame(fn)
    : (setTimeout(fn, 16) as unknown as number)

export const cAF = (handle: number) =>
  isClient ? cancelAnimationFrame(handle) : clearTimeout(handle)
