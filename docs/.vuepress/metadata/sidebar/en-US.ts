import type { SidebarConfig } from 'vuepress-vite'

export const enSidebar: SidebarConfig = [
  {
    text: 'Guide',
    children: [
      {
        text: 'Introduction',
        link: '/guide/',
      },
      {
        text: 'Getting Started',
        link: '/guide/getting-started/',
      },
      // {
      //   text: "Vuesax + Nuxt",
      //   link: "/guide/nuxt/",
      // },
    ],
  },
  {
    text: 'Theme',
    children: [
      {
        text: 'Colors',
        link: '/theme/',
      },
    ],
  },
  {
    text: 'Components',
    children: [
      { text: `Button`, link: `/components/` },
      { text: `Alert`, link: `/components/Alert` },
      { text: `Loading`, link: `/components/Loading` },
      { text: `Input`, link: `/components/Input` },
      { text: `Checkbox`, link: `/components/Checkbox` },
      { text: `Switch`, link: `/components/Switch` },
      { text: `Select`, link: `/components/Select` },
      { text: `Avatar`, link: `/components/Avatar` },
      { text: `Notification`, link: `/components/Notification` },
      { text: `Radio`, link: `/components/Radio` },
      { text: `Tooltip`, link: `/components/Tooltip` },
      { text: `Dialog`, link: `/components/Dialog` },
      { text: `Pagination`, link: `/components/Pagination` },
      { text: `Table`, link: `/components/Table` },
      { text: `Navbar`, link: `/components/Navbar` },
      { text: `Sidebar`, link: `/components/Sidebar` },
      { text: `Card`, link: `/components/Card` },
      // new component slot 2
    ],
  },
  {
    text: 'Layout',
    collapsible: false,
    children: [
      {
        text: 'Grid',
        link: '/layout/',
      },
    ],
  },
]
