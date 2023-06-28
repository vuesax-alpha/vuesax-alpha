import { loading } from './src/method'
import { vLoading } from './src/directive'

import type { App } from 'vue'

export const VsLoading = {
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = loading
  },
  directive: vLoading,
  service: loading,
}

export default VsLoading
export { vLoading, vLoading as VsLoadingDirective, loading as VsLoadingFn }

export * from './src/loading'
