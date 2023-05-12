import type { PageFrontmatter } from 'vuepress-vite'

export type ApiState = {
  text: string
  type?: string
}

export interface ThemeNormalPropsFrontmatter {
  name: string
  state: ApiState
  type: string
  values: any
  description: string
  default: any
  link: string
  code: string
}
export interface ThemeNormalApiFrontmatter extends PageFrontmatter {
  PROPS: ThemeNormalPropsFrontmatter
  SLOTS: ThemeNormalPropsFrontmatter
  EVENTS: ThemeNormalPropsFrontmatter
  NEWS: string[]
  UPDATES: string[]
}

export interface ThemePageFrontmatter extends ThemeNormalApiFrontmatter {
  next: boolean
  prev: boolean
}
