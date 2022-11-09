import { ComputedGetter, ComputedRef, InjectionKey, Ref } from "vue";

export interface GroupContext {
  group: Boolean,
  refs: {
    content$: Ref<HTMLElement | undefined>
  },
  handleClickItem: Function,
  getValue: any
}

export interface SidebarContext {
  reduce: Boolean,
  getValue: ComputedRef<any>,
  handleClickItem: Function
}

export const GroupContextKey: InjectionKey<GroupContext> = Symbol('sidebar-group-key');

export const SidebarContextKey: InjectionKey<SidebarContext> = Symbol('sidebar-key');