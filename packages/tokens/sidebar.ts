import type { ComputedRef, InjectionKey, Ref } from 'vue'

export type SidebarGroupContext = {
  groupRef: Ref<HTMLElement | undefined>
  contentRef: Ref<HTMLElement | undefined>
}

export const sidebarGroupContextKey: InjectionKey<SidebarGroupContext> =
  Symbol('sidebar-group')

export type SidebarContext = {
  handleClickItem: (id: string) => void
  modelValue: ComputedRef<string>
  reduce: ComputedRef<boolean>
}

export const sidebarContextKey: InjectionKey<SidebarContext> = Symbol('sidebar')
