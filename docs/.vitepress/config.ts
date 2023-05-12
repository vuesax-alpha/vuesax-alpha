import consola from 'consola'
import { REPO_BRANCH, REPO_PATH } from '@vuesax-alpha/build-constants'
import { docsDirName } from '@vuesax-alpha/build-utils'

// import { head } from './app'

import type { UserConfig } from 'vitepress'

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    }
  }

  const transformers = {}
  const directives: string[] = [
    // 'infinite-scroll',
    // 'loading',
    // 'popover',
    // 'click-outside',
    // 'repeat-click',
    // 'trap-focus',
    // 'mousewheel',
    // 'resize',
  ]
  directives.forEach((k) => {
    transformers[k] = transformer
  })

  return transformers
}

consola.debug(`DOC_ENV: ${process.env.DOC_ENV}`)

export const config: UserConfig = {
  title: 'Vuesax Alpha',
  description: 'Vuejs framework components for Vue 3',
  lastUpdated: true,
  // head,
  themeConfig: {
    i18nRouting: false,
    repo: REPO_PATH,
    docsBranch: REPO_BRANCH,
    docsDir: docsDirName,

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    logo: '/images/vuesax-alpha-logo.svg',
    logoSmall: '/images/vuesax-alpha-logo-small.svg',
    // sidebars,
    // nav,
  },

  markdown: {
    // config: (md) => mdPlugin(md),
  },

  vue: {
    template: {
      compilerOptions: {
        ssr: true,
        directiveTransforms: buildTransformers(),
      },
    },
  },
}

export default config
