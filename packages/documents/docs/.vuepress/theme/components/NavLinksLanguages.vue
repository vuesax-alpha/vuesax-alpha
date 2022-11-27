<template>
  <nav class="nav-links" v-if="userNav.length || repoLink">
    <!-- user links -->
    <div class="nav-item" v-for="(navItem, index) in userNav" :key="index">
      <DropdownLink v-if="item.type === 'links'" :item="navItem" :has-fle="true" />
      <NavLink v-else :nav-item="navItem" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import DropdownLink from "./DropdownLink.vue";
import NavLink from "./NavLink.vue";
import { computed } from "@vue/reactivity";
import {
  useThemeData,
  useThemeLocaleData,
} from "@vuepress/plugin-theme-data/lib/client";
import { useRouter } from "vue-router";
import { usePageData, usePageLang, useSiteData } from "@vuepress/client";
import { VuesaxAlphaThemeOptions } from "../vuesaxAlphaTheme";
import { isLinkHttp } from "@vuepress/shared";

const router = useRouter();

const themeData = useThemeData<VuesaxAlphaThemeOptions>();
const themeLocaleData = useThemeLocaleData<VuesaxAlphaThemeOptions>();
const siteData = useSiteData();
const pageData = usePageData();
const pageLang = usePageLang();

const lang = computed(() => {
  const locales = siteData.value.locales;
  if (locales && Object.keys(locales).length > 1) {
    const currentLink = pageData.value.path;
    const routes = router.options.routes;

    const languageDropdown = {
      text: (themeData.value.locales![pageLang.value] as any).selectLanguageText || "Languages",
      items: Object.keys(locales).map((path) => {
        const locale = locales[path];
        const text = locale.title;
        let link: string;
        // Stay on the current page
        if (locale.lang === pageLang.value) {
          link = currentLink;
        } else {
          // Try to stay on the same page
          link = currentLink.replace(pageData.value.path, path);
          // fallback to homepage
          if (!routes.some((route) => route.path === link)) {
            link = path;
          }
        }
        return { text, link };
      }),
    };
    return [languageDropdown];
  }
  return [];
});

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
@import "../styles/mixin";
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
      opacity: 0.4;
      transition: all 0.25s ease;
      font-weight: bold;
      display: block;
      padding: 18px 10px;
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
