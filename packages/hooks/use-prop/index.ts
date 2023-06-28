import { computed, getCurrentInstance, unref } from 'vue'
import type { ComputedRef } from 'vue'

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance()!
  return computed(() => unref((vm.proxy?.$props as any)[name]) ?? undefined)
}
