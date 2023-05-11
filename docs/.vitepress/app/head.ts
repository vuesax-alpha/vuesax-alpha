import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
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
]
