import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { Arrayable } from '@vuesax-alpha/utils'
import type { TableModelValueType } from '@vuesax-alpha/components/table'

export type TableContext = {
  colspan: Ref<number>
  modelValue: ComputedRef<Arrayable<TableModelValueType>>
  multiple: ComputedRef<boolean>
  selected: (data: unknown) => void
}

export const tableContextKey: InjectionKey<TableContext> =
  Symbol('table-context')
