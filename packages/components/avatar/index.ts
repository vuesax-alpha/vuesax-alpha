import { withInstall, withNoopInstall } from '@vuesax-alpha/utils'

import Avatar from './src/avatar.vue'
import AvatarGroup from './src/avatar-group.vue'

export const VsAvatar = withInstall(Avatar, {
  AvatarGroup,
})
export default VsAvatar

export const VsAvatarGroup = withNoopInstall(AvatarGroup)

export * from './src/avatar-group'
export * from './src/avatar'
