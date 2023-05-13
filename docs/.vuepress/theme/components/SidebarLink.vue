<template>
  <RenderLink :link="link.link" :text="link.text" />
</template>

<script lang="ts" setup>
import RenderLink from './SidebarLink/RenderLink.vue'
import type { SidebarItem } from '../shared/client/nav'

defineProps<{ link: SidebarItem }>()
</script>
