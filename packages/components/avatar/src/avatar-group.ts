import { buildProps } from '@vuesax-alpha/utils'

import type { ExtractPropTypes } from 'vue'
import type AvatarGroup from './avatar-group.vue'

export const avatarGroupProps = buildProps({
  /**
   * change the way the avatar is composed by placing one next to the other.
   */
  float: {
    type: Boolean,
  },
  /**
   * determine how many avatars are visible.
   */
  max: {
    type: [String, Number],
  },
} as const)

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>
