import { defineClientConfig } from '@vuepress/client'

import Vuesax from 'vuesax-alpha'
// style
import 'vuesax-alpha/dist/index.css'
// vuesax darkmode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(() => ({ install: Vuesax.install }))
  },
  rootComponents: [],
})
