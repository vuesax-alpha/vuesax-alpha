<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { sidebarProps } from './sidebar'

defineOptions({
  name: 'VsSidebar',
})

defineProps(sidebarProps)

// init here
</script>
