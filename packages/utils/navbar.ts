/**
 * Base nav item, displayed as text
 */
export interface NavItem {
  text?: string
  ariaLabel?: string
}
/**
 * Base nav group, has nav items children
 */
export interface NavGroup<T> extends NavItem {
  children: T[]
}
/**
 * Props for `<AutoLink>`
 */
export interface NavLink extends NavItem {
  path: string
  target?: string
}
/**
 * Navbar types
 */
export type NavbarItem = NavLink
export type NavbarGroup = NavGroup<NavbarGroup | NavbarItem>

export type IfNavbarItem<T, Y, N> = T extends NavbarItem ? Y : N
export type IfNavbarGroup<T, Y, N> = T extends NavbarGroup ? Y : N

export const isNavbarGroup = (nav: unknown): nav is NavbarGroup =>
  Object.prototype.hasOwnProperty.call(nav, 'children')

export const isNavbarItem = (nav: unknown): nav is NavbarItem =>
  !Object.prototype.hasOwnProperty.call(nav, 'children')

export const isLinkExternal = (path?: string) => !!path?.startsWith('http')

export const isMailto = (path?: string): path is `mailto:${string}` =>
  !!path?.startsWith('mailto:')

export const isTel = (path?: string): path is `tel:${string}` =>
  !!path?.startsWith('tel:')

export const isExternal = (
  path?: string
): path is `mailto:${string}` | `tel:${string}` | `http${string}` =>
  isLinkExternal(path) || isMailto(path) || isTel(path) || false
