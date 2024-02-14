import { buildProps } from '@vuesax-alpha/utils'

export const sidebarGroupProps = buildProps({
  open: { type: Boolean, default: false },
} as const)
