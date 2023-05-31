import type { ComputedRef, InjectionKey, WritableComputedRef } from 'vue'

export interface PaginationContext {
  currentPage: WritableComputedRef<number>
  pageCount: ComputedRef<number>
  disabled: ComputedRef<boolean>
  buttonsDotted: ComputedRef<boolean>
  infinite: ComputedRef<boolean>
  changeEvent: (val: number) => void
  handleSizeChange: (val: number) => void
}

export const paginationContextKey: InjectionKey<PaginationContext> =
  Symbol('PaginationKey')
