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

const props = defineProps(sidebarProps)

// init here
</script>
