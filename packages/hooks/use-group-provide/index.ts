import { provide, reactive } from 'vue'
import type { ParentProvide } from '@vuesax-alpha/tokens'
import type { ComponentInternalInstance, InjectionKey } from '@vue/runtime-core'

export const useGroupProvide = <T extends Record<string, unknown>>(
  key: InjectionKey<ParentProvide<T>>,
  data: T
) => {
  const children: ComponentInternalInstance[] = reactive([])

  const insert = (child: ComponentInternalInstance) => {
    children.push(child)
  }
  const remove = (child: ComponentInternalInstance) => {
    const index = children.indexOf(child)
    children.splice(index, 1)
  }

  provide(key, {
    ...data,
    children,
    insert,
    remove,
  })

  return {
    children,
    insert,
    remove,
  }
}
