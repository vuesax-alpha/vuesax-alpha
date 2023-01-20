import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type SidebarGroup from './sidebar-group.vue'

export const sidebarGroupProps = buildProps({})

export type SidebarGroupProps = ExtractPropTypes<typeof sidebarGroupProps>
export type SidebarGroupInstance = InstanceType<typeof SidebarGroup>
