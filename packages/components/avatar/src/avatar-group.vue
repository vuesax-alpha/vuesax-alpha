<template>
  <div :class="[ns.e('group'), { float }]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useGroupProvide, useNamespace } from '@vuesax-alpha/hooks'
import { avatarGroupContextKey } from '@vuesax-alpha/tokens'
import { avatarGroupProps } from './avatar-group'

defineOptions({
  name: 'VsAvatarGroup',
})

const props = defineProps(avatarGroupProps)

const ns = useNamespace('avatar')

useGroupProvide(avatarGroupContextKey, {
  max: props.max,
})
</script>
