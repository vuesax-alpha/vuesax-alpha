<template>
  <ul class="sidebar-sub-headers">
    <template v-for="link in children">
      <li class="sidebar-sub-header">
        <render-link
          :link="`#${link.slug}`"
          :text="link.title"
          :is-new="news?.includes(link.slug)"
          :is-update="updates?.includes(link.slug)"
        ></render-link>

        <template v-if="'children' in link">
          <render-children
            :children="link.children"
            :link="link.link"
            :max-depth="maxDepth"
            :depth="depth + 1"
            :news="news"
            :updates="updates"
          ></render-children>
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
  link?: string;
  children?: MarkdownItHeader[];
  depth?: number;
  maxDepth?: number;
  news?: string[];
  updates?: string[];
};

withDefaults(defineProps<SidebarLinkChildrenProps>(), {
  depth: 1,
});
</script>
