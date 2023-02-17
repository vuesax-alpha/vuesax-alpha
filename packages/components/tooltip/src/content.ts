import { buildProps, definePropType } from '@vuesax-alpha/utils'
import { popperContentProps } from '@vuesax-alpha/components/popper'
import { useDelayedToggleProps, useNamespace } from '@vuesax-alpha/hooks'
import type Content from './content.vue'
import type { ExtractPropTypes } from 'vue'

const ns = useNamespace('popper')

export const tooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: definePropType<string | HTMLElement>([String, Object]),
  },
  content: {
    type: String,
    default: '',
  },
  rawContent: {
    type: Boolean,
    default: false,
  },
  persistent: Boolean,
  ariaLabel: String,
  // because model toggle prop is generated dynamically
  // so the typing cannot be evaluated by typescript as type:
  // [name]: { type: Boolean, default: null }
  // so we need to declare that again for type checking.
  visible: {
    type: definePropType<boolean | null>(Boolean),
    default: null,
  },
  transition: {
    type: String,
    default: `${ns.namespace.value}-fade-in-linear`,
  },
  teleported: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
  },
} as const)

export type TooltipContentProps = ExtractPropTypes<typeof tooltipContentProps>

export type TooltipContentInstance = InstanceType<typeof Content>
