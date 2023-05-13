import RenderLinkComp from './RenderLink.vue'
import RenderHeadersComp from './RenderHeaders.vue'

export type RenderLink = InstanceType<typeof RenderLinkComp>
export type RenderHeaders = InstanceType<typeof RenderHeadersComp>

export default { RenderLink: RenderLinkComp, RenderHeaders: RenderHeadersComp }
