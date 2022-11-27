import { defineUserConfig } from "vuepress";
import { enNavbar, enSidebar } from "./locale";
import { vuesaxAlphaTheme } from "./theme/index";

export default defineUserConfig({
  locales: {
    "/": {
      lang: "en-US",
      title: "English",
    },
  },
  lang: "en-US",
  title: "",
  base: "/",
  head: [
    // ['link', { rel: 'icon', href: `/logos/logo-vuesax-svg-7.svg`, color: '#2c3e50' }],
    [
      "link",
      {
        rel: "icon",
        href: `/logos/logo-vuesax-logotipo-vuesax-png-8.png`,
        media: "(prefers-color-scheme:dark)",
        type: "image/png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: `/logos/logo-vuesax-logotipo-vuesax-png-7.png`,
        media: "(prefers-color-scheme:light)",
        type: "image/png",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no",
      },
    ],
    ["meta", { name: "author", content: "Lusaxweb" }],
    ["meta", { name: "google", content: "nositelinkssearchbox" }],
    [
      "meta",
      {
        hid: "description",
        name: "description",
        content: "Vuesax Framework Components for Vuejs",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://vuesax.com/vuesax_components.png",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "Vuesax Framework Components for Vuejs",
      },
    ],
    ["meta", { property: "og:title", content: "Vuesax - Framework for Vuejs" }],
    ["meta", { property: "og:url", content: "https://vuesax.com/" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ],
  theme: vuesaxAlphaTheme({
    repo: "tranthinh-coding/vuesax-alpha",
    docsBranch: "main",
    docsDir: "packages/documents",
    docsRepo: "https://github.com/tranthinh-coding/vuesax-alpha/tree/main/packages/documents/",
    editLink: true,
    editLinkPattern:
      "https://github.com/tranthinh-coding/vuesax-alpha/tree/main/packages/documents/",
    lastUpdated: true,
    logo: "/logos/logo-vuesax-svg-3.svg",
    logoDark: "/logos/logo-vuesax-svg-4.svg",
    linkPrevVersion: "https://lusaxweb.github.io/vuesax/",
    searchPlaceholder: "Vuesax Search",
    locales: {
      "/": {
        selectLanguageText: 'Languages',
        selectLanguageName: "English",
        navbar: enNavbar,
        sidebar: enSidebar,
      },
    },
    searchMaxSuggestions: 5,
    lastUpdatedText: 'Last Updated',
  }),
  markdown: {
    html: true,
    code: {
      lineNumbers: false,
    },
    typographer: true,
  },
  
});
