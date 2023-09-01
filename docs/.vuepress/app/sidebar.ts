import type { SidebarConfig } from '~/shared/client/nav'

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
    ],
  },
  {
    text: 'Basic',
    children: [
      {
        text: 'Colors',
        link: '/theme/',
      },
      {
        text: 'Icons',
        link: '/icons/',
      },
    ],
  },
  {
    text: 'Components',
    children: [
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
      { text: `Time select`, link: `/components/time-select` },
      { text: `Scrollbar`, link: `/components/scrollbar` },
      { text: `Rate`, link: `/components/rate` },
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
