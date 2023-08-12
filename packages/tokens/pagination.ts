import type { ComputedRef, InjectionKey, WritableComputedRef } from 'vue'

export interface PaginationContext {
  currentPage: WritableComputedRef<number>
  pageCount: ComputedRef<number>
  disabled: ComputedRef<boolean>
  buttonsDotted: ComputedRef<boolean>
  infinite: ComputedRef<boolean>
  loadingItems: ComputedRef<number[]>
  disabledItems: ComputedRef<number[]>
  isPagerLoading: (pager: number) => boolean
  isPagerDisabled: (pager: number) => boolean
  changeEvent: (val: number) => void
  handleSizeChange: (val: number) => void
}

export const paginationContextKey: InjectionKey<PaginationContext> =
  Symbol('PaginationKey')
