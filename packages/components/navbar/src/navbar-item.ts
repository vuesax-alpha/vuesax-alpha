import { buildProps, definePropType } from '@vuesax-alpha/utils'
import type { RouteLocationRaw } from 'vue-router'
import type { NavbarItem as _NavbarItem } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type NavbarItem from './navbar-item.vue'

export const navbarItemProps = buildProps({
  /** @description Determines if the component is in active status. */
  active: {
    type: Boolean,
  },

  /** @description User-level route location, used for router-link */
  to: {
    type: definePropType<RouteLocationRaw>([String, Object]),
  },

  /**
   * @description navbar-item options
   */
  link: {
    type: definePropType<_NavbarItem>([Object]),
  },

  id: {
    type: String,
    required: true,
  },
} as const)

export type NavbarItemProps = ExtractPropTypes<typeof navbarItemProps>

export type NavbarItemInstance = InstanceType<typeof NavbarItem>
