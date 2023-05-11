export type NavItem = NavItemWithLink | NavItemWithChildren

export interface NavItemWithLink {
  text: string
  link: string
  activeMatch?: string
  target?: string
  rel?: string
}

export interface NavItemChildren {
  text?: string
  items: NavItemWithLink[]
}

export interface NavItemWithChildren {
  text?: string
  items: (NavItemChildren | NavItemWithLink)[]
  activeMatch?: string
}
