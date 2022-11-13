import { InjectionKey, Ref } from "vue";

interface SelectedFunc {
  (x: any): void
}

export interface TableContext {
  selected: SelectedFunc,
  colspan: Ref<number>
}

export const TableContextKey: InjectionKey<TableContext> =
  Symbol("vs-table-context");
