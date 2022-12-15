import { path } from "@vuepress/utils";
import type { Theme } from "@vuepress/core";

import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { themeDataPlugin } from "@vuepress/plugin-theme-data";
import {containerPlugin} from "@vuepress/plugin-container";
import { gitPlugin } from '@vuepress/plugin-git'

import { VuesaxAlphaThemeOptions } from "./vuesaxAlphaTheme";

export const vuesaxAlphaTheme = (options?: VuesaxAlphaThemeOptions): Theme => {
  return {
    name: "vuepress-theme-vuesax-alpha",
    clientConfigFile: path.resolve(
      __dirname,
      "client.ts"
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
        themeData: options,
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, "global-components"),
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, "../components")
      }),
      gitPlugin({
        updatedTime: true
      })
    ],
  };
};
