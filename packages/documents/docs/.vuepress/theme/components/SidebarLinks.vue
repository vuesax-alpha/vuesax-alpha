<template>
  <ul class="sidebar-links" v-if="sidebar.length">
    <li
      v-for="(item, i) in sidebar"
      :key="i"
      :class="{ active: item.link === $route.path }"
    >
      <SidebarGroup
        v-if="!isString(item) && isSidebarGroup(item)"
        :sidebar="item"
        :open="fixed || i === openGroupIndex || vsTheme?.sidebarCollapseOpen || false"
        :collapsable="true"
        :depth="depth"
        @toggle="toggleGroup(i)"
      />
      <SidebarLink v-else :sidebarDepth="sidebarDepth" :sidebar="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, watch, onActivated, inject } from "vue";
import { SidebarConfigArray, SidebarGroup as SidebarGroupType, SidebarItem } from "vuepress-vite";
import { RouteLocationNormalizedLoaded, useRoute, useRouter } from "vue-router";
import SidebarGroup from "./SidebarGroup.vue";
import SidebarLink from "./SidebarLink.vue";
import { isActive } from "../util";
import { vsThemeKey } from "../type";
import { isString } from "@vue/shared";

const props = defineProps<{
  sidebar: SidebarConfigArray;
  /**
   * depth of current sidebar links
   */
  depth: number;
  /**
   * depth of headers to be extracted
   */
  sidebarDepth?: number;
  fixed: boolean;
}>();

const route = useRoute();
const router = useRouter();

const vsTheme = inject(vsThemeKey, null);

const openGroupIndex = ref<number>(0);
const allOpen = ref<boolean>(false);

onActivated(() => {
  refreshIndex();
});

watch(router, () => {
  refreshIndex();
});

const isSidebarGroup = (item: string | SidebarGroupType | SidebarItem) => {
  if (typeof item === 'string') return false;
  if ('children' in item) return true;
  return false;
}

const refreshIndex = () => {
  const index = resolveOpenGroupIndex(route, props.sidebar);
  if (index > -1) {
    openGroupIndex.value = index;
  }
};

const toggleGroup = (index: number) => {
  openGroupIndex.value = index === openGroupIndex.value ? -1 : index;
};

const resolveOpenGroupIndex = (route: RouteLocationNormalizedLoaded, sidebar: SidebarConfigArray) => {
  for (let i = 0; i < sidebar.length; i++) {
    const item = sidebar[i];
    if (isString(item)) continue;

    if (
      'children' in item &&
      item.children.some((c) => isActive(route, isString(c) ? c : c.link || ''))
    ) {
      return i;
    }
  }
  return -1;
};
</script>
