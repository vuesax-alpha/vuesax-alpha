import { isRef } from 'vue'

import { isBoolean } from '@vueuse/core'
import type { ObjectDirective } from 'vue'
import type { MaybeRef } from '@vueuse/core'
// import { isElement } from '@vuesax-alpha/utils'
// import { useLoading } from '@vuesax-alpha/hooks'

type LoadingOptions = {
  loading: MaybeRef<boolean>
}

const loading: ObjectDirective<
  HTMLElement,
  LoadingOptions | LoadingOptions['loading']
> = {
  mounted(el, binding) {
    const value = binding.value

    if (isBoolean(value) || isRef<boolean>(value)) {
      return
    }
  },
}

export default loading
