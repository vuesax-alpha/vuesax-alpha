// import { defaultTheme } from "vuepress-vite";
import { getDirname, path } from "@vuepress/utils";
import type { Theme } from "@vuepress/core";

import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { themeDataPlugin } from "@vuepress/plugin-theme-data";
import containerPlugin from "@vuepress/plugin-container";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

import { VuesaxAlphaThemeOptions } from "./vuesaxAlphaTheme";
import { defaultTheme } from "vuepress-vite";

// const __dirname = getDirname(import.meta.url);

export const vuesaxAlphaTheme = (options?: VuesaxAlphaThemeOptions): Theme => {
  return {
    name: "vuepress-theme-vuesax-alpha",
    extends: defaultTheme(options),
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
        themeData: options
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, "global-components"),
      }),
      docsearchPlugin({
        appId: "R2IYF7ETH7",
        apiKey: "599cec31baffa4868cae4e79f180729b",
        indexName: 'docsearch',
        locales: {
          '/': {
            placeholder: 'Vuesax search',
            translations: {
              button: {
                buttonText: "Vuesax search"
              }
            }
          }
        }
      })
    ],
  };
};
