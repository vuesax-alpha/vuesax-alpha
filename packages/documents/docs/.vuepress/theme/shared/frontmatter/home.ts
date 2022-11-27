import { PageFrontmatter } from 'vuepress-vite';

export interface ThemeHomeActionOption {
  /**
   * Action name
   */
  text: string;

  /**
   * Action link
   */
  link: string;

  /**
   * Type of action
   *
   * @default 'default'
   */
  type?: "primary" | "default";
}

export interface ThemeHomeFeature {
  /**
  * Feature name
  */
  title: string;

  /**
  * Feature description
  */
  details: string;
}

export interface ThemeHomeFeatureOption extends ThemeHomeFeature {
  /**
   * Feature actions
   */
  action?: ThemeHomeActionOption,
}

export interface ThemeProjectHomePageFrontmatter extends PageFrontmatter {
  home: true,
  heroText?: string;
  tagline?: string;

  action: ThemeHomeActionOption;
  features?: ThemeHomeFeatureOption[];
  suscribe?: string;
  premiumThemes?: ThemeHomeFeature,
}