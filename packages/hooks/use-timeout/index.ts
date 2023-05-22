import { tryOnScopeDispose } from '@vueuse/core'

export function useTimeout() {
  let timeoutHandle: number

  const registerTimeout = (fn: (...args: any[]) => any, delay: number) => {
    cancelTimeout()
    timeoutHandle = setTimeout(fn, delay)
  }
  const cancelTimeout = () => clearTimeout(timeoutHandle)

  tryOnScopeDispose(() => cancelTimeout())

  return {
    registerTimeout,
    cancelTimeout,
  }
}
