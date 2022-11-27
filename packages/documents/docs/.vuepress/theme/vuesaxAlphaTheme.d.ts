import { DefaultThemeOptions } from "vuepress";
import type { Theme } from "@vuepress/core";

export declare interface VuesaxAlphaThemeOptions extends DefaultThemeOptions {
  /**
   * Prev Version: Vuesax-next
   */
  linkPrevVersion?: string;
  searchPlaceholder?: string;
  search?: boolean;
  next?: string;
  prev?: string;
  searchMaxSuggestions?: number;
}

export declare const vuesaxAlphaTheme: ({
  themePlugins,
  ...localeOptions
}?: VuesaxAlphaThemeOptions) => Theme;
