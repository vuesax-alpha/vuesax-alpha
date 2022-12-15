<template>
  <main ref="$page" class="page">
    <header ref="$header" class="header-page">
      <router-link
        v-if="$route.path.indexOf('/docs/') !== -1"
        class="back-link"
        to="/docs/"
      >
        <i class="bx bx-left-arrow-alt"></i>
      </router-link>
      <template v-else></template>

      <div class="header__content">
        <div ref="$flex" class="flex-header">
          <h1 ref="$title" id="header-title">
            {{ pageData.title }}
          </h1>

          <ul ref="$titleul" class="interactive-links">
            <li title="Share">
              <button>
                <i class="bx bx-share-alt"></i>
                <ul class="options">
                  <li class="tw">
                    <a
                      target="_blank"
                      :href="`https://twitter.com/intent/tweet?url=https%3A%2F%2Ftranthinh-coding.github.io%2Fvuesax-alpha&text=@vuesax-alpha+framework+components+for+vuejs+/+${pageData.title}&hashtags=${pageData.title},framework,components,vuejs,vuesax,tranthinh-coding,design,developer,frontend`"
                    >
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li class="f">
                    <a
                      target="_blank"
                      :href="`https://www.facebook.com/sharer.php?u=https%3A%2F%2Ftranthinh-coding.github.io%2Fvuesax-alpha%2F`"
                    >
                      <i class="bx bxl-facebook-square"></i>
                    </a>
                  </li>
                  <li class="in">
                    <a
                      target="_blank"
                      :href="`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Ftranthinh-coding.github.io%2Fvuesax-alpha&title=VuesaxAlpha+Framework&summary=framework+components+for+vuejs.&source=VuesaxAlpha`"
                    >
                      <i class="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                  <li class="redit">
                    <a
                      target="_blank"
                      :href="`https://www.reddit.com/submit?url=https%3A%2F%2Ftranthinh-coding.github.io%2Fvuesax-alpha&title=VuesaxAlpha+Framework+components+for+vuejs`"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g>
                          <circle cx="9.67" cy="13" r="1.001" />
                          <path
                            d="M14.09 15.39C13.483 15.826 12.746 16.041 12 16c-.744.034-1.479-.189-2.081-.63-.099-.081-.242-.081-.342 0-.115.095-.132.265-.037.38.71.535 1.582.808 2.471.77.887.038 1.76-.234 2.47-.77v.04c.109-.107.111-.285.006-.396C14.377 15.284 14.2 15.282 14.09 15.39zM14.299 12.04c-.552 0-.999.448-.999 1.001 0 .552.447.999.999.999l-.008.039c.016.002.033 0 .051 0 .551-.021.979-.487.958-1.038C15.3 12.488 14.853 12.04 14.299 12.04z"
                          />
                          <path
                            d="M12,2C6.479,2,2,6.477,2,12c0,5.521,4.479,10,10,10s10-4.479,10-10C22,6.477,17.521,2,12,2z M17.86,13.33 c0.011,0.146,0.011,0.293,0,0.439c0,2.241-2.61,4.062-5.83,4.062c-3.221,0-5.83-1.82-5.83-4.062c-0.012-0.146-0.012-0.293,0-0.439 c-0.145-0.066-0.275-0.155-0.392-0.264c-0.587-0.553-0.614-1.477-0.063-2.063c0.552-0.588,1.477-0.616,2.063-0.063 c1.152-0.781,2.509-1.209,3.899-1.23L12.45,6.24c0-0.001,0-0.002,0-0.004C12.487,6.069,12.652,5.964,12.82,6l2.449,0.49 c0.16-0.275,0.441-0.458,0.758-0.492c0.55-0.059,1.042,0.338,1.102,0.888c0.059,0.549-0.338,1.042-0.889,1.101 c-0.548,0.059-1.041-0.338-1.102-0.887L13,6.65l-0.649,3.12c1.375,0.029,2.712,0.457,3.85,1.23 c0.259-0.248,0.599-0.393,0.957-0.406c0.807-0.029,1.483,0.6,1.512,1.406C18.679,12.562,18.363,13.08,17.86,13.33z"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                </ul>
              </button>
            </li>
            <li class="divider"></li>
            <li title="Package NPM">
              <a
                target="_blank"
                href="https://www.npmjs.com/package/vuesax-alpha"
              >
                <i class="bx bx-package"></i>
              </a>
            </li>
            <li title="View Code Github">
              <a
                target="_blank"
                href="https://github.com/tranthinh-coding/vuesax-alpha"
              >
                <i class="bx bx-code-alt"></i>
              </a>
            </li>
            <li title="Edit Page">
              <a target="_blank" :href="editLink">
                <i class="bx bx-edit"></i>
              </a>
            </li>
            <li title="Report a Bug">
              <a
                target="_blank"
                :href="`https://github.com/tranthinh-coding/vuesax-alpha/issues/new?title=[${pageData.title}] - Your Bug Name&amp;body=**Steps to Reproduce**%0A1. Do something%0A2. Do something else.%0A3. Do one last thing.%0A%0A**Expected**%0AThe ${pageData.title} should do this%0A%0A**Result**%0AThe ${pageData.title} does not do this%0A%0A**Testcase**%0A(fork this to get started)%0Ahttp://jsfiddle.net/exmple-bug/1/`"
              >
                <i class="bx bx-bug"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <svg
        class="header-effect"
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="160"
        viewBox="0 0 160 160"
      >
        <path
          id="Trazado_200"
          data-name="Trazado 200"
          d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
          transform="translate(0 10)"
          fill="#fff"
        />
      </svg>
    </header>

    <Sidebar2 :fixed="true" :sidebar-items="sidebarItems" />

    <slot name="top"></slot>

    <transition name="fade">
      <Content class="content__default" />
    </transition>

    <api />

    <footer class="page-edit">
      <div class="last-updated" v-if="themeData.lastUpdated">
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdatedTime }}</span>
      </div>
      <template v-else></template>
    </footer>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <!-- v-show="prev" -->
        <span class="prev" v-if="prev">
          <router-link class="prev" :to="prev.link">
            <i class="bx bx-chevron-left"></i>
            <span>
              {{ prev.title || prev.link }}
            </span>
          </router-link>
        </span>
        <template v-else></template>

        <span v-if="next" class="next">
          <router-link :to="next.link">
            <span>
              {{ next.title || next.link }}
            </span>
            <i class="bx bx-chevron-right"></i>
          </router-link>
        </span>
        <template v-else></template>
      </p>
    </div>
    <template v-else></template>
    <slot name="bottom"></slot>

    <div ref="$up" @click="handleUp" class="up">
      <i class="bx bx-chevron-up"></i>
    </div>

    <Footer></Footer>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import { usePageData, usePageFrontmatter } from "@vuepress/client";
// @ts-ignore
import { useThemeData } from "@vuepress/plugin-theme-data/client";
import { SidebarConfigArray } from "vuepress-vite";

import { normalize, outboundRE, endingSlashRE } from "../util";
import {
  ThemeNormalApiFrontmatter,
  ThemePageFrontmatter,
} from "../shared/frontmatter/normal";
import type { GitPluginPageData } from "@vuepress/plugin-git";

import { VuesaxAlphaThemeOptions } from "../vuesaxAlphaTheme";

import Sidebar2 from "./Sidebar2.vue";
import api from "./Api.vue";
import Footer from "./Footer.vue";

const pageData = usePageData<ThemeNormalApiFrontmatter & GitPluginPageData>();
const themeData = useThemeData<VuesaxAlphaThemeOptions>();
const pageFrontmatter = usePageFrontmatter<ThemePageFrontmatter>();

const props = defineProps<{
  sidebarItems: SidebarConfigArray;
}>();

const $page = ref<HTMLElement>()!;
const $header = ref<HTMLElement>()!;
const $flex = ref<HTMLElement>()!;
const $title = ref<HTMLElement>()!;
const $titleul = ref<HTMLElement>()!;
const $up = ref<HTMLElement>()!;

const lastUpdatedText = computed(() => {
  return themeData.value.lastUpdatedText || "Last Updated";
});

const lastUpdatedTime = computed(() => {
  if (pageData.value.git.updatedTime) {
    const date = new Date(pageData.value.git.updatedTime);
    console.log(date);
    return date.toLocaleString("en-US");
  }
  return "";
});

const prev = computed(() => {
  const prev = pageFrontmatter.value.prev;
  if (!prev || !props.sidebarItems) {
    return null;
  }
  return resolvePage(props.sidebarItems, -1);
});

const next = computed(() => {
  const next = pageFrontmatter.value.next;
  const obj = {
    link: "/docs/guide/",
    title: "introduction",
  };
  if (!next || !props.sidebarItems) {
    return obj;
  }
  return resolvePage(props.sidebarItems, 1) || obj;
});

const editLink = computed(() => {
  const {
    repo,
    editLink,
    docsDir = "",
    docsBranch = "main",
    docsRepo = repo,
  } = themeData.value;

  let path = normalize(pageData.value.path);
  if (endingSlashRE.test(path)) {
    path += "README.md";
  } else {
    path += ".md";
  }
  if (repo && docsRepo && editLink) {
    return createEditLink({
      repo,
      docsRepo,
      docsDir,
      docsBranch,
      path,
    });
  }
});

const editLinkText = computed(() => {
  return themeData.value.editLinkText || `Edit this page`;
});

onMounted(() => {
  window.addEventListener("scroll", () => {
    if ($up.value) {
      if (window.pageYOffset > 300) {
        $up.value.classList.add("active");
      } else {
        $up.value.classList.remove("active");
      }
    }

    if (window.pageYOffset > 200) {
      $page.value?.querySelector(".sidebar")?.classList.add("fixed");
    } else {
      $page.value?.querySelector(".sidebar")?.classList.remove("fixed");
    }

    if ($title.value && $flex.value) {
      $title.value.style.fontSize = `${
        35 - window.pageYOffset / 7 > 24 ? 35 - window.pageYOffset / 8 : 20
      }px`;

      $flex.value.style.marginBottom = `${
        70 - window.pageYOffset / 2 > 0 ? 70 - window.pageYOffset / 2 : 0
      }px`;
    }
    if ($header.value) {
      if (window.pageYOffset > 140) {
        $header.value.classList.add("fixed");
        $header.value.style.width = `${$page.value?.offsetWidth}px`;
      } else {
        $header.value.style.width = `100%`;
        $header.value.classList.remove("fixed");
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.pageYOffset > 140) {
      $header.value?.classList.add("fixed");
      $header.value!.style.width = `${$page.value?.offsetWidth}px`;
    } else {
      $header.value!.style.width = `100%`;
      $header.value?.classList.remove("fixed");
    }
  });
});

const handleUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const createEditLink = ({
  repo,
  docsRepo,
  docsDir,
  docsBranch,
  path,
}: {
  repo: string;
  docsRepo: string;
  docsDir: string;
  docsBranch: string;
  path: string;
}) => {
  const bitbucket = /bitbucket.org/;
  if (bitbucket.test(repo)) {
    const base = outboundRE.test(docsRepo) ? docsRepo : repo;
    return (
      base.replace(endingSlashRE, "") +
      `/src` +
      `/${docsBranch}` +
      (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
      path +
      `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
    );
  }

  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`;

  return (
    base.replace(endingSlashRE, "") +
    `/edit/${docsBranch}` +
    (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
    path
  );
};

const resolvePage = (sidebar: SidebarConfigArray, offset: number) => {
  const sidebarFlatten = flattenSidebar(sidebar);

  const indexCurrentSidebar = sidebarFlatten.findIndex(
    ({ link }) => pageData.value.path === link
  );
  if (indexCurrentSidebar !== -1)
    return sidebarFlatten[indexCurrentSidebar + offset];
  return null;
};

const flattenSidebar = (
  list: SidebarConfigArray
): { title: string; link: string }[] => {
  const res: { title: string; link: string }[] = [];
  list.forEach((item) => {
    if (typeof item === "string") {
      res.push({ title: item, link: item });
      return;
    }
    if (item.link) {
      res.push({ title: item.text, link: item.link });
    }
    if ("children" in item) {
      res.push(...flattenSidebar(item.children));
    }
  });
  return res;
};
</script>

<style lang="scss">
@import "../styles/_use.scss";
@import "../styles/_mixin.scss";

.back-link {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 600;
  margin: 15px;
  display: block;
  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  border-radius: 25px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  padding-top: 8px;
  padding-left: 8px;
  &:hover {
    background: -color("theme-layout");
    box-shadow: 0px 6px 10px -5px rgba(0, 0, 0, 0.1);
    transform: translate(0, -3px);
  }
  i {
    font-size: 1.4rem;
  }
}

@media (max-width: 1240px) {
  .back-link {
    display: none;
  }
}
.con-svg {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.up {
  position: fixed;
  bottom: 0px;
  right: 0;
  width: 40px;
  height: 40px;
  background: -color("theme-layout");
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  margin: 20px;
  transform: translate(0, calc(100% + 20px));
  transition: all 0.25s ease, bottom 0s;
  z-index: 500;
  &:active {
    transform: scale(0.9) translate(0) !important;
    opacity: 0.7;
  }
  &:hover {
    color: -color("accent-color");
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  }
  &.active {
    transform: translate(0);
  }
}

.header-page {
  width: 100%;
  position: absolute;
  background: -color("theme-bg2");
  height: auto;
  border-radius: 0px 0px 0px 30px;
  transition: background 0.25s ease, border-radius 0.25s ease;
  top: 0px;
  // overflow hidden
  &:before {
    position: absolute;
    top: -59px;
    left: 0px;
    content: "";
    background: -color("theme-bg2");
    width: 100%;
    height: 60px;
  }
  &.fixed {
    position: fixed;
    top: 57px;
    z-index: 9999;
    border-radius: 0px;
    background: -color("theme-bg");
    margin: 0px;
    .back-link {
      margin: 10px 15px;
    }
    .header__content {
      height: 58px;
      &:after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%);
        width: 110%;
        height: 100%;
        z-index: -1;
        box-shadow: 0px 25px 20px -25px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .header-effect {
    opacity: 0;
  }
  table {
    margin: 0px;
    width: calc(100% - 20px);
    margin: 0px 10px;
    display: table;
    tr {
      width: 100%;
      border: 0px !important;
      th {
        font-size: 0.8rem;
        font-weight: normal;
        border: 0px !important;
        padding: 8px 0px;
      }
    }
  }

  .header__content {
    @include wrapper;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 200px;
    padding-top: 0px;
    padding-bottom: 0px;
    // transition background .25s ease;
    background: transparent;
    padding: 0px 40px !important;

    &.con-table {
      height: auto !important;
    }

    .flex-header {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 70px;
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%);
      width: 0%;
      height: 100%;
      // background -color('theme-bg2');
      z-index: -1;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.25s ease;
    }
    h1 {
      font-size: 35px;
      margin: 0px;
      padding: 13px 0px;
      padding-bottom: 15px;
      font-weight: 600;
    }

    .interactive-links {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      padding-bottom: 13px;
      margin: 0px;
      .divider {
        position: relative;
        width: 1px;
        height: 25px;
        background: -color("theme-color");
        margin: 0px 10px;
      }
      li {
        button {
          border: 0px;
          padding: 0px;
          position: relative;
          background: transparent;
          padding: 0px;
          margin: 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          color: -color("theme-color");
          &:hover {
            ul {
              opacity: 1;
              visibility: visible;
              transform: translate(0, calc(100% - 20px));
            }
          }
          ul {
            list-style: none;
            padding: 0px;
            bottom: 0px;
            position: absolute;
            transform: translate(0, calc(100% - 15px));
            background: -color("theme-layout");
            border-radius: 10px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.25s ease;
            li {
              a {
                padding: 5px;
                opacity: 0.7;
                &:hover {
                  opacity: 1;
                }
              }
            }
          }
        }
        a {
          padding: 4px 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          margin: 0px 1px;
          transition: all 0.25s ease;
          &:hover {
            background: -color("theme-layout");
            transform: translate(0, -2px);
            box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
    .interactive-links li box-icon,
    .interactive-links li svg {
      fill: -color("theme-color");
      max-width: 18px;
    }
  }
  .header-effect {
    position: absolute;
    bottom: 0px;
    transform: rotate(0deg);
    max-width: 40px;
    max-height: 40px;
    z-index: 200;
    right: 0px;
    bottom: -38px;
    transition: all 0.25s ease;
    #Trazado_200 {
      fill: -color("theme-bg2") !important;
      stroke: -color("theme-bg2") !important;
    }
  }
}

.page {
  display: block;
  margin-top: 57px;
  position: relative;
  margin-bottom: 0px;
  padding-top: 200px !important;
  transition: all 0.25s ease;
  width: calc(100% - 260px);

  .sidebar {
    position: absolute;
    right: 0px !important;
    left: auto;
    top: 200px;
    width: auto;
    background: transparent;
    z-index: 1200;
    max-height: calc(100vh - 470px);
    overflow: auto;
    transition: 0s !important;
    & > svg {
      display: none;
    }
    & > .content-sidebar {
      & > .sidebar-links {
        & > li {
          margin-top: 0px !important;
        }
      }
    }
    .sidebar-links {
      padding-top: 0px !important;
    }
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: #b8cbd2;
      border-radius: 5px;
      &:hover {
        background: #9ab5bf;
      }
    }
    &.fixed {
      position: fixed !important;
      top: 55px !important;
      z-index: 10000 !important;
      max-height: calc(100vh - 270px);
    }
    .sidebar-sub-headers {
      display: block !important;
      margin-top: 20px;
      li {
        a {
          display: block !important;
          text-align: right;
          font-size: 0.8rem;
          padding: 3px;
          padding-right: 25px;
          opacity: 0.6;
          max-width: 200px;
          &:after {
            content: "";
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            right: 25px;
            left: auto;
            width: 5px !important;
            background: -color("theme-color");
            height: 5px !important;
            transition: all 0.25s ease;
            border-radius: 10px;
            opacity: 0;
          }
          &.active {
            padding-right: 39px;
            opacity: 1;
            &:after {
              opacity: 1;
            }
          }
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
  .content__default {
    @include wrapper;
    margin: 0 auto;
    h1 {
      display: none !important;
    }
  }
}
.page .sidebar .sidebar-link,
.page .sidebar .sidebar-heading {
  display: none;
}

.page-edit {
  margin-top: 50px;
  font-size: 0.85rem;
  @include wrapper;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
  .edit-link {
    display: inline-block;
    a {
      color: lighten($textColor, 25%);
      // color: -color('text-color'); // lighten 25%
      margin-right: 0.25rem;
    }
  }
  .last-updated {
    float: right;
    font-size: 0.85em;
    padding: 0px 10px;
    .prefix {
      padding-left: 10px;
      font-weight: 600;
      // color: lighten($textColor, 25%);
    }
    .time {
      padding-left: 10px;
      font-weight: 400;
      // color #aaa;
      opacity: 0.8;
    }
  }
}

.page-nav {
  @include wrapper;

  padding-top: 1rem;
  padding-bottom: 0;
  position: relative;
  box-icon {
    max-width: 18px;
    max-height: 18px;
    margin: 0px 5px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    padding-left: 5px;
    border-radius: 12px;
    transition: all 0.25s ease;
    &:hover {
      background: -color("theme-layout");
      transform: translate(0px);
    }
  }
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 2rem;
    margin-top: 0;
    padding-top: 1rem;
    overflow: hidden;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: block;
        padding: 0px;
      }
    }
  }
  .prev {
    & ~ .next {
      float: right;
      padding-right: 5px;
      padding-left: 10px;
    }
  }
}

@media (max-width: 1300px) {
  .page .sidebar {
    display: none !important;
  }
}
@media (max-width: $MQMobile) {
  .page-edit {
    .edit-link {
      margin-bottom: 0.5rem;
    }
    .last-updated {
      font-size: 0.8em;
      float: none;
      text-align: left;
    }
  }
}
@media (max-width: 600px) {
  .page-nav {
    .inner {
      position: fixed;
      right: 0px;
      bottom: 34px;
      z-index: 1000;
      padding: 0px;
      margin: 0px;
      width: 100%;
      padding: 10px 0px;
      span {
        background: -color("theme-layout");
        margin: 0px;
        border-radius: 0px 10px 10px 0px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
        transform: translate(0) !important;
        span {
          display: none;
        }
        &.next {
          padding: 0px;
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 0px 10px 0px 0px;
        }
        &.prev {
          padding: 0px;
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 0px 10px 0px 0px;
          & ~ .next {
            border-radius: 10px 0px 0px 10px;
            transform: translate(0) !important;
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
            padding: 0px;
          }
        }
      }
    }
  }
  .page {
    .content__default {
      padding: 10px;
    }
  }
  .up {
    bottom: 50px;
    right: 0px;
    opacity: 0;
    pointer-events: none;
    margin: 0px;
    border-radius: 15px 0px 0px 0px;
    &.active {
      opacity: 1;
      pointer-events: auto;
    }
  }
  .header-page {
    table {
      display: none !important;
    }
    .header__content {
      height: 120px;
      padding-right: 30px !important;
      .flex-header {
        margin-bottom: 0px !important;
        #header-title {
          font-size: 1.5rem !important;
        }
      }
    }
    &.fixed {
      .header__content {
        height: 52px !important;
        .flex-header {
          #header-title {
            font-size: 1.2rem !important;
          }
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .page {
    & ~ .carbon-ads {
      background: transparent;
      #carbonads {
        background: transparent;
        border-radius: 0px;
        margin-top: 0px;
        img {
          border-radius: 0px 0px 10px 10px !important;
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .page {
    padding-top: 140px !important;
  }
}
@media (max-width: 400px) {
  .header-page {
    .header__content {
      padding: 0px 20px !important;
    }
  }
}
</style>
