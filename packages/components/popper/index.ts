import { withInstall } from '@vuesax-alpha/utils'
import Popper from './src/popper.vue'

import VsPopperArrow from './src/arrow.vue'
import VsPopperTrigger from './src/trigger.vue'
import VsPopperContent from './src/content.vue'

export { VsPopperArrow, VsPopperTrigger, VsPopperContent }

export const VsPopper = withInstall(Popper)
export default VsPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
export * from './src/arrow'

export type { Placement as PopperPlacement, Options } from '@popperjs/core'
