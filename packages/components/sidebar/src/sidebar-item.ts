import { buildProps } from '@vuesax-alpha/utils'

export const sidebarItemProps = buildProps({
  to: { type: String },
  href: { type: String },
  target: {
    type: String,
    default: '_blank',
  },
  id: { type: String },
  arrow: { type: Boolean },
  active: { type: Boolean },
} as const)
