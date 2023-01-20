import type { InjectionKey } from 'vue'

export type AvatarGroupContext = {
  max: number
}

export const avatarGroupContextKey: InjectionKey<AvatarGroupContext> = Symbol(
  'AvatarGroupContextKey'
)
