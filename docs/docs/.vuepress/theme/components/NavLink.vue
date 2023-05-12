<template>
  <router-link
    class="nav-link"
    :class="{
      active,
    }"
    :to="navItem.link"
    :active-class="''"
    :exact-active-class="''"
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
    {{ navItem.text }} <i class='bx bx-link-external'></i>
  </a>
</template>

<script lang="ts" setup>
import { isLinkMailto, isLinkTel } from "@vuepress/shared";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { NavbarItem } from "vuepress-vite";
import { isMathcedPath, isExternal } from "../util";

const props = defineProps<{
  navItem: NavbarItem;
  arrow?: boolean;
}>();

const route = useRoute();

const active = computed(() => isMathcedPath(route, props.navItem.link));
</script>

<style lang="scss">
@import "../styles/use";

.nav-item {
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

.nav-link.external {
  display: flex !important;
  align-items: center;
  gap: 4px;
  i {
    display: block !important;
    font-size: 12px;
    transform: rotate(0deg) !important;
  }
}
</style>
