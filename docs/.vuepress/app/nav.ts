import type { NavbarConfig } from '~/shared/client/nav'

export const enNavbar: NavbarConfig = [
  {
    text: 'Guide',
    link: `/guide/`,
    children: [
      { text: `Introduction`, link: `/guide/` },
      { text: `Getting Started`, link: `/guide/getting-started` },
      // { text: `Vuesax + Nuxtjs`, link: `/guide/nuxt` },
    ],
  },
  {
    text: `Documentation`,
    link: `/`,
    children: [
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
        text: `Layout`,
        children: [
          {
            text: `Grid`,
            link: `/layout/`,
          },
        ],
      },
      {
        text: `Components`,
        children: [
          { text: `Button`, link: `/components/` },
          { text: `Alert`, link: `/components/alert` },
          { text: `Loading`, link: `/components/loading` },
          { text: `Input`, link: `/components/input` },
          { text: 'Checkbox', link: `/components/checkbox` },
          { text: 'Switch', link: `/components/switch` },
          { text: 'Select', link: `/components/select` },
          { text: 'Avatar', link: `/components/avatar` },
          {
            text: 'Notification',
            link: `/components/notification`,
          },
          { text: 'Radio', link: `/components/radio` },
          { text: 'Tooltip', link: `/components/tooltip` },
          { text: 'Dialog', link: `/components/dialog` },
          { text: 'Pagination', link: `/components/pagination` },
          { text: 'Table', link: `/components/table` },
          { text: 'Navbar', link: `/components/navbar` },
          { text: 'Sidebar', link: `/components/sidebar` },
          { text: 'Card', link: `/components/card` },
          { text: 'Time select', link: `/components/time-select` },
          { text: `Scrollbar`, link: `/components/scrollbar` },
          { text: `Rate`, link: `/components/rate` },
          // new component slot 1
        ],
      },
    ],
  },
  // {
  //   text: `License`,
  //   link: `/license/`,
  // },
  {
    text: `Ecosystem`,
    // link: `/ecosystem/`,
    children: [
      {
        text: `Github`,
        children: [
          {
            text: `Vuesax`,
            link: `https://github.com/lusaxweb/vuesax`,
          },
          {
            text: `Vueax Alpha`,
            link: `https://github.com/vuesax-alpha/vuesax-alpha`,
          },
        ],
      },
      {
        text: `Help`,
        children: [
          {
            text: `Issues`,
            link: `https://github.com/vuesax-alpha/vuesax-alpha/issues`,
          },
          {
            text: `Edit Page`,
            link: `https://github.com/vuesax-alpha/vuesax-alpha`,
          },
          {
            text: `Latest Releases`,
            link: `https://github.com/vuesax-alpha/vuesax-alpha/releases`,
          },
        ],
      },
      {
        text: `Contact`,
        children: [
          // {
          //   text: `Facebook`,
          //   link: `https://www.facebook.com/thinh.onichan/`,
          // },
          {
            text: `Pull Request`,
            link: `https://github.com/vuesax-alpha/vuesax-alpha/pulls`,
          },
        ],
      },
    ],
  },
  // {
  //   text: "...",
  //   children: [{ text: `Branding`, link: `/branding/` }],
  // },
]
