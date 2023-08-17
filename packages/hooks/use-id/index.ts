import { computed, getCurrentInstance, inject, unref } from 'vue'
import { debugWarn, isClient } from '@vuesax-alpha/utils'
import { useGlobalConfig } from '../use-global-config'
import { defaultNamespace } from '../use-namespace'

import type { InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '@vuesax-alpha/utils'

export type IdInjectionContext = {
  prefix: number
  current: number
}

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
}

export const ID_INJECTION_KEY: InjectionKey<IdInjectionContext> =
  Symbol('IdInjection')

export const useIdInjection = (): IdInjectionContext => {
  return getCurrentInstance()
    ? inject(ID_INJECTION_KEY, defaultIdInjection)
    : defaultIdInjection
}

export const useId = (deterministicId?: MaybeRef<string>): Ref<string> => {
  const idInjection = useIdInjection()
  if (!isClient && idInjection === defaultIdInjection) {
    debugWarn(
      'IdInjection',
      `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`
    )
  }

  const namespace = useGlobalConfig('namespace', defaultNamespace)
  const idRef = computed(
    () =>
      unref(deterministicId) ||
      `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`
  )

  return idRef
}
