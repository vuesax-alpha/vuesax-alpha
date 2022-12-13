<template>
  <router-link
    class="nav-link"
    :to="navItem.link"
    v-if="!isExternal(navItem.link)"
  >
    {{ navItem.text }}
    <i v-if="arrow" class="bx bx-chevron-down"></i>
    <template v-else></template>
  </router-link>
  <a
    v-else
    :href="navItem.link"
    class="nav-link external"
    :target="
      isLinkMailto(navItem.link) || isLinkTel(navItem.link)
        ? undefined
        : '_blank'
    "
    :rel="
      isLinkMailto(navItem.link) || isLinkTel(navItem.link)
        ? undefined
        : 'noopener noreferrer'
    "
  >
    {{ navItem.text }}
  </a>
</template>

<script lang="ts" setup>
import { isLinkMailto, isLinkTel } from "@vuepress/shared";
import { NavbarItem } from "vuepress-vite";
import { isExternal } from "../util";

defineProps<{
  navItem: NavbarItem;
  arrow?: boolean;
}>();
</script>

<style lang="scss">
@import "../styles/use";

.nav-item {
  i {
    &.bx {
      &:not(.bx-dots-horizontal-rounded) {
        display: none;
      }
      &.not-remove {
        display: block !important;
      }
    }
  }
  & > div {
    & > .nav-link {
      display: flex !important;
      align-items: center;
      justify-content: center;
      i {
        &.bx {
          display: block;
          font-size: 1rem;
          transition: all 0.2s ease;
          transform-origin: center;
          width: 16px;
          height: 16px;
          position: relative;
        }
      }
    }
  }
}
</style>
