<template>
  <div
    id="vs-app"
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <transition name="fade-code">
      <div
        @click="handleClickCodeSandbox"
        v-if="codesandbox.url"
        class="con-codesandbox"
      >
        <div class="con-iframe">
          <iframe
            :src="codesandbox.url"
            style="
              width: 100%;
              height: 500px;
              border: 0;
              border-radius: 4px;
              overflow: hidden;
            "
            title="vuesax-buttons-default"
            allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </transition>

    <HeaderNotification />

    <ClientOnly>
      <Navbar
        v-if="shouldShowNavbar"
        v-show="!pageData.frontmatter.navbar"
        @toggle-sidebar="toggleSidebar"
        :class="{
          transparent: pageData.frontmatter.branding,
          isSidebarOpen: isSidebarOpen,
        }"
      />
      <template v-else></template>
    </ClientOnly>

    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <Home v-if="pageData.frontmatter.home" />

    <DocsHome
      :sidebar-items="sidebarItems"
      v-else-if="pageData.frontmatter.docsHome"
    />

    <License v-else-if="pageData.frontmatter.license" />

    <Branding v-else-if="pageData.frontmatter.branding" />

    <NavbarLayout v-else-if="pageData.frontmatter.navbar" />

    <Page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top"></slot>
      </template>
      <template #bottom>
        <slot name="page-bottom"></slot>
      </template>
    </Page>

    <Sidebar :sidebar="sidebarItems">
      <template #top>
        <slot name="sidebar-top"></slot>
      </template>
      <template #bottom>
        <slot name="sidebar-bottom"></slot>
      </template>
    </Sidebar>

    <ClientOnly>
      <Config v-if="!pageData.frontmatter.navbar" />
      <template v-else></template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  usePageData,
  usePageHeadTitle,
  useRouteLocale,
} from "@vuepress/client";
import {
  useThemeData,
  useThemeLocaleData,
  // @ts-ignore
} from "@vuepress/plugin-theme-data/client";
import { codesandboxContext } from "../type";
import { resolveSidebarItems } from "../util";

import { VuesaxAlphaThemeOptions } from "../vuesaxAlphaTheme";

import Home from "../components/Home.vue";
import Navbar from "../components/Navbar.vue";
import Page from "../components/Page.vue";
import DocsHome from "../components/DocsHome.vue";
import Config from "../components/Config.vue";
import License from "../components/License.vue";
import Sidebar from "../components/Sidebar.vue";
import HeaderNotification from "../components/HeaderNotification.vue";
import Branding from "../components/Branding.vue";
import NavbarLayout from "./NavbarLayout.vue";

const route = useRoute();
const router = useRouter();

const pageData = usePageData();
const pageTitle = usePageHeadTitle();
const themeData = useThemeData<VuesaxAlphaThemeOptions>();
const themeLocaleData = useThemeLocaleData<VuesaxAlphaThemeOptions>();
const routeLocale = useRouteLocale();

const isSidebarOpen = ref<boolean>(false);
const codesandbox = ref<codesandboxContext>({});
let touchStart = reactive<{ x: number; y: number }>({ x: NaN, y: NaN });

const shouldShowNavbar = computed(() => {
  const { logo, repo, navbar } = themeData.value;
  const { frontmatter } = pageData.value;
  if (frontmatter.navbar === false || navbar === false) {
    return false;
  }
  return (
    pageTitle.value || logo || repo || navbar || themeLocaleData.value.navbar
  );
});

const shouldShowSidebar = computed(() => {
  const { frontmatter } = pageData.value;
  return (
    !frontmatter.home &&
    frontmatter.sidebar !== false &&
    sidebarItems.value.length &&
    frontmatter.layout !== "Layout"
  );
});

const sidebarItems = computed(() => {
  return resolveSidebarItems(
    pageData.value,
    themeData.value,
    routeLocale.value
  );
});

const pageClasses = computed(() => {
  const userPageClass = pageData.value.frontmatter.pageClass;
  return [
    {
      "no-navbar": !shouldShowNavbar.value,
      "sidebar-open": isSidebarOpen.value,
      "no-sidebar": !shouldShowSidebar.value,
    },
    userPageClass,
  ];
});

onMounted(() => {
  router.afterEach(() => {
    isSidebarOpen.value = false;
  });
});

const handleClickCodeSandbox = () => {
  document.body.style.overflow = "";
  codesandbox.value.url = undefined;
};

const toggleSidebar = (to?: boolean) => {
  isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
};

// side swipe
const onTouchStart = (e: TouchEvent) => {
  touchStart = {
    x: e.changedTouches[0].clientX,
    y: e.changedTouches[0].clientY,
  };
};

const onTouchEnd = (e: TouchEvent) => {
  const dx = e.changedTouches[0].clientX - touchStart.x;
  const dy = e.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true);
    } else {
      toggleSidebar(false);
    }
  }
};
</script>

<style lang="scss">
.fade-code-enter-active,
.fade-code-leave-active {
  transition: opacity 0.5s;
}

.fade-code-enter-from,
.fade-code-leave-to {
  opacity: 0;
}

.darken {
  .con-codesandbox {
    background: rgba(0, 0, 0, 0.7);
  }
}
.con-codesandbox {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100001;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  .con-iframe {
    max-width: 1200px;
    width: 100%;
  }
}
</style>

<style src="prismjs/themes/prism-tomorrow.css"></style>
