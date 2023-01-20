<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { sidebarItemProps } from './sidebar-item'

defineOptions({
  name: 'VsSidebarItem',
})

const props = defineProps(sidebarItemProps)

// init here
</script>
