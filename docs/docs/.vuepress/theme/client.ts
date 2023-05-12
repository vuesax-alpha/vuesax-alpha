import { defineClientConfig } from "@vuepress/client";
import { provide, reactive } from "vue";

import {
  codesandboxContext,
  codesandboxContextKey,
  vsThemeContext,
  vsThemeKey,
} from "./type";

import Layout from "./layouts/Layout.vue";
import NotFound from "./layouts/NotFound.vue";
// import Sidebar from "./layouts/Sidebar.vue";

import "./styles/vuesax-alpha";

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {
    const $vsTheme = reactive<vsThemeContext>({
      mobileActive: false,
      openCode: false,
      themeDarken: false,
      sidebarCollapseOpen: true,
    });
    const $codesandbox = reactive<codesandboxContext>({
      url: undefined,
    });
    provide(vsThemeKey, $vsTheme);
    provide(codesandboxContextKey, $codesandbox);
  },
  rootComponents: [],
  layouts: {
    Layout,
    NotFound
  }
});
