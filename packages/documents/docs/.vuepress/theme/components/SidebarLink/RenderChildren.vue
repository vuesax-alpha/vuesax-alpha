<template>
  <ul class="sidebar-sub-headers">
    <template v-for="link in children">
      <li class="sidebar-sub-header">
        <render-link
          :active="active"
          :link="`${link}#${link.slug}`"
          :text="link.title"
          :n-e-w="news?.includes(link.slug)"
          :u-p-d-a-t-e="updates?.includes(link.slug)"
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
import { useRoute } from "vue-router";
import { isActive } from "../../util";
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

const route = useRoute();
const props = withDefaults(defineProps<SidebarLinkChildrenProps>(), {
  depth: 1,
});
const active = props.link ? isActive(route, props.link) : false;
</script>
