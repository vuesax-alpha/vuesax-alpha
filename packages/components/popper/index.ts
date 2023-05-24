import { withInstall } from '@vuesax-alpha/utils'
import Popper from './src/popper.vue'

import VsPopperArrow from './src/arrow.vue'

export { VsPopperArrow }

export const VsPopper = withInstall(Popper)
export default VsPopper

export * from './src/popper'
export * from './src/arrow'
export * from './src/trigger'
export * from './src/content'

export type {
  Placement as PopperPlacement,
  Options as PopperOptions,
} from '@vuesax-alpha/hooks/use-floating'
