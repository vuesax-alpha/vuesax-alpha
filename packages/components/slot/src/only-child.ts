import {
  Comment,
  Fragment,
  Text,
  cloneVNode,
  defineComponent,
  h,
  inject,
  withDirectives,
} from 'vue'
import { NOOP, isObject } from '@vue/shared'
import {
  FORWARD_REF_INJECTION_KEY,
  useForwardRefDirective,
  useNamespace,
} from '@vuesax-alpha/hooks'
import { debugWarn } from '@vuesax-alpha/utils'

import type { Ref, VNode } from 'vue'

const NAME = 'VsOnlyChild'

export const OnlyChild = defineComponent({
  name: NAME,
  setup(_, { slots, attrs }) {
    return () => {
      const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY, undefined)
      const forwardRefDirective = useForwardRefDirective(
        forwardRefInjection?.setForwardRef ?? NOOP
      )

      const defaultSlot = slots.default?.(attrs)
      if (!defaultSlot) return null

      if (defaultSlot.length > 1) {
        debugWarn(NAME, 'requires exact only one valid child.')
        return null
      }

      const firstLegitNode = findFirstLegitChild(defaultSlot)
      if (!firstLegitNode) {
        debugWarn(NAME, 'no valid child node found')
        return null
      }

      return withDirectives(cloneVNode(firstLegitNode!), [
        [forwardRefDirective],
      ])
    }
  },
})

function findFirstLegitChild(node: VNode[] | undefined): VNode | null {
  if (!node) return null
  const children = node as VNode[]
  for (const child of children) {
    /**
     * when user uses h(Fragment, [text]) to render plain string,
     * this switch case just cannot handle, when the value is primitives
     * we should just return the wrapped string
     */
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue
        case Text:
        case 'svg':
          return wrapTextContent(child)
        case Fragment:
          return findFirstLegitChild(child.children as VNode[])
        default:
          return child
      }
    }
    return wrapTextContent(child)
  }
  return null
}

function wrapTextContent(s: string | VNode) {
  const ns = useNamespace('only-child')
  return h(
    'span',
    {
      className: ns.e('content'),
    },
    s
  )
}

export interface OnlyChildExpose {
  forwardRef: Ref<HTMLElement>
}
