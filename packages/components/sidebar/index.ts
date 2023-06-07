import { withInstall, withNoopInstall } from '@vuesax-alpha/utils'
import SidebarGroup from './src/sidebar-group.vue'
import SidebarItem from './src/sidebar-item.vue'
import Sidebar from './src/sidebar.vue'

export const VsSidebar = withInstall(Sidebar, {
  SidebarGroup,
  SidebarItem,
})
export default VsSidebar

export const VsSidebarGroup = withNoopInstall(SidebarGroup)
export const VsSidebarItem = withNoopInstall(SidebarItem)

export * from './src/sidebar-group'
export * from './src/sidebar-item'
export * from './src/sidebar'
