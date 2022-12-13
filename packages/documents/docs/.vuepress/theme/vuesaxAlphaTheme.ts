import { DefaultThemeOptions } from "vuepress";
import type { App, Theme } from "@vuepress/core";

export declare interface VuesaxAlphaThemeOptions extends DefaultThemeOptions {
  /**
   * Prev Version: Vuesax-next
   */
  prevVersion?: string;
  linkPrevVersion?: string;
  searchPlaceholder?: string;
  search?: boolean;
  next?: string;
  prev?: string;
  searchMaxSuggestions?: number;
  displayAllHeaders?: boolean;
  searchData?: SearchData;
}
export declare type SearchData = {
  [x: string]: SearchDataOption[];
}
export declare type SearchDataOption = {
  title: string;
  path: string;
  headers?: SearchDataHeaderOption[];
}
export declare type SearchDataHeaderOption = {
  title: string;
  slug: string;
}

export declare const vuesaxAlphaTheme: ({
  themePlugins,
  ...localeOptions
}?: VuesaxAlphaThemeOptions) => Theme;
