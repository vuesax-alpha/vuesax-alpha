import { provide, reactive } from 'vue'
import { defineClientConfig } from '@vuepress/client'

import { codesandboxContextKey, vsThemeKey } from './type'

import Layout from './layouts/layout.vue'
import NotFound from './layouts/not-found.vue'
import type { codesandboxContext, vsThemeContext } from './type'
// import Sidebar from "./layouts/Sidebar.vue";

import './styles/vuesax-alpha'

export default defineClientConfig({
  setup() {
    const $vsTheme = reactive<vsThemeContext>({
      mobileActive: false,
      openCode: false,
      themeDarken: false,
      sidebarCollapseOpen: true,
    })
    const $codesandbox = reactive<codesandboxContext>({
      url: undefined,
    })
    provide(vsThemeKey, $vsTheme)
    provide(codesandboxContextKey, $codesandbox)
  },
  rootComponents: [],
  layouts: {
    Layout,
    NotFound,
  },
})
