import { createVNode, render } from 'vue'
import { isClient } from '@vueuse/shared'
import { debugWarn, isElement, isString } from '@vuesax-alpha/utils'
import { LOADING_RECT, SCALE_PARENT } from '@vuesax-alpha/constants'
import LoadingConstructor from './loading.vue'
import type { LoadingFn } from './loading'

export const loading: LoadingFn = (options = {}) => {
  if (!options) return { close: () => undefined }

  if (!isClient)
    return {
      close: () => undefined,
    }

  let appendTo: HTMLElement | null = document.body
  if (isElement(options.target)) {
    appendTo = options.target
  } else if (isString(options.target)) {
    appendTo = document.querySelector(options.target)
  }

  if (!isElement(appendTo)) {
    debugWarn(
      'VsNotification',
      'the appendTo option is not an HTMLElement. Falling back to document.body.'
    )
    appendTo = document.body
    options.target = undefined
  }

  if (appendTo.clientHeight < LOADING_RECT.height) {
    // descre 80% parent height
    const eightyPercentParentHeight = appendTo.clientHeight * SCALE_PARENT
    const loadingScale = eightyPercentParentHeight / LOADING_RECT.height
    options.scale = loadingScale
  }

  const vm = createVNode(LoadingConstructor, options)
  const container = document.createElement('div')
  render(vm, container)

  appendTo!.appendChild(container.firstChild!)

  const close = () => {
    ;(vm.component!.exposed as { close: () => void }).close()
  }

  return {
    close,
  }
}

export default loading
