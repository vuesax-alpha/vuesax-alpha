<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { sidebarGroupProps } from './sidebar-group'

defineOptions({
  name: 'VsSidebarGroup',
})

defineProps(sidebarGroupProps)

// init here
</script>
