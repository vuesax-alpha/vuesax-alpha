import { PageFrontmatter } from "vuepress-vite";

export interface ThemeNormalPropsFrontmatter {
  name: string;
  type: string;
  values: any;
  description: string;
  default: any;
  link: string;
  code: string;
}
export interface ThemeNormalApiFrontmatter extends PageFrontmatter {
  PROPS: ThemeNormalPropsFrontmatter;
  SLOTS: ThemeNormalPropsFrontmatter;
  EVENTS: ThemeNormalPropsFrontmatter;
  NEWS: string[];
  UPDATES: string[];
}

export interface ThemePageFrontmatter extends ThemeNormalApiFrontmatter {
  next: boolean;
  prev: boolean;
}