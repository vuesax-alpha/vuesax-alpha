import { computed, getCurrentInstance, inject, onUnmounted } from 'vue'
import type { ParentProvide } from '@vuesax-alpha/tokens'
import type { InjectionKey } from 'vue'

export const useGroupInject = <T extends Record<string, unknown>>(
  key: InjectionKey<ParentProvide<T>>
) => {
  const instance = getCurrentInstance()
  if (!instance) {
    throw new Error(
      'useInject hook must be called inside setup function or <script setup>'
    )
  }

  const parent = inject(key, undefined)
  const index = computed(() => parent?.children.indexOf(instance) || 0)

  parent?.insert(instance)

  onUnmounted(() => {
    parent?.remove(instance)
  })

  return parent ? { ...parent, index } : undefined
}
