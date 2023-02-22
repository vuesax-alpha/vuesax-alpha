<template>
  <ul v-if="links.length" class="sidebar-links">
    <li
      v-for="(item, i) in links"
      :key="i"
      :class="{ active: item.link === $route.path }"
    >
      <template v-if="!isString(item)">
        <SidebarGroup
          v-if="'children' in item"
          :item="item"
          :open="
            fixed ||
            i === openGroupIndex ||
            vsTheme?.sidebarCollapseOpen ||
            false
          "
          :collapsable="true"
          :depth="depth"
          @toggle="toggleGroup(i)"
        />
        <SidebarLink v-else :link="item" />
      </template>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { inject, onBeforeMount, ref } from 'vue'
import { isString } from '@vue/shared'
import { useRoute } from 'vue-router'

import { isMathcedPath } from '../util'
import { vsThemeKey } from '../type'
import SidebarGroup from './SidebarGroup.vue'
import SidebarLink from './SidebarLink.vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { SidebarConfigArray } from 'vuepress-vite'

const props = defineProps<{
  links: SidebarConfigArray
  /**
   * depth of current sidebar links
   */
  depth: number
  fixed?: boolean
}>()

const route = useRoute()

const vsTheme = inject(vsThemeKey, null)

const openGroupIndex = ref<number>(0)
// const allOpen = ref<boolean>(false)

onBeforeMount(() => {
  refreshIndex()
})

// watch(route, () => {
//   // refreshIndex();
// });

const refreshIndex = () => {
  const index = resolveOpenGroupIndex(route, props.links)
  if (index > -1) {
    openGroupIndex.value = index
  }
}

const toggleGroup = (index: number) => {
  openGroupIndex.value = index === openGroupIndex.value ? -1 : index
}

const resolveOpenGroupIndex = (
  route: RouteLocationNormalizedLoaded,
  sidebar: SidebarConfigArray
) => {
  // console.log(sidebar);

  for (const [i, item] of sidebar.entries()) {
    if (isString(item)) continue

    if (
      'children' in item &&
      item.children.some((c) =>
        isMathcedPath(route, isString(c) ? c : c.link || '')
      )
    ) {
      return i
    }
  }
  return -1
}
</script>
