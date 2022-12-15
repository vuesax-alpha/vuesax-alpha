<template>
  <RenderLink 
    :link="link.link"
    :text="link.text"
    :active="active"
  ></RenderLink>

  <template v-if="isActiveHeaders">
    <RenderChildren
      :children="link.headers"
      :link="link.link"
      :max-depth="maxDepth"
      :depth="1"
      :news="news"
      :updates="updates"
    ></RenderChildren>
  </template>
</template>

<script lang="ts" setup>
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { useRoute } from "vue-router";
import { isActive, hashRE, groupHeaders } from "../util";

import { ThemeNormalApiFrontmatter } from "../shared/frontmatter/normal";
// @ts-ignore
import { useThemeData, useThemeLocaleData } from "@vuepress/plugin-theme-data/client";
import { VuesaxAlphaThemeOptions } from "../vuesaxAlphaTheme";

import RenderLink from "./SidebarLink/RenderLink.vue";
import RenderChildren from "./SidebarLink/RenderChildren.vue";
import { computed } from "@vue/reactivity";
import { SidebarItem } from "vuepress-vite";

const props = defineProps<{
  link: SidebarItem;
  sidebarDepth?: number;
}>();

const route = useRoute();
const pageData = usePageData();
const themeData = useThemeData<VuesaxAlphaThemeOptions>();
const themeLocaleData = useThemeLocaleData<VuesaxAlphaThemeOptions>();
const pageFrontmatter = usePageFrontmatter<ThemeNormalApiFrontmatter>();
const headers = groupHeaders(pageData.value.headers); 

const news = pageFrontmatter.value.news || [];
const updates = pageFrontmatter.value.updates || [];

const link = computed(() => {
  return {
    link: props.link.link || '',
    text: props.link.text,
    headers: headers,
  }
})

// use custom active class matching logic
// due to edge case of paths ending with / + hash
const selfActive = props.link.link ? isActive(route, props.link.link) : false;
// for sidebar: auto pages, a hash link should be active if one of its child
// matches
const active = 
  selfActive ||
  link.value.headers.some((c) =>
    isActive(route, link.value.link + "#" + c.slug)
  );

const maxDepth = props.sidebarDepth ||
  themeLocaleData.value.sidebarDepth ||
  themeData.value.sidebarDepth || 
  1;

const displayAllHeaders =
  themeLocaleData.value.displayAllHeaders || 
  themeData.value.displayAllHeaders;

const isActiveHeaders = computed(() => {
  return (active || displayAllHeaders) &&
  link.value.headers &&
  !hashRE.test(link.value.link)
})
</script>

<style lang="scss">
@import "../styles/use";

.sidebar-new {
  position: relative;
  color: #42b983 !important;
  opacity: 1 !important;
  &:after {
    background: #42b983 !important;
  }
}
.sidebar-update {
  position: relative;
  color: #ffba00 !important;
  opacity: 1 !important;
  &:after {
    background: #ffba00 !important;
  }
}
.sidebar {
  .sidebar-sub-headers {
    padding-left: 1rem;
    font-size: 0.95em;
  }
}
a {
  &.sidebar-link {
    font-size: 0.95rem;
    font-weight: 400;
    display: inline-block;
    color: -color("theme-color");
    padding: 0.3rem 1rem 0.3rem 1.25rem;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.25s ease;
    opacity: 0.5;
    font-weight: normal;
    position: relative;
    margin-left: 0px;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      left: 0px;
      width: 5px;
      background: -color("theme-color");
      height: 0px;
      transition: all 0.25s ease;
      border-radius: 0px 5px 5px 0px;
    }
    &.active {
      &:after {
        height: 30px;
      }
    }
  }
}
a.sidebar-link.active,
a.sidebar-link:hover {
  opacity: 1;
}
.sidebar-group {
  a {
    &.sidebar-link {
      padding-left: 2rem;
    }
  }
}
.sidebar-sub-headers {
  a {
    &.sidebar-link {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      border-left: none;
      &.active {
        font-weight: 500;
      }
    }
  }
}
</style>
