// @ts-nocheck
import { isRef, ref } from 'vue'
import { hyphenate, isObject, isString } from '@vue/shared'
import { isEqual } from 'lodash-unified'
import { loading } from './method'
import type { LoadingHandle, LoadingParams } from './loading'
import type { Directive, DirectiveBinding, UnwrapRef } from 'vue'

const INSTANCE_KEY = Symbol('VsLoading')

export type LoadingBinding = boolean | UnwrapRef<LoadingParams>
export interface ElementLoading extends HTMLElement {
  [INSTANCE_KEY]?: {
    instance: LoadingHandle
    options: LoadingParams
  }
}

const createInstance = (
  el: ElementLoading,
  binding: DirectiveBinding<LoadingBinding>
) => {
  const vm = binding.instance

  const getBindingProp = <K extends keyof LoadingParams>(
    key: K
  ): LoadingParams[K] =>
    isObject(binding.value) ? binding.value[key] : undefined

  const resolveExpression = (key: any) => {
    const data = (isString(key) && vm?.[key]) || key
    if (data) return ref(data)
    return data
  }

  const getProp = <K extends keyof LoadingParams>(name: K, def?: unknown) =>
    resolveExpression(
      getBindingProp(name) ??
        el.getAttribute(`element-loading-${hyphenate(name)}`) ??
        def
    )

  const options: LoadingParams = {
    text: getProp('text'),
    color: getProp('color'),
    background: getProp('background'),
    target: getBindingProp('target') ?? el,
    opacity: getProp('opacity'),
    progress: getProp('progress'),
    percent: getProp('percent'),
    scale: getProp('scale'),
    type: getProp('type'),
  }

  el[INSTANCE_KEY] = {
    options,
    instance: loading(options),
  }
}

const updateOptions = (
  newOptions: UnwrapRef<LoadingParams>,
  originalOptions: LoadingParams
) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key])) {
      originalOptions[key].value = newOptions[key]
    }
  }
}

export const vLoading: Directive<ElementLoading, LoadingBinding> = {
  mounted(el, binding) {
    if (
      binding.value == true ||
      (isObject(binding.value) && binding.value.visible)
    ) {
      createInstance(el, binding)
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY]

    if (!isEqual(binding.value, binding.oldValue)) {
      if (isObject(binding.value)) {
        if (binding.value.visible) {
          if (!binding.oldValue?.visible) {
            createInstance(el, binding)
          }

          if (instance) updateOptions(binding.value, instance.options)
        } else {
          instance?.instance.close()
        }
      } else {
        if (binding.value) {
          createInstance(el, binding)
        } else {
          instance?.instance.close()
        }
      }
    }
  },
  unmounted(el) {
    el[INSTANCE_KEY]?.instance.close()
  },
}
