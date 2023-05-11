import type { Sidebar } from "../types";

export const sidebars: Sidebar = [
  {
    text: 'Guide',
    items: [
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
    items: [
      {
        text: 'Colors',
        link: '/theme/',
      },
    ],
  },
  {
    text: 'Components',
    items: [
      { text: `Button`, link: `/components/` },
      { text: `Alert`, link: `/components/alert` },
      { text: `Loading`, link: `/components/loading` },
      { text: `Input`, link: `/components/input` },
      { text: `Checkbox`, link: `/components/checkbox` },
      { text: `Switch`, link: `/components/switch` },
      { text: `Select`, link: `/components/select` },
      { text: `Avatar`, link: `/components/avatar` },
      { text: `Notification`, link: `/components/notification` },
      { text: `Radio`, link: `/components/radio` },
      { text: `Tooltip`, link: `/components/tooltip` },
      { text: `Dialog`, link: `/components/dialog` },
      { text: `Pagination`, link: `/components/pagination` },
      { text: `Table`, link: `/components/table` },
      { text: `Navbar`, link: `/components/navbar` },
      { text: `Sidebar`, link: `/components/sidebar` },
      { text: `Card`, link: `/components/card` },
      // new component slot 2
    ],
  },
  {
    text: 'Layout',
    collapsed: false,
    items: [
      {
        text: 'Grid',
        link: '/layout/',
      },
    ],
  },
]
