import type { ComputedRef, InjectionKey } from 'vue'

export type SidebarContext = {
  handleClickItem: (id: string) => void
  modelValue: ComputedRef<string>
  reduce: ComputedRef<boolean>
}

export const sidebarContextKey: InjectionKey<SidebarContext> = Symbol('sidebar')
