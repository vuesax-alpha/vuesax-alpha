import { defineUserConfig } from 'vuepress'
import { enNavbar, enSearchData, enSidebar } from './app'
import { vuesaxAlphaTheme } from './theme/index'
import type { UserConfig } from 'vuepress'

export default defineUserConfig({
  open: true,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuejs framework components for Vue 3',
    },
  },
  lang: 'en-US',
  title: '',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/logos/logo-vuesax-logotipo-vuesax-png-8.png`,
        media: '(prefers-color-scheme:dark)',
        type: 'image/png',
      },
    ],
    [
      'link',
      {
        href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
        rel: 'stylesheet',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        href: `/logos/logo-vuesax-logotipo-vuesax-png-7.png`,
        media: '(prefers-color-scheme:light)',
        type: 'image/png',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no',
      },
    ],
    ['meta', { name: 'author', content: 'Lusaxweb' }],
    ['meta', { name: 'google', content: 'nositelinkssearchbox' }],
    [
      'meta',
      {
        hid: 'description',
        name: 'description',
        content: 'Vuesax Framework Components for Vuejs',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://vuesax.com/vuesax_components.png',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Vuesax Framework Components for Vuejs',
      },
    ],
    ['meta', { property: 'og:title', content: 'Vuesax - Framework for Vuejs' }],
    ['meta', { property: 'og:url', content: 'https://vuesax.com/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  theme: vuesaxAlphaTheme({
    linkSite: 'https://vuesax-alpha.vercel.app/',
    repo: 'vuesax-alpha/vuesax-alpha',
    docsBranch: 'master',
    docsDir: 'docs',
    docsRepo: 'https://github.com/vuesax-alpha/vuesax-alpha/',
    editLink: true,
    editLinkPattern: 'https://github.com/vuesax-alpha/vuesax-alpha/',
    logo: '/logos/logo-vuesax-svg-3.svg',
    logoDark: '/logos/logo-vuesax-svg-4.svg',
    prevVersion: 'v4.x',
    linkPrevVersion: 'https://vuesax.com/',
    searchPlaceholder: 'Vuesax Search',
    locales: {
      '/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        navbar: enNavbar,
        sidebar: enSidebar,
      },
    },
    search: true,
    searchMaxSuggestions: 5,
    searchData: {
      '/': enSearchData,
    },
    lastUpdated: true,
    contributors: true,
    lastUpdatedText: 'Last Updated',
  }),
  markdown: {
    html: true,
    code: {
      lineNumbers: false,
    },
    typographer: true,
  },
}) as UserConfig
