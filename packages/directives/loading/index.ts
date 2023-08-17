import { isRef } from 'vue'

import { isBoolean } from '@vuesax-alpha/utils'
import type { ObjectDirective } from 'vue'
import type { MaybeRef } from '@vuesax-alpha/utils'

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
