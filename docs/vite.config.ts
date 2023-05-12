import path from 'path'
import Inspect from 'vite-plugin-inspect'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import mkcert from 'vite-plugin-mkcert'
import glob from 'fast-glob'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import {
  docPackage,
  getPackageDependencies,
  projRoot,
  vsPackage,
} from '@vuesax-alpha/build-utils'

import type { Alias } from 'vite'

const alias: Alias[] = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, './.vuepress/vuepress')}/`,
  },
]
if (process.env.DOC_ENV !== 'production') {
  alias.push(
    {
      find: /^vuesax-alpha(\/(es|lib))?$/,
      replacement: path.resolve(projRoot, 'packages/vuesax-alpha/index.ts'),
    },
    {
      find: /^vuesax-alpha\/(es|lib)\/(.*)$/,
      replacement: `${path.resolve(projRoot, 'packages')}/$2`,
    }
  )
}

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const { dependencies: vsDeps } = getPackageDependencies(vsPackage)
  const { dependencies: docsDeps } = getPackageDependencies(docPackage)

  const optimizeDeps = [...new Set([...vsDeps, ...docsDeps])].filter(
    (dep) =>
      !dep.startsWith('@types/') &&
      !['@vuesax-alpha/metadata', 'vuesax-alpha'].includes(dep)
  )

  optimizeDeps.push(
    ...(await glob(['dayjs/plugin/*.js'], {
      cwd: path.resolve(projRoot, 'node_modules'),
      onlyFiles: true,
    }))
  )

  return {
    esbuild: {
      minify: true,
    },
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: [projRoot],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      Vue(),
      vueJsx(),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: ['.vuepress/theme/components'],

        allowOverrides: true,

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      UnoCSS(),
      Inspect(),
      mkcert(),
    ],
    optimizeDeps: {
      include: optimizeDeps,
    },
  }
})
