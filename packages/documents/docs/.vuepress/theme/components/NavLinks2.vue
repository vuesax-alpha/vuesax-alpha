<template>
  <nav class="nav-links" v-if="userNav.length || repoLink">
    <!-- user links -->
    <div class="nav-item" v-for="item in userNav">
      <template v-if="!isString(item)">
        <DropdownLink v-if="('children' in item)" :item="item" />
        <NavLink v-else :nav-item="item" />
      </template>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import DropdownLink from "./DropdownLink.vue";
import NavLink from "./NavLink.vue";
import { computed } from "@vue/reactivity";
import {
  useThemeData,
  useThemeLocaleData,
} from "@vuepress/plugin-theme-data/client";
import { VuesaxAlphaThemeOptions } from "../vuesaxAlphaTheme";
import { isString } from "@vue/shared";

const themeData = useThemeData<VuesaxAlphaThemeOptions>();
const themeLocaleData = useThemeLocaleData<VuesaxAlphaThemeOptions>();

const userNav = computed(() => {
  return themeLocaleData.value.navbar || themeData.value.navbar || [];
});

const repoLink = computed(() => {
  const { repo } = themeData.value;
  if (repo) {
    return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
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
        background: -color('theme-color');
        border-radius: 2px;
        transition: all 0.25s ease;
      }
      &.router-link-active {
        &:after {
          width: 18px;
        }
      }
    }
    &:first-child {
      margin-left: 0;
    }
  }
  .repo-link {
    margin-left: 1.5rem;
  }
}
.nav-links a:hover,
.nav-links a.router-link-active {
  color: -color('theme-color');
}
.nav-links .nav-item a:hover,
.nav-links .nav-item a.router-link-active {
  opacity: 1 !important;
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
    color: -color('theme-color');
  }
}
</style>
