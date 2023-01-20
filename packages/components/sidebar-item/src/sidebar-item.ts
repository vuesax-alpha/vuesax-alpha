import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type SidebarItem from './sidebar-item.vue'

export const sidebarItemProps = buildProps({})

export type SidebarItemProps = ExtractPropTypes<typeof sidebarItemProps>
export type SidebarItemInstance = InstanceType<typeof SidebarItem>
