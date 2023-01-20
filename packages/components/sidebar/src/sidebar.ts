import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type Sidebar from './sidebar.vue'

export const sidebarProps = buildProps({})

export type SidebarProps = ExtractPropTypes<typeof sidebarProps>
export type SidebarInstance = InstanceType<typeof Sidebar>
