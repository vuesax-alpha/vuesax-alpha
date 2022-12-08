<template>
  <header class="navbar" ref="$el">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <router-link :to="pageData.path" class="home-link">
      <svg
        class="logo-nav"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 401.69 98.4"
      >
        <g id="Capa_2" data-name="Capa 2">
          <g id="Capa_1-2" data-name="Capa 1">
            <path
              d="M105.79,27.23h12.78l16.12,44.65L150.9,27.23h12.77L141.48,85.56h-13.4Z"
            />
            <path
              d="M168.29,82.12Q164,77.77,164,69.53V42.63h12.23V69.26q0,4.26,2,6.25c1.36,1.33,3.45,2,6.29,2a13.73,13.73,0,0,0,5.75-1.22A16,16,0,0,0,195,73.06V42.63h12.22V85.56H195.91l-.45-4.08a23.47,23.47,0,0,1-15.12,5Q172.54,86.47,168.29,82.12Z"
            />
            <path
              d="M222.22,80.8q-6.37-5.65-6.38-16.8,0-10.5,5.57-16.39t16.26-5.89q9.78,0,15.17,5.12t5.39,13.72v7.79H227.16c.6,3.32,2.13,5.65,4.57,7s6.06,2,10.83,2a39.59,39.59,0,0,0,7-.64,31.7,31.7,0,0,0,6.11-1.63v8.7q-6,2.72-15.67,2.72Q228.61,86.47,222.22,80.8Zm25.32-20V58.48q0-8-9.51-8c-4,0-6.79.8-8.42,2.4s-2.45,4.24-2.45,7.92Z"
            />
            <path
              d="M272.81,85.83a31.36,31.36,0,0,1-7.07-1.72V74a31.67,31.67,0,0,0,7,1.94,44,44,0,0,0,7.52.68,23.39,23.39,0,0,0,6.47-.59,2.33,2.33,0,0,0,1.77-2.4,2.8,2.8,0,0,0-1.63-2.53,39.68,39.68,0,0,0-6.25-2.36c-.91-.24-2.06-.6-3.44-1.08q-6.35-2.09-9.29-5c-2-1.93-2.94-4.64-2.94-8.15q0-6.24,4.57-9.51t14.36-3.26a47.58,47.58,0,0,1,7.29.55,34.85,34.85,0,0,1,6.2,1.45V53.77a24.42,24.42,0,0,0-5.52-1.72,30.87,30.87,0,0,0-6-.64,25.74,25.74,0,0,0-6.43.59c-1.39.4-2.08,1.17-2.08,2.31a2.47,2.47,0,0,0,1.49,2.31,38.75,38.75,0,0,0,5.75,2l3,.91A34.78,34.78,0,0,1,295.63,63a10.69,10.69,0,0,1,4,4.21,13.91,13.91,0,0,1,1.23,6.25q0,6.43-4.8,9.74t-14.22,3.31A63,63,0,0,1,272.81,85.83Z"
            />
            <path
              d="M312,83q-4.39-3.49-4.39-9.83A12.49,12.49,0,0,1,312.16,63q4.57-3.75,13.18-3.76H338V58a8.13,8.13,0,0,0-.95-4.26,5.63,5.63,0,0,0-3.35-2.26,24.6,24.6,0,0,0-6.84-.73A44.66,44.66,0,0,0,312.75,53v-8.6a36,36,0,0,1,7.47-2,55.67,55.67,0,0,1,9.19-.73q20.29,0,20.29,16.58V85.56H339.11l-.64-3.89q-5.25,4.8-15.58,4.8A17,17,0,0,1,312,83Zm21.19-5.89A12.69,12.69,0,0,0,338,73.6V66.81H325.61q-7.16,0-7.15,5.89,0,5.7,7.78,5.7A17.2,17.2,0,0,0,333.17,77.09Z"
            />
            <path
              d="M372,63.73l-15.85-21.1h13.23l9.24,12.5,9.23-12.5h13.23L385.3,63.73l16.39,21.83H388.38L378.6,72.43l-9.79,13.13H355.5Z"
            />
            <polygon
              points="92.25 8.05 75.25 8.05 46.14 53.12 17.04 8.05 0.04 8.05 46.15 79.45 92.25 8.05"
            />
            <polygon
              points="46.15 87.39 7.11 26.94 0 26.94 46.14 98.4 92.29 26.94 85.18 26.94 46.15 87.39"
            />
            <polygon
              points="70.34 1.37 46.14 38.17 21.95 1.37 39.75 5.87 39.75 0 52.54 0 52.54 5.87 70.34 1.37"
            />
          </g>
        </g>
      </svg>
    </router-link>

    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <NavLinks class="can-hide" />
    </div>

    <div :class="{ 'remove-links': focused }" class="external-links-search">
      <a
        title="Previous Version"
        class="v-old"
        target="_blank"
        :href="themeData.linkPrevVersion"
      >
        v4.x
      </a>

      <div class="con-links">
        <a
          title="Github"
          target="_blank"
          href="https://github.com/tranthinh-coding/vuesax-alpha"
        >
          <i class="bx bxl-github"></i>
        </a>
        <a title="Facebook" target="_blank" href="https://www.facebook.com/thinh.onichan">
          <i class="bx bxl-facebook"></i>
        </a>
      </div>

      <SearchBox
        @focus="focused = true"
        @blur="focused = false"
        @showSuggestions="handleShowSuggestions"
        v-if="
          themeData.search !== false &&
          pageData.frontmatter.search !== false
        "
      />
      <!-- <NavLinksLanguages class="can-hide"/> -->
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from "vue";
import SidebarButton from "./SidebarButton.vue";
import NavLinks from "./NavLinks.vue";
import SearchBox from "./SearchBox.vue";
import { usePageData, useSiteData } from "@vuepress/client";
import { useThemeData } from "@vuepress/plugin-theme-data/client";
import { VuesaxAlphaThemeOptions } from "../vuesaxAlphaTheme";
import { computed } from "@vue/reactivity";

const siteData = useSiteData();
const themeData = useThemeData<VuesaxAlphaThemeOptions>();
const pageData = usePageData();

const linksWrapMaxWidth = ref<number | null>(null);
const showSuggestions = ref<boolean>(false);
const focused = ref<boolean>(false);

const $el = ref<HTMLElement>()! as Ref<HTMLElement>;

const css = (el: HTMLElement, property: string) => {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  // @ts-ignore
  return win?.getComputedStyle(el)[property];
}

const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
const NAVBAR_VERTICAL_PADDING = computed(() => {
  return parseInt(css($el.value, "paddingLeft")) +
  parseInt(css($el.value, "paddingRight"));
});

onMounted(() => {
  const handleLinksWrapWidth = () => {
    if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
      linksWrapMaxWidth.value = null;
    } else {
      linksWrapMaxWidth.value = $el.value.offsetWidth - NAVBAR_VERTICAL_PADDING.value;
    }
  };
  handleLinksWrapWidth();
  window.addEventListener("resize", handleLinksWrapWidth, false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
      $el.value.classList.add("fixed");
    } else {
      $el.value.classList.remove("fixed");
    }
  });
});

const handleShowSuggestions = (active: boolean) => {
  showSuggestions.value = active;
}
</script>

<style lang="scss">
@import "../styles/use";

// $navbar-vertical-padding: 0.7rem;
// $navbar-horizontal-padding: 1.5rem;

.user-info {
  position: relative;
  margin-left: 10px;
  .user-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    &:hover {
      .dropdown {
        opacity: 1;
        visibility: visible;
      }
    }
    .dropdown {
      width: 160px;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      right: 10px;
      bottom: 0px;
      transform: translate(0, 100%);
      box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.15);
      transition: all 0.25s ease;
      .dropdown-content {
        width: 160px;
        border-radius: 15px 5px 15px 15px;
        padding: 10px;
        background: -color('theme-layout');
        margin-top: 15px;
        position: relative;
      }
      .name-user {
        border-bottom: 1px solid -color('theme-bg2');
        margin-bottom: 10px;
        width: 100%;
        padding: 5px 10px;
        padding-top: 0px;
        font-size: 0.8rem;
        text-align: center;
      }
      .logout {
        background: -color('theme-color');
        color: -color('theme-layout');
        border: 0px;
        padding: 8px 25px;
        border-radius: 10px;
        transition: all 0.25s ease;
        box-shadow: 0px 0px 0px 0px -color('theme-color');
        width: 100%;
        &:hover {
          box-shadow: 0px 5px 15px -5px -color('theme-color');
          transform: translate(0, -4px);
        }
      }
    }
    .user {
      img {
        width: 40px;
        border-radius: 30%;
      }
    }
  }
  .btn-login {
    background: -color('theme-color');
    color: -color('theme-layout');
    border: 0px;
    padding: 10px 15px;
    border-radius: 10px 10px 20px 10px;
    margin-right: 10px;
    padding-right: 17px;
    transition: all 0.25s ease;
    box-shadow: 0px 0px 0px 0px -color('theme-color');
    &:hover {
      box-shadow: 0px 5px 15px -5px -color('theme-color');
      transform: translate(0, -4px);
    }
  }
}
.logo-nav {
  fill: -color('theme-color');
  height: 28px;
}
.home-link {
  position: absolute;
  left: 0px;
  font-weight: bold;
  padding-left: 30px;
}
.v-old {
  padding: 10px;
  color: inherit;
  opacity: 0.5;
  transition: all 0.25s ease;
  &:hover {
    opacity: 1;
  }
}
.external-links-search {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  .con-links {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    a {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      box-sizing: border-box;
      box-icon {
        width: 20px !important;
        height: 20px !important;
      }
    }
  }
}
.external-links-search.remove-links .con-links,
.external-links-search.remove-links .v-old {
  display: none;
}
.navbar {
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 30px 0px;
  transition: all 0.25s ease;
  &.transparent {
    background: transparent;
  }
  &.fixed {
    border-radius: 0px;
    background: -color('theme-layout');
    .btn-login {
      border-radius: 10px;
    }
  }
  .logo {
    height: calc($navbarHeight - 1.4rem);
    min-width: calc($navbarHeight - 1.4rem);
    margin-right: 0.8rem;
    vertical-align: top;
  }
  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: -color('theme-color');
    position: relative;
  }
  .links {
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }
}
.navbar a,
.navbar span,
.navbar img {
  display: inline-block;
}

@media (max-width: 1500px) {
  .navbar {
    justify-content: flex-start;
  }
  .home-link {
    position: relative;
    padding-left: 0px;
    padding-right: 20px;
  }
}

@media (max-width: 1000px) {
  .navbar {
    padding: 9px;
    padding-top: 8px;
    padding-left: 2.5rem;
    display: flex;
    justify-content: space-between;
    .home-link {
      position: relative;
      padding-left: 0px;
      margin-left: 25px;
    }
    .external-links-search {
      position: relative;
      padding-left: 0px;
      right: 0px;
    }
    .can-hide {
      display: none;
    }
    .links {
      padding-left: 1.5rem;
      display: none;
    }
  }
}

@media (max-width: 500px) {
  .home-link {
    width: 24px !important;
    overflow: hidden;
    padding: 0px;
    margin-top: 3px;
    .logo-nav {
      height: 24px;
    }
  }
  .user-info {
    .btn-login {
      margin-right: 0px;
    }
  }
}

@media (max-width: 390px) {
  .external-links-search {
    .con-links {
      display: none;
    }
  }
}
</style>
