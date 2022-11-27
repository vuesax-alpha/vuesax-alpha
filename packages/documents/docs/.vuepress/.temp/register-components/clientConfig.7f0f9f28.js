import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Badge", defineAsyncComponent(() => import("E:/Workspace/Web/Projects/vuesax-alpha/packages/documents/docs/.vuepress/theme/global-components/Badge.vue"))),
      app.component("Card", defineAsyncComponent(() => import("E:/Workspace/Web/Projects/vuesax-alpha/packages/documents/docs/.vuepress/theme/global-components/Card.vue"))),
      app.component("Codex", defineAsyncComponent(() => import("E:/Workspace/Web/Projects/vuesax-alpha/packages/documents/docs/.vuepress/theme/global-components/Codex.vue"))),
      app.component("Color", defineAsyncComponent(() => import("E:/Workspace/Web/Projects/vuesax-alpha/packages/documents/docs/.vuepress/theme/global-components/Color.vue"))),
      app.component("Coloren", defineAsyncComponent(() => import("E:/Workspace/Web/Projects/vuesax-alpha/packages/documents/docs/.vuepress/theme/global-components/Coloren.vue"))),
      app.component("DocsWarn", defineAsyncComponent(() => import("E:/Workspace/Web/Projects/vuesax-alpha/packages/documents/docs/.vuepress/theme/global-components/DocsWarn.vue"))),
      app.component("Icons", defineAsyncComponent(() => import("E:/Workspace/Web/Projects/vuesax-alpha/packages/documents/docs/.vuepress/theme/global-components/Icons.vue")))
  },
}
