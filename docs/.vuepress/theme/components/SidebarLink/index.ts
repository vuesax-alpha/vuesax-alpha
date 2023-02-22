import CRenderLink from './RenderLink.vue'
import CRenderHeaders from './RenderHeaders.vue'

export type RenderLink = InstanceType<typeof CRenderLink>
export type RenderHeaders = InstanceType<typeof CRenderHeaders>

export default { RenderLink: CRenderLink, RenderHeaders: CRenderHeaders }
