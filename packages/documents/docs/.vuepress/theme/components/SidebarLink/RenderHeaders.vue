<template>
  <ul class="sidebar-sub-headers">
    <template v-for="header in headers">
      <li class="sidebar-sub-header">
        <render-link
          :link="`#${header.slug}`"
          :text="header.title"
          :is-new="news?.includes(header.slug)"
          :is-update="updates?.includes(header.slug)"
          is-header-link
        ></render-link>
        
        <template v-if="'children' in header && header.children.length > 0">
          <render-headers
            :headers="header.children"
            :link="header.link"
            :news="news"
            :updates="updates"
          ></render-headers>
        </template>
        <template v-else></template>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { MarkdownItHeader } from "@mdit-vue/types";

import RenderLink from "./RenderLink.vue";

type SidebarLinkChildrenProps = {
  headers: MarkdownItHeader[];
  news?: string[];
  updates?: string[];
};

defineProps<SidebarLinkChildrenProps>();
</script>
