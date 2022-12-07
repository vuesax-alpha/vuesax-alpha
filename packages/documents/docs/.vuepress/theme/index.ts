import { resolveAppPages } from 'vuepress-vite';
import { path } from "@vuepress/utils";
import type { App, Theme } from "@vuepress/core";

import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { themeDataPlugin } from "@vuepress/plugin-theme-data";
import containerPlugin from "@vuepress/plugin-container";

import { VuesaxAlphaThemeOptions } from "./vuesaxAlphaTheme";

export const vuesaxAlphaTheme = (options?: VuesaxAlphaThemeOptions): Theme => {
  return (app: App) => {
    return {
      name: "vuepress-theme-vuesax-alpha",
      clientConfigFile: path.resolve(
        __dirname,
        "themeEnhance.ts"
      ),
      plugins: [
        activeHeaderLinksPlugin(),
        containerPlugin({
          type: "tip",
          before: (): string =>
            `<div class="custom-container tip">${""}\n`,
          after: (): string => "</div>\n",
        }),
        containerPlugin({
          type: "warning",
          before: (): string =>
            `<div class="custom-container tip">${""}\n`,
          after: (): string => "</div>\n",
        }),
        containerPlugin({
          type: "danger",
          before: (): string =>
            `<div class="custom-container tip">${""}\n`,
          after: (): string => "</div>\n",
        }),
        themeDataPlugin({
          themeData: Object.assign({}, options, app),
        }),
        registerComponentsPlugin({
          componentsDir: path.resolve(__dirname, "global-components"),
        }),
      ],
    };
  }
};
