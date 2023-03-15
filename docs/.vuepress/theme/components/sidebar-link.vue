<template>
  <render-link :link="link.link" :text="link.text" />
</template>

<script lang="ts" setup>
import RenderLink from './sidebar-link/render-link.vue'
import type { SidebarItem } from 'vuepress-vite'

defineProps<{
  link: SidebarItem
}>()
</script>
