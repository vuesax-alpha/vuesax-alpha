import { defineClientConfig } from '@vuepress/client'

import Vuesax from 'vuesax-alpha'
import 'vuesax-alpha/theme-chalk/index.css'
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

import * as VuesaxIconsVue from '@vuesax-alpha/icons-vue'

export default defineClientConfig({
  enhance({ app }) {
    app.use(Vuesax)

    for (const [key, component] of Object.entries(VuesaxIconsVue)) {
      app.component(`VsIcon${key}`, component)
    }
  },
  rootComponents: [],
})
