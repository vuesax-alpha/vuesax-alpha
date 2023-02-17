import { computed, unref } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks/use-namespace'
import { vuesaxColors } from '@vuesax-alpha/constants'
import type { MaybeRef } from '@vueuse/core'

export const useBaseComponent = (color?: MaybeRef<string>) => {
  const ns = useNamespace('component')

  const className = computed(() => {
    return vuesaxColors.includes(unref(color) as any) ? ns.m(unref(color)) : ''
  })

  const isColor = computed(() => (!!color && ns.m(ns.is('color'))) || '')

  return [unref(className), unref(isColor)]
}
