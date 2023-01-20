import type { ComponentInternalInstance } from 'vue'

export type ParentProvide<T> = T & {
  children: ComponentInternalInstance[]
  insert: (child: ComponentInternalInstance) => void
  remove: (child: ComponentInternalInstance) => void
}
