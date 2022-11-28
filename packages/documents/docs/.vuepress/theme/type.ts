import { InjectionKey, Ref } from "vue";
import { SiteData } from "@vuepress/shared"

export interface vsThemeContext {
  mobileActive: boolean;
  openCode: boolean;
  themeDarken: boolean;
  sidebarCollapseOpen: boolean;
}

export const vsThemeKey: InjectionKey<vsThemeContext> = Symbol("$vsTheme");

export const siteDataKey: InjectionKey<Ref<SiteData>> = Symbol('$siteData');

export interface codesandboxContext {
  url?: string;
}

export const codesandboxContextKey: InjectionKey<codesandboxContext> =
  Symbol("$codesandbox");

export type activeSlotType = 0 | 1 | 2 | 3;
export const activeSlotText = ["template", "script", "stype", "all"];


