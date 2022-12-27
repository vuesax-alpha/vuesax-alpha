<template>
  <RenderLink :link="link.link" :text="link.text" />
</template>

<script lang="ts" setup>
import type { SidebarItem } from "vuepress-vite";

import RenderLink from "./SidebarLink/RenderLink.vue";

defineProps<{ link: SidebarItem }>();
</script>