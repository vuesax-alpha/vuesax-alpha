import { NavbarConfig, SidebarConfig } from "vuepress-vite";
import { SearchDataOption } from "./theme/vuesaxAlphaTheme";

export const enNavbar: NavbarConfig = [
  {
    text: "Guide",
    link: `/guide/`,
    children: [
      { text: `Introduction`, link: `/guide/` },
      { text: `Getting Started`, link: `/guide/gettingStarted` },
      // { text: `Vuesax + Nuxtjs`, link: `/guide/nuxt` },
    ],
  },
  {
    text: `Documentation`,
    link: `/`,
    children: [
      {
        text: `Theme`,
        children: [{ text: `Color`, link: `/theme/` }],
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
          { text: `Alert`, link: `/components/Alert` },
          { text: `Loading`, link: `/components/Loading` },
          { text: `Input`, link: `/components/Input` },
          { text: "Checkbox", link: `/components/Checkbox` },
          { text: "Switch", link: `/components/Switch` },
          { text: "Select", link: `/components/Select` },
          { text: "Avatar", link: `/components/Avatar` },
          {
            text: "Notification",
            link: `/components/Notification`,
          },
          { text: "Radio", link: `/components/Radio` },
          { text: "Tooltip", link: `/components/Tooltip` },
          { text: "Dialog", link: `/components/Dialog` },
          { text: "Pagination", link: `/components/Pagination` },
          { text: "Table", link: `/components/Table` },
          { text: "Navbar", link: `/components/Navbar` },
          { text: "Sidebar", link: `/components/Sidebar` },
          { text: "Card", link: `/components/Card` },
          // new component slot 1
        ],
      },
    ],
  },
  {
    text: `License`,
    link: `/license/`,
  },
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
            link: `https://github.com/tranthinh-coding/vuesax-alpha`,
          },
        ],
      },
      {
        text: `Help`,
        children: [
          {
            text: `Issues`,
            link: `https://github.com/tranthinh-coding/vuesax-alpha/issues`,
          },
          {
            text: `Edit Page`,
            link: `https://github.com/tranthinh-coding/vuesax-alpha`,
          },
          {
            text: `Latest Releases`,
            link: `https://github.com/tranthinh-coding/vuesax-alpha/releases`,
          },
        ],
      },
      {
        text: `Contact`,
        children: [
          {
            text: `Facebook`,
            link: `https://www.facebook.com/thinh.onichan/`,
          },
          {
            text: `Pull Request`,
            link: `https://github.com/tranthinh-coding/vuesax-alpha/pulls`,
          },
        ],
      },
    ],
  },
  {
    text: "...",
    children: [{ text: `Branding`, link: `/branding/` }],
  },
];

export const enSidebar: SidebarConfig = [
  {
    text: "Guide",
    children: [
      {
        text: "Introduction",
        link: "/guide/",
      },
      {
        text: "Getting Started",
        link: "/guide/gettingStarted/",
      },
      // {
      //   text: "Vuesax + Nuxt",
      //   link: "/guide/nuxt/",
      // },
    ],
  },
  {
    text: "Theme",
    children: [
      {
        text: "Colors",
        link: "/theme/",
      },
    ],
  },
  {
    text: "Components",
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
    text: "Layout",
    collapsible: false,
    children: [
      {
        text: "Grid",
        link: "/layout/",
      },
    ],
  },
];

export const enSearchData: SearchDataOption[] = [
  {
    title: "Alert",
    path: "docs/components/alert",
    headers: [
      {
        title: "Default",
        slug: "default",
      },
    ],
  },
  
];
