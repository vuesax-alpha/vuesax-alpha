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
  props: ThemeNormalPropsFrontmatter;
  slots: ThemeNormalPropsFrontmatter;
  events: ThemeNormalPropsFrontmatter;
  news: string[];
  updates: string[];
}

export interface ThemePageFrontmatter extends ThemeNormalApiFrontmatter {
  next: string | false;
  prev: string | false;
}