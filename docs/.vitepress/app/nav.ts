import type { NavItem } from '../types'

export const nav: NavItem[] = [
  {
    text: 'Guide',
    link: `/guide/`,
    items: [
      {
        text: `Introduction`,
        link: `/guide/`,
        activeMatch: '/guide/',
      },
      {
        text: `Getting Started`,
        link: `/guide/gettingStarted`,
        activeMatch: '/guide/',
      },
      // { text: `Vuesax + Nuxtjs`, link: `/guide/nuxt` },
    ],
  },
  {
    text: `Documentation`,
    link: `/`,
    items: [
      {
        text: `Theme`,
        items: [
          {
            text: `Color`,
            link: `/theme/`,
            activeMatch: '/theme/',
          },
        ],
      },
      {
        text: `Layout`,
        items: [
          {
            text: `Grid`,
            link: `/layout/`,
            activeMatch: '/layout/',
          },
        ],
      },
      {
        text: `Components`,
        items: [
          {
            text: `Button`,
            link: `/components/`,
            activeMatch: '/components/',
          },
          {
            text: `Alert`,
            link: `/components/Alert`,
            activeMatch: '/components/',
          },
          {
            text: `Loading`,
            link: `/components/Loading`,
            activeMatch: '/components/',
          },
          {
            text: `Input`,
            link: `/components/Input`,
            activeMatch: '/components/',
          },
          {
            text: 'Checkbox',
            link: `/components/Checkbox`,
            activeMatch: '/components/',
          },
          {
            text: 'Switch',
            link: `/components/Switch`,
            activeMatch: '/components/',
          },
          {
            text: 'Select',
            link: `/components/Select`,
            activeMatch: '/components/',
          },
          {
            text: 'Avatar',
            link: `/components/Avatar`,
            activeMatch: '/components/',
          },
          {
            text: 'Notification',
            link: `/components/Notification`,
            activeMatch: '/components/',
          },
          {
            text: 'Radio',
            link: `/components/Radio`,
            activeMatch: '/components/',
          },
          {
            text: 'Tooltip',
            link: `/components/Tooltip`,
            activeMatch: '/components/',
          },
          {
            text: 'Dialog',
            link: `/components/Dialog`,
            activeMatch: '/components/',
          },
          {
            text: 'Pagination',
            link: `/components/Pagination`,
            activeMatch: '/components/',
          },
          {
            text: 'Table',
            link: `/components/Table`,
            activeMatch: '/components/',
          },
          {
            text: 'Navbar',
            link: `/components/Navbar`,
            activeMatch: '/components/',
          },
          {
            text: 'Sidebar',
            link: `/components/Sidebar`,
            activeMatch: '/components/',
          },
          {
            text: 'Card',
            link: `/components/Card`,
            activeMatch: '/components/',
          },
          // new component slot 1
        ],
      },
    ],
  },
  {
    text: `License`,
    link: `/license/`,
    activeMatch: '/license/',
  },
  {
    text: `Ecosystem`,
    // link: `/ecosystem/`,
    items: [
      {
        text: `Github`,
        items: [
          {
            text: `Vuesax`,
            link: `https://github.com/lusaxweb/vuesax`,
            target: '_blank',
          },
          {
            text: `Vueax Alpha`,
            link: `https://github.com/tranthinh-coding/vuesax-alpha`,
            target: '_blank',
          },
        ],
      },
      {
        text: `Help`,
        items: [
          {
            text: `Issues`,
            link: `https://github.com/tranthinh-coding/vuesax-alpha/issues`,
            target: '_blank',
          },
          {
            text: `Edit Page`,
            link: `https://github.com/tranthinh-coding/vuesax-alpha`,
            target: '_blank',
          },
          {
            text: `Latest Releases`,
            link: `https://github.com/tranthinh-coding/vuesax-alpha/releases`,
            target: '_blank',
          },
        ],
      },
      {
        text: `Contact`,
        items: [
          // {
          //   text: `Facebook`,
          //   link: `https://www.facebook.com/thinh.onichan/`,
          //   target: '_blank',
          // },
          {
            text: `Pull Request`,
            link: `https://github.com/tranthinh-coding/vuesax-alpha/pulls`,
            target: '_blank',
          },
        ],
      },
    ],
  },
  {
    text: '...',
    items: [{ text: `Branding`, link: `/branding/` }],
  },
]
