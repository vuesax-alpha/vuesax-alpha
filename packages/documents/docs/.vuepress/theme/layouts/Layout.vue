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

    <Home v-if="pageData.frontmatter.home" />

    <DocsHome
      :sidebar-items="sidebarItems"
      v-else-if="pageData.frontmatter.docsHome"
    />

    <License
      :sidebar-items="sidebarItems"
      v-else-if="pageData.frontmatter.license"
    />

    <Branding
      :sidebar-items="sidebarItems"
      v-else-if="pageData.frontmatter.branding"
    />

    <Navbar v-else-if="pageData.frontmatter.navbar" />

    <Page v-else :sidebar="sidebarItems">
      <slot name="page-top" slot="top"></slot>
      <slot name="page-bottom" slot="bottom"></slot>
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
import { usePageData, usePageHeadTitle, useRouteLocale } from "@vuepress/client";
// @ts-ignore
import { useThemeData, useThemeLocaleData,  } from '@vuepress/plugin-theme-data/client';
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
  const { logo, repo, navbar }  = themeData.value;
  const { frontmatter } = pageData.value;
  if (frontmatter.navbar === false || navbar === false) {
    return false;
  }
  return (
    pageTitle.value ||
    logo ||
    repo ||
    navbar ||
    themeLocaleData.value.navbar
  );
});

const shouldShowSidebar = computed(() => {
  const { frontmatter } = pageData.value;
  return (
    !frontmatter.home &&
    frontmatter.sidebar !== false &&
    (themeData.value.sidebar || []).length
  );
});

const sidebarItems = computed(() => {
  return resolveSidebarItems(
    pageData.value,
    themeData.value,
    routeLocale.value
  );
  // return themeData.value.sidebar
});

const pageClasses = computed(() => {
  const userPageClass = pageData.value.frontmatter.pageClass;
  const { frontmatter } = pageData.value;
  return [
    {
      "no-navbar": !shouldShowNavbar.value,
      "sidebar-open": isSidebarOpen.value,
      "no-sidebar": !shouldShowSidebar.value || frontmatter.layout == 'Layout',
    },
    userPageClass,
  ];
});

onMounted(() => {
  router.afterEach(() => {
    isSidebarOpen.value = false;
  });
  loadDarkModeFavicon();
});

const loadDarkModeFavicon = () => {
  (() => {
    const collectLinks = (): HTMLLinkElement[] => {
      return Array.prototype.slice.apply(
        document.head.querySelectorAll('link[rel*="icon"]')
      );
    };

    const applyLink = (source: HTMLLinkElement, target: HTMLLinkElement) => {
      const type = source.getAttribute("type");
      const href = source.getAttribute("href");
      if (type !== null) {
        target.setAttribute("type", type);
      }
      if (href !== null) {
        target.setAttribute("href", href);
      }
    };

    const initSwitcher = (delay: number = 300) => {
      // Exit if media queries aren't supported
      if (typeof window.matchMedia !== "function") {
        return function noop() {};
      }

      const links = collectLinks();
      const linkElement = document.createElement("link");
      let prevMatch: string;

      linkElement.setAttribute("rel", "shortcut icon");
      document.head.appendChild(linkElement);

      const faviconApplyLoop = () => {
        let matched: HTMLLinkElement | undefined = undefined;
        links.forEach((link) => {
          if (window.matchMedia(link.media).matches) {
            matched = link;
          }
        });

        if (!matched) {
          return;
        }

        if ((matched as HTMLLinkElement).media !== prevMatch) {
          prevMatch = (matched as HTMLLinkElement).media;
          applyLink(matched, linkElement);
        }
      };

      let intervalId = setInterval(faviconApplyLoop, delay);

      const unsubscribe = () => {
        clearInterval(intervalId);
        links.forEach((link) => {
          document.head.appendChild(link);
        });
      };

      faviconApplyLoop();
      links.forEach((link) => {
        document.head.removeChild(link);
      });

      return unsubscribe;
    };

    initSwitcher();
  })();
};
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

<style lang="scss" scoped>
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
<style src="../styles/_theme.scss" lang="scss"></style>
