import { withInstall } from '@vuesax-alpha/utils'
import Popper from './src/popper.vue'

export const VsPopper = withInstall(Popper)
export default VsPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'

export type {
  Placement as PopperPlacement,
  Options as PopperOptions,
} from '@vuesax-alpha/hooks/use-floating'
