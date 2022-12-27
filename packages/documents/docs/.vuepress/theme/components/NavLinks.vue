<template>
  <nav class="nav-links" v-if="userNav.length || repoLink">
    <div class="nav-item" v-for="navItem in userNav">
      <template v-if="!isString(navItem)">
        <DropdownLink v-if="('children' in navItem)" :item="navItem" :has-fle="true" />
        <NavLink v-else :nav-item="navItem" />
      </template>
      <template v-else></template>
    </div>
  </nav>
  <template v-else></template>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { computed } from "@vue/reactivity";
import { isLinkHttp, isString } from "@vuepress/shared";
import {
  useThemeData,
  useThemeLocaleData,
} from "@vuepress/plugin-theme-data/client";
import { VuesaxAlphaThemeOptions } from "../vuesaxAlphaTheme";
import DropdownLink from "./DropdownLink.vue";
import NavLink from "./NavLink.vue";

const themeData = useThemeData<VuesaxAlphaThemeOptions>();
const themeLocaleData = useThemeLocaleData<VuesaxAlphaThemeOptions>();

const userNav = computed(() => {
  return themeLocaleData.value.navbar || themeData.value.navbar || [];
});

const repoLink = computed(() => {
  const { repo } = themeData.value;
  if (repo) {
    return isLinkHttp(repo) ? repo : `https://github.com/${repo}`;
  }
  return "";
});

const repoLabel = computed(() => {
  if (!repoLink.value) return;
  if (themeData.value.repoLabel) {
    return themeData.value.repoLabel;
  }

  const [repoHost] = repoLink.value.match(/^https?:\/\/[^/]+/) || [""];

  const platforms = ["GitHub", "GitLab", "Bitbucket"];
  for (let i = 0; i < platforms.length; i++) {
    const platform = platforms[i];
    if (new RegExp(platform, "i").test(repoHost)) {
      return platform;
    }
  }

  return "Source";
});
</script>

<style lang="scss">
@import "../styles/use";

.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    line-height: 1.4rem;
    color: inherit;
  }
  .nav-item {
    position: relative;
    display: inline-block;
    transition: all 0.25s ease;
    a {
      opacity: 0.5;
      transition: all 0.25s ease;
      font-weight: bold;
      display: block;
      padding: 18px;
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: -3px;
        width: 0px;
        height: 3px;
        background: -color("theme-color");
        border-radius: 2px;
        transition: all 0.25s ease;
      }
      &.router-link-active {
        opacity: 1 !important;
        color: -color(theme-color);
        &:after {
          width: 18px;
        }
      }
      &:hover {
        opacity: 1 !important;
        color: -color(theme-color);
      }
    }
    &:first-child {
      margin-left: 0;
    }
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
  }
  .repo-link {
    margin-left: 1.5rem;
  }
}

@media (max-width: $MQMobile) {
  .nav-links .nav-item,
  .nav-links .repo-link {
    margin-left: 0;
  }
}

@media (min-width: $MQMobile) {
  .nav-links a:hover,
  .nav-links a.router-link-active {
    color: -color("theme-color");
  }
}

@media (max-width: 1080px) {
  .nav-links {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
