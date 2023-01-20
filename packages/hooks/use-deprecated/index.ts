import { unref, watch } from 'vue'
import { debugWarn } from '@vuesax-alpha/utils'

import type { MaybeRef } from '@vueuse/core'

type DeprecationParam = {
  from: string
  replacement: string
  scope: string
  version: string
  ref: string
  type?: 'API' | 'Attribute' | 'Event' | 'Slot' | 'Prop'
}

/**
 * scope, type, from, version, replacement, ref
 */
export const useDeprecated = (
  { scope, type = 'API', from, version, replacement, ref }: DeprecationParam,
  condition: MaybeRef<boolean>
) => {
  watch(
    () => unref(condition),
    (val) => {
      if (val) {
        debugWarn(
          scope,
          `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref}
`
        )
      }
    },
    {
      immediate: true,
    }
  )
}
