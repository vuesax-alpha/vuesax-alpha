<template>
  <ul class="sidebar-sub-headers">
    <template v-for="link in children">
      <li class="sidebar-sub-header">
        <render-link
          :active="active"
          :to="`${link}#${link.slug}`"
          :text="link.title"
          :n-e-w="news.includes(link.slug)"
          :u-p-d-a-t-e="updates.includes(link.slug)"
        ></render-link>

        <render-children
          :children="link.children"
          :route="route"
          :link="link.link"
          :max-depth="maxDepth"
          :depth="depth + 1"
          :news="news"
          :updates="updates"
        ></render-children>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from "vue-router";
import { MarkdownItHeader } from "@mdit-vue/types";
import RenderLink from "./RenderLink.vue";
import { isActive } from "../../util";

type SidebarLinkChildrenProps = {
  children?: [];
  route: RouteLocationNormalizedLoaded | any;
  link: string;
  depth: number;
  maxDepth: number;
  news: string[];
  updates: string[];
}

const props = withDefaults(defineProps<SidebarLinkChildrenProps>(), {
  depth: 1,
});
const active = isActive(props.route, props.link);
</script>
