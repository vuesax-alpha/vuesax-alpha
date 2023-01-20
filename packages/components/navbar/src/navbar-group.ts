import { buildProps, definePropType } from '@vuesax-alpha/utils'
import type { NavbarGroup as _NavbarGroup } from '@vuesax-alpha/utils'
import type NavbarGroup from './navbar-group.vue'

export const navbarGroupProps = buildProps({
  /**
   * @description group navitem
   */
  links: {
    type: definePropType<_NavbarGroup>([String, Object, Array]),
    required: true,
  },
  /** @description arrow down */
  arrow: {
    type: Boolean,
    default: true,
  },
} as const)

export type NavbarGroupInstance = InstanceType<typeof NavbarGroup>
