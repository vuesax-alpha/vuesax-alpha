// @ts-nocheck
import { computed, getCurrentInstance, inject, provide, ref, unref } from 'vue'
import { debugWarn, keysOf } from '@vuesax-alpha/utils'
import { configProviderContextKey } from '@vuesax-alpha/tokens'

import { localeContextKey, useLocale } from '../use-locale'
import {
  defaultNamespace,
  namespaceContextKey,
  useNamespace,
} from '../use-namespace'
import {
  defaultInitialZIndex,
  useZIndex,
  zIndexContextKey,
} from '../use-z-index'
import type { MaybeRef } from '@vueuse/core'
import type { App, Ref } from 'vue'
import type { ConfigProviderContext } from '@vuesax-alpha/tokens'

const globalConfig = ref<ConfigProviderContext>()

export function useGlobalConfig<
  K extends keyof ConfigProviderContext,
  D extends ConfigProviderContext[K]
>(
  key: K,
  defaultValue?: D
): Ref<Exclude<ConfigProviderContext[K], undefined> | D>
export function useGlobalConfig(): Ref<ConfigProviderContext>
export function useGlobalConfig(
  key?: keyof ConfigProviderContext,
  defaultValue = undefined
) {
  const config = getCurrentInstance()
    ? inject(configProviderContextKey, globalConfig)
    : globalConfig
  if (key) {
    return computed(() => config.value?.[key] ?? defaultValue)
  } else {
    return config
  }
}

// for components like `VsNotification`.
export const useGlobalComponentSettings = (block: string) => {
  const config = useGlobalConfig()

  const ns = useNamespace(
    block,
    computed(() => config.value?.namespace || defaultNamespace)
  )

  const locale = useLocale(computed(() => config.value?.locale))
  const zIndex = useZIndex(
    computed(() => config.value?.zIndex || defaultInitialZIndex)
  )

  return {
    ns,
    locale,
    zIndex,
  }
}

export const provideGlobalConfig = (
  config: MaybeRef<ConfigProviderContext>,
  app?: App,
  global = false
) => {
  const inSetup = !!getCurrentInstance()
  const oldConfig = inSetup ? useGlobalConfig() : undefined

  const provideFn = app?.provide ?? (inSetup ? provide : undefined)
  if (!provideFn) {
    debugWarn(
      'provideGlobalConfig',
      'provideGlobalConfig() can only be used inside setup().'
    )
    return
  }

  const context = computed(() => {
    const cfg = unref(config)
    if (!oldConfig?.value) return cfg
    return mergeConfig(oldConfig.value, cfg)
  })

  provideFn(configProviderContextKey, context)
  provideFn(
    localeContextKey,
    computed(() => context.value.locale)
  )
  provideFn(
    namespaceContextKey,
    computed(() => context.value.namespace)
  )
  provideFn(
    zIndexContextKey,
    computed(() => context.value.zIndex)
  )

  if (global || !globalConfig.value) {
    globalConfig.value = context.value
  }
  return context
}

const mergeConfig = (
  a: ConfigProviderContext,
  b: ConfigProviderContext
): ConfigProviderContext => {
  const keys = [...new Set([...keysOf(a), ...keysOf(b)])]
  const obj: Record<string, any> = {}
  for (const key of keys) {
    obj[key] = b[key] ?? a[key]
  }
  return obj
}
