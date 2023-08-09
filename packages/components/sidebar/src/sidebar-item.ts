import { buildProps } from '@vuesax-alpha/utils'

export const sidebarItemProps = buildProps({
  to: String,
  href: String,
  target: {
    type: String,
    default: '_blank',
  },
  id: String,
  arrow: Boolean,
  active: Boolean,
} as const)
