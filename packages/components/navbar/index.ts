import { withInstall, withNoopInstall } from '@vuesax-alpha/utils'
import Navbar from './src/navbar.vue'
import NavbarItem from './src/navbar-item.vue'
import NavbarGroup from './src/navbar-group.vue'

export const VsNavbar = withInstall(Navbar, {
  NavbarItem,
  NavbarGroup,
})
export default VsNavbar

export const VsNavbarItem = withNoopInstall(NavbarItem)
export const VsNavbarGroup = withNoopInstall(NavbarGroup)

export * from './src/navbar-group'
export * from './src/navbar-item'
export * from './src/navbar'
