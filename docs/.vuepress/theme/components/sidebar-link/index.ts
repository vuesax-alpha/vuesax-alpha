import CRenderLink from './render-link.vue'
import CRenderHeaders from './render-headers.vue'

export type RenderLink = InstanceType<typeof CRenderLink>
export type RenderHeaders = InstanceType<typeof CRenderHeaders>

export default { RenderLink: CRenderLink, RenderHeaders: CRenderHeaders }
