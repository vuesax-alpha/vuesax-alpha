import { NavbarConfig, SidebarConfig } from "vuepress-vite";
import { SearchDataOption } from "./theme/vuesaxAlphaTheme";

export const enNavbar: NavbarConfig = [
  {
    text: "Guide",
    link: `/docs/guide/`,
    children: [
      { text: `Introduction`, link: `/docs/guide/` },
      { text: `Getting Started`, link: `/docs/guide/gettingStarted` },
      { text: `Vuesax + Nuxtjs`, link: `/docs/guide/nuxt` },
    ],
  },
  {
    text: `Documentation`,
    link: `/docs/`,
    children: [
      {
        text: `Theme`,
        children: [{ text: `Color`, link: `/docs/theme/` }],
      },
      {
        text: `Layout`,
        children: [
          {
            text: `Grid`,
            link: `/docs/layout/`,
          },
        ],
      },
      {
        text: `Components`,
        children: [
          { text: `Button`, link: `/docs/components/` },
          { text: `Alert`, link: `/docs/components/Alert` },
          { text: `Loading`, link: `/docs/components/Loading` },
          { text: `Input`, link: `/docs/components/Input` },
          { text: "Checkbox", link: `/docs/components/Checkbox` },
          { text: "Switch", link: `/docs/components/Switch` },
          { text: "Select", link: `/docs/components/Select` },
          { text: "Avatar", link: `/docs/components/Avatar` },
          {
            text: "Notification",
            link: `/docs/components/Notification`,
          },
          { text: "Radio", link: `/docs/components/Radio` },
          { text: "Tooltip", link: `/docs/components/Tooltip` },
          { text: "Dialog", link: `/docs/components/Dialog` },
          { text: "Pagination", link: `/docs/components/Pagination` },
          { text: "Table", link: `/docs/components/Table` },
          { text: "Navbar", link: `/docs/components/Navbar` },
          { text: "Sidebar", link: `/docs/components/Sidebar` },
          { text: "Card", link: `/docs/components/Card` },
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
        link: "/docs/guide/",
      },
      {
        text: "Getting Started",
        link: "/docs/guide/gettingStarted/",
      },
      {
        text: "Vuesax-alpha + Nuxt",
        link: "/docs/guide/nuxt/",
      },
    ],
  },
  {
    text: "Theme",
    children: [
      {
        text: "Colors",
        link: "/docs/theme/",
      },
    ],
  },
  {
    text: "Components",
    children: [
      { text: `Button`, link: `/docs/components/` },
      { text: `Alert`, link: `/docs/components/Alert` },
      { text: `Loading`, link: `/docs/components/Loading` },
      { text: `Input`, link: `/docs/components/Input` },
      { text: `Checkbox`, link: `/docs/components/Checkbox` },
      { text: `Switch`, link: `/docs/components/Switch` },
      { text: `Select`, link: `/docs/components/Select` },
      { text: `Avatar`, link: `/docs/components/Avatar` },
      { text: `Notification`, link: `/docs/components/Notification` },
      { text: `Radio`, link: `/docs/components/Radio` },
      { text: `Tooltip`, link: `/docs/components/Tooltip` },
      { text: `Dialog`, link: `/docs/components/Dialog` },
      { text: `Pagination`, link: `/docs/components/Pagination` },
      { text: `Table`, link: `/docs/components/Table` },
      { text: `Navbar`, link: `/docs/components/Navbar` },
      { text: `Sidebar`, link: `/docs/components/Sidebar` },
      { text: `Card`, link: `/docs/components/Card` },
      // new component slot 2
    ],
  },
  {
    text: "Layout",
    collapsible: false,
    children: [
      {
        text: "Grid",
        link: "/docs/layout/",
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
