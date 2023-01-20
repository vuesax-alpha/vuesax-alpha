import InfiniteScroll from './src'

import type { App } from 'vue'
import type { SFCWithInstall } from '@vuesax-alpha/utils'

const _InfiniteScroll = InfiniteScroll as SFCWithInstall<typeof InfiniteScroll>

_InfiniteScroll.install = (app: App) => {
  app.directive('InfiniteScroll', _InfiniteScroll)
}

export default _InfiniteScroll
export const VsInfiniteScroll = _InfiniteScroll
