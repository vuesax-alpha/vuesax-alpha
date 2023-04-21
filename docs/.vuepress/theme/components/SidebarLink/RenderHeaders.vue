<template>
  <ul class="sidebar-sub-headers">
    <li
      v-for="(header, index) in headers"
      :key="index"
      class="sidebar-sub-header"
    >
      <render-link
        :link="`#${header.slug}`"
        :text="header.title"
        :is-new="news?.includes(header.slug)"
        :is-update="updates?.includes(header.slug)"
        is-header-link
      />

      <template v-if="'children' in header && header.children.length > 0">
        <render-headers
          :headers="header.children"
          :link="header.link"
          :news="news"
          :updates="updates"
        />
      </template>
      <template v-else />
    </li>
  </ul>
</template>

<script setup lang="ts">
import RenderLink from './RenderLink.vue'
import type { MarkdownItHeader } from '@mdit-vue/types'

type SidebarLinkChildrenProps = {
  headers: MarkdownItHeader[]
  news?: string[]
  updates?: string[]
}

defineProps<SidebarLinkChildrenProps>()
</script>
