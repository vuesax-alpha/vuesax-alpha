import type { PageFrontmatter } from 'vuepress-vite'

export interface VsThemeHomeActionOption {
  /**
   * Action name
   */
  text: string

  /**
   * Action link
   */
  link: string
}

export interface VsThemeHomeFeature {
  /**
   * Feature name
   */
  title: string

  /**
   * Feature description
   */
  details: string
}

export interface VsThemeHomeFeatureOption extends VsThemeHomeFeature {
  /**
   * Feature actions
   */
  action?: VsThemeHomeActionOption
}

export interface VsThemeProjectHomePageFrontmatter extends PageFrontmatter {
  home: true
  heroText?: string
  tagline?: string

  action: VsThemeHomeActionOption
  features?: VsThemeHomeFeatureOption[]
  suscribe?: string
  premiumThemes?: VsThemeHomeFeature
}
