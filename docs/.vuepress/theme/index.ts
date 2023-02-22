import { path } from '@vuepress/utils'

import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import { containerPlugin } from '@vuepress/plugin-container'
import { gitPlugin } from '@vuepress/plugin-git'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

import type { VuesaxAlphaThemeOptions } from './vuesaxAlphaTheme'
import type { Theme } from '@vuepress/core'

export const vuesaxAlphaTheme = (
  options: VuesaxAlphaThemeOptions = {}
): Theme => {
  return {
    name: 'vuepress-theme-vuesax-alpha',
    clientConfigFile: path.resolve(__dirname, 'client.ts'),
    plugins: [
      activeHeaderLinksPlugin(),
      containerPlugin({
        type: 'tip',
        before: (info: string): string =>
          `<div class="custom-container tip">${info}\n`,
        after: (): string => '</div>\n',
      }),
      containerPlugin({
        type: 'warning',
        before: (info: string): string =>
          `<div class="custom-container warning">${info}\n`,
        after: (): string => '</div>\n',
      }),
      containerPlugin({
        type: 'danger',
        before: (info: string): string =>
          `<div class="custom-container danger">${info}\n`,
        after: (): string => '</div>\n',
      }),
      themeDataPlugin({
        themeData: options,
      }),
      prismjsPlugin(),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, 'global-components'),
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, '../components'),
      }),
      gitPlugin({
        updatedTime: true,
        createdTime: true,
        contributors: true,
      }),
    ],
  }
}
