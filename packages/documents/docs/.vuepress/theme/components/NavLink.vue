<template>
  <router-link
    class="nav-link"
    :to="navItem.link"
    v-if="!isExternal(navItem.link)"
    :exact="
      exact ||
      ($route.path.indexOf('/guide/') !== -1 &&
        navItem.text === 'Documentation') ||
      navItem.text === 'Button'
    "
  >
    {{ navItem.text }}
    <i v-if="arrow" class="bx bx-chevron-down"></i>
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
import { useSiteData } from "@vuepress/client";
import { isLinkMailto, isLinkTel } from "@vuepress/shared";
import { computed } from "vue";
import { NavbarItem } from "vuepress-vite";
import { isExternal } from "../util";

const props = defineProps<{
  navItem: NavbarItem;
  arrow?: boolean;
  exact?: boolean;
}>();

const siteData = useSiteData();

const exact = computed(() => {
  if (siteData.value.locales) {
    return Object.keys(siteData.value.locales).some(
      (rootLink) => rootLink === props.navItem.link
    );
  }
  return props.navItem.link === "/";
});
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
