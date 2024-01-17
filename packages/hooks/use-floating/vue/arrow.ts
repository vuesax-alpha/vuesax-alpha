import { unref } from 'vue'
import { arrow as apply } from '@vuesax-alpha/hooks/use-floating/dom'

import { unwrapElement } from './utils/unwrap-element'
import type { ArrowOptions } from './types'
import type { Middleware } from '@vuesax-alpha/hooks/use-floating/dom'

export function arrow(options: ArrowOptions): Middleware {
  return {
    name: 'arrow',
    options,
    fn(args) {
      const element = unwrapElement(unref(options.element))

      if (element == null) {
        return {}
      }

      return apply({ element, padding: options.padding }).fn(args)
    },
  }
}
