// @ts-nocheck
import { createVNode, reactive, ref, render, unref } from 'vue'
import { unrefElement } from '@vueuse/core'
import { debugWarn, isClient, isElement, isString } from '@vuesax-alpha/utils'
import { LOADING_RECT, SCALE_PARENT } from '@vuesax-alpha/constants'
import LoadingConstructor from './loading.vue'
import type { LoadingFn, LoadingParams, LoadingParamsRef } from './loading'

export const loading: LoadingFn = (options = {}) => {
  if (!options || !isClient)
    return {
      setPercent: () => undefined,
      setProgress: () => undefined,
      close: () => undefined,
      setText: () => undefined,
    }

  const getOption = (key: keyof LoadingParams) => {
    const data = options?.[key] || key
    if (unref(data)) return ref(data)
    return data
  }

  const optionsRef: LoadingParamsRef = {}

  Object.keys(options).forEach((e) => {
    optionsRef[e] = getOption(e)
  })

  let appendTo: HTMLElement | null = document.body
  if (isElement(unrefElement(optionsRef.target))) {
    appendTo = unrefElement(optionsRef.target)
  } else if (isString(unref(optionsRef.target))) {
    appendTo = document.querySelector(unref(optionsRef.target))
  }

  if (!isElement(appendTo)) {
    debugWarn(
      'VsLoading',
      'the appendTo option is not an HTMLElement. Falling back to document.body.'
    )
    appendTo = document.body
    optionsRef.target!.value = undefined
  }

  if (appendTo.clientHeight < LOADING_RECT.height) {
    const eightyPercentParentHeight = appendTo.clientHeight * SCALE_PARENT
    const loadingScale = eightyPercentParentHeight / LOADING_RECT.height
    optionsRef.scale = ref(loadingScale)
  }

  const vm = createVNode(LoadingConstructor, reactive(optionsRef))
  const container = document.createElement('div')
  render(vm, container)

  appendTo!.appendChild(container.firstChild!)

  const close = () => {
    ;(vm.component!.exposed as { close: () => void }).close()
  }

  const setText = (val: string) => {
    optionsRef.text!.value = val
  }
  const setProgress = (val: number) => {
    optionsRef.progress!.value = val
  }
  const setPercent = (val: number) => {
    optionsRef.percent!.value = val
  }

  return {
    close,
    setText,
    setProgress,
    setPercent,
  }
}

export default loading
