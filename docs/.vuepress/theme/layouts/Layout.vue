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
        v-if="codesandbox.url"
        class="con-codesandbox"
        @click="handleClickCodeSandbox"
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
          />
        </div>
      </div>
    </transition>

    <header-notification />

    <client-only>
      <vp-navbar
        v-if="shouldShowNavbar"
        v-show="!pageFrontmatter.navbar"
        :class="{
          transparent: pageFrontmatter.branding,
          isSidebarOpen: isSidebarOpen,
        }"
        @toggle-sidebar="toggleSidebar"
      />
      <template v-else />
    </client-only>

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <vp-home v-if="pageFrontmatter.home" />

    <docs-home
      v-else-if="pageFrontmatter.docsHome"
      :sidebar-items="sidebarItems"
    />

    <vp-license v-else-if="pageFrontmatter.license" />

    <vp-branding v-else-if="pageFrontmatter.branding" />

    <navbar-layout v-else-if="pageFrontmatter.navbar" />

    <vp-page v-else :sidebar-items="sidebarItems">
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </vp-page>

    <vp-sidebar :sidebar="sidebarItems">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </vp-sidebar>

    <client-only>
      <vp-config v-if="!pageFrontmatter.navbar" />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  ClientOnly,
  usePageData,
  usePageFrontmatter,
  usePageHeadTitle,
  useRouteLocale,
} from '@vuepress/client'
import {
  useThemeData,
  useThemeLocaleData,
  // @ts-ignore
} from '@vuepress/plugin-theme-data/client'
import { resolveSidebarItems } from '../util'

import VpHome from '../components/vp-home.vue'
import VpNavbar from '../components/vp-navbar.vue'
import VpPage from '../components/vp-page.vue'
import DocsHome from '../components/docs-home.vue'
import VpConfig from '../components/vp-config.vue'
import VpLicense from '../components/vp-license.vue'
import VpSidebar from '../components/vp-sidebar.vue'
import HeaderNotification from '../components/header-notification.vue'
import VpBranding from '../components/vp-branding.vue'
import NavbarLayout from './navbar-layout.vue'
import type { LayoutFrontmatter } from '../shared/frontmatter/layout'
import type { VuesaxAlphaThemeOptions } from '../vuesaxAlphaTheme'
import type { codesandboxContext } from '../type'

const router = useRouter()

const pageData = usePageData()
const pageFrontmatter = usePageFrontmatter<LayoutFrontmatter>()
const pageTitle = usePageHeadTitle()
const themeData = useThemeData<VuesaxAlphaThemeOptions>()
const themeLocaleData = useThemeLocaleData<VuesaxAlphaThemeOptions>()
const routeLocale = useRouteLocale()

const isSidebarOpen = ref<boolean>(false)
const codesandbox = ref<codesandboxContext>({})
let touchStart = reactive<{ x: number; y: number }>({
  x: Number.NaN,
  y: Number.NaN,
})

const shouldShowNavbar = computed(() => {
  const { logo, repo, navbar } = themeData.value
  const { frontmatter } = pageData.value
  if (frontmatter.navbar === false || navbar === false) {
    return false
  }
  return (
    pageTitle.value || logo || repo || navbar || themeLocaleData.value.navbar
  )
})

const shouldShowSidebar = computed(() => {
  const { frontmatter } = pageData.value
  return (
    !frontmatter.home &&
    frontmatter.sidebar !== false &&
    sidebarItems.value.length &&
    frontmatter.layout !== 'Layout'
  )
})

const sidebarItems = computed(() => {
  return resolveSidebarItems(pageData.value, themeData.value, routeLocale.value)
})

const pageClasses = computed(() => {
  const userPageClass = pageFrontmatter.value.pageClass
  return [
    {
      'no-navbar': !shouldShowNavbar.value,
      'sidebar-open': isSidebarOpen.value,
      'no-sidebar': !shouldShowSidebar.value,
    },
    userPageClass,
  ]
})

onMounted(() => {
  router.afterEach(() => {
    isSidebarOpen.value = false
  })
})

const handleClickCodeSandbox = () => {
  document.body.style.overflow = ''
  codesandbox.value.url = undefined
}

const toggleSidebar = (to?: boolean) => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}

// side swipe
const onTouchStart = (e: TouchEvent) => {
  touchStart = {
    x: e.changedTouches[0].clientX,
    y: e.changedTouches[0].clientY,
  }
}

const onTouchEnd = (e: TouchEvent) => {
  const dx = e.changedTouches[0].clientX - touchStart.x
  const dy = e.changedTouches[0].clientY - touchStart.y
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true)
    } else {
      toggleSidebar(false)
    }
  }
}
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
