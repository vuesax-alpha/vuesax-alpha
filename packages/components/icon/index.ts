import { withInstall } from '@vuesax-alpha/utils'

import Icon from './src/icon.vue'
import Arrow from './src/arrow.vue'
import Check from './src/check.vue'
import Close from './src/close.vue'
import Loading from './src/loading.vue'
import Plus from './src/plus.vue'
import Star from './src/star.vue'
import StarFilled from './src/star-filled.vue'

export const VsIcon = withInstall(Icon)
export default VsIcon

export const IconArrow = withInstall(Arrow)
export const IconCheck = withInstall(Check)
export const IconClose = withInstall(Close)
export const IconLoading = withInstall(Loading)
export const IconPlus = withInstall(Plus)
export const IconStar = withInstall(Star)
export const IconStarFilled = withInstall(StarFilled)

export * from './src/icon'
export * from './src/arrow'
export * from './src/check'
export * from './src/close'
export * from './src/loading'
export * from './src/plus'
export * from './src/star'
