export type Sidebar = SidebarItem[] | SidebarMulti

export interface SidebarMulti {
  [path: string]: SidebarItem[]
}

export type SidebarItem = {
  /**
   * The text label of the item.
   */
  text?: string

  /**
   * The link of the item.
   */
  link?: string

  /**
   * The children of the item.
   */
  items?: SidebarItem[]

  /**
   * If not specified, group is not collapsible.
   *
   * If `true`, group is collapsible and collapsed by default
   *
   * If `false`, group is collapsible but expanded by default
   */
  collapsed?: boolean
}
