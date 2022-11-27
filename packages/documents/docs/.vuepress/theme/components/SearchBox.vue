<template>
  <div class="search-box" :class="{ focused, showSuggestions }">
    <div class="con-input">
      <input
        @input="query = $event.target.value"
        aria-label="Search"
        :value="query"
        :class="{ focused: focused }"
        :placeholder="placeholder"
        autocomplete="off"
        spellcheck="false"
        @focus="(focused = true), $emit('focus')"
        @blur="(focused = false), $emit('blur')"
        @keyup.enter="go(focusIndex)"
        @keyup.up="onUp"
        @keyup.down="onDown"
        ref="$input"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
        />
      </svg>
    </div>
    <transition name="fade">
      <ul
        v-if="showSuggestions"
        class="suggestions"
        :class="{ 'align-right': alignRight }"
        @mouseleave="unfocus"
      >
        <li
          class="suggestion"
          v-for="(s, i) in suggestions"
          :key="i"
          :class="{ focused: i === focusIndex }"
          @mousedown="go(i)"
          @mouseenter="focus(i)"
        >
          <a :href="s.path" @click.prevent>
            <span class="page-title">{{ s.title || s.path }}</span>
            <span v-if="s.header" class="header"
              ><i class="bx bx-chevron-right"></i> {{ s.header.title }}</span
            >
          </a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { usePageData, useRouteLocale, useSiteData, useSiteLocaleData } from '@vuepress/client';
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { VuesaxAlphaThemeOptions } from '../vuesaxAlphaTheme';

const emits = defineEmits(['showSuggestions']);

const router = useRouter();

const themeData = useThemeData<VuesaxAlphaThemeOptions>();
const pageData = usePageData();
const routeLocale = useRouteLocale();

/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS, SEARCH_HOTKEYS */
const SEARCH_MAX_SUGGESTIONS = 5;
const SEARCH_PATHS = null;
const SEARCH_HOTKEYS = ["s", "/"];

const query = ref<string>("");
const focused = ref<boolean>(false);
const focusIndex = ref<number>(0);
const placeholder = ref<string>("");

const $input = ref<HTMLElement>()!;

const showSuggestions = computed(() => {
  const active =
    focused.value && (suggestions.value?.length || 0 );
  return active;
})

const suggestions = computed(() => {
  const _query = query.value.trim().toLowerCase();
  if (!_query) {
    return;
  }

  const max = themeData.value.searchMaxSuggestions || SEARCH_MAX_SUGGESTIONS;
  const localePath = routeLocale.value;

  const matches = (item) =>
    item && item.title && item.title.toLowerCase().indexOf(query) > -1;
  
  const res = [];

  for (let i = 0; i < pages.length; i++) {
    if (res.length >= max) break;
    const p = pages[i];
    // filter out results that do not match current locale
    if (this.getPageLocalePath(p) !== localePath) {
      continue;
    }

    // filter out results that do not match searchable paths
    if (!isSearchable(p)) {
      continue;
    }

    if (matches(p)) {
      res.push(p);
    } else if (p.headers) {
      for (let j = 0; j < p.headers.length; j++) {
        if (res.length >= max) break;
        const h = p.headers[j];
        if (matches(h)) {
          res.push(
            Object.assign({}, p, {
              path: p.path + "#" + h.slug,
              header: h,
            })
          );
        }
      }
    }
  }
  return res;
})
// make suggestions align right when there are not enough items
const alignRight = computed(() => {
  const navCount = (this.$site.themeConfig.nav || []).length;
  const repo = this.$site.repo ? 1 : 0;
  return navCount + repo <= 2;
})

watch([focused, suggestions], () => {
  const active =
    focused.value && suggestions.value?.length;
  emits("showSuggestions", active);
});

const getPageLocalePath = (page) => {
  for (const localePath in this.$site.locales || {}) {
    if (localePath !== "/" && page.path.indexOf(localePath) === 0) {
      return localePath;
    }
  }
  return "/";
}

const isSearchable = (page) => {
  let searchPaths = SEARCH_PATHS;

  // all paths searchables
  if (searchPaths === null) {
    return true;
  }

  searchPaths = Array.isArray(searchPaths)
    ? searchPaths
    : new Array(searchPaths);

  return (
    searchPaths.filter((path) => {
      return page.path.match(path);
    }).length > 0
  );
}

const onHotkey = (event: KeyboardEvent) => {
  if (
    event.srcElement === document.body &&
    SEARCH_HOTKEYS.includes(event.key)
  ) {
    $input.value!.focus();
    event.preventDefault();
  }
}

const onUp = () => {
  if (showSuggestions.value) {
    if (focusIndex.value > 0) {
      focusIndex.value--;
    } else {
      focusIndex.value = suggestions.value.length - 1;
    }
  }
}

const onDown = () => {
  if (showSuggestions.value) {
    if (focusIndex.value < suggestions.value.length - 1) {
      focusIndex.value++;
    } else {
      focusIndex.value = 0;
    }
  }
}

const go = (i: number) => {
  if (!showSuggestions.value) {
    return;
  }
  router.push(suggestions.value[i].path);
  query.value = "";
  focusIndex.value = 0;
}

const focus = (index: number) => {
  focusIndex.value = index;
}

const unfocus = () => {
  focusIndex.value = -1;
}

onMounted(() => {
  placeholder.value = themeData.value.searchPlaceholder || "";
  document.addEventListener("keydown", onHotkey);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", onHotkey);
})
</script>

<style scoped lang="scss">
@import "../styles/mixin";

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(0, calc(100% + 10px)) !important;
}
.darken {
  .search-box {
    input {
      background: rgba(0, 0, 0, 0.25);
    }
  }
}

.search-box {
  display: inline-block;
  margin-right: 1rem;
  margin-right: 0px;
  position: relative;
  &.showSuggestions {
    .con-input {
      input {
        background: -color('theme-bg2');
      }
    }
  }
  .con-input {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      position: absolute;
      right: 10px;
      width: 20px;
      pointer-events: none;
      transition: all 0.2s ease;
      fill: -color('theme-color');
    }
  }
  input {
    cursor: text;
    width: 15rem;
    color: -color('theme-color');
    border: 1px solid darken($borderColor, 10%);
    display: inline-block;
    border-radius: 2rem;
    font-size: 0.85rem;
    line-height: 2rem;
    padding: 0 0.5rem 0 2rem;
    outline: none;
    transition: all 0.2s ease;
    background: rgba(0, 0, 0, 0.05);
    background-size: 1rem;
    display: block;
    border-radius: 0px;
    border: 0px;
    padding: 4px;
    padding-left: 20px;
    opacity: 1;
    border-radius: 14px 5px 14px 14px;
    &::placeholder {
      color: -color('theme-color');
    }
    &:focus {
      width: 25rem;
      cursor: auto;
      & ~ svg {
        transform: scale(1.15);
      }
    }
  }
  .suggestions {
    background: -color('theme-layout');
    width: 100%;
    position: absolute;
    bottom: 0px;
    top: auto !important;
    padding: 10px;
    list-style-type: none;
    box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.1);
    transform: translate(0, calc(100% + 20px));
    min-width: 25rem;
    margin: 0px !important;
    border-radius: 14px;
    z-index: 1000;
    &.align-right {
      right: 0;
    }
  }
  .suggestion {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 0.6rem;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
      background: -color('theme-bg') !important;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      white-space: normal;
      color: -color('theme-color');
      box-icon {
        width: 17px;
        height: 17px;
        fill: -color('theme-color');
        margin-right: 5px;
      }
      .page-title {
        font-weight: 600;
      }
      .header {
        font-size: 0.9em;
        margin-left: 0.25em;
        opacity: 0.85;
        font-weight: normal;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &.focused {
      a {
        color: -color('theme-color');
      }
    }
  }
}

@media (max-width: $MQNarrow) {
  .search-box {
    input {
      cursor: pointer;
      width: 40px;
      border-color: transparent;
      position: relative;
      &::placeholder {
        color: transparent;
      }
      &:focus {
        cursor: text;
        left: 0;
        width: 10rem;
        &::placeholder {
          color: inherit;
        }
      }
    }
  }
}

// Match IE11
@media all and (-ms-high-contrast: none) {
  .search-box {
    input {
      height: 2rem;
    }
  }
}

@media (max-width: $MQNarrow) and (min-width: $MQMobile) {
  .search-box {
    .suggestions {
      left: 0;
    }
  }
}

@media (max-width: $MQMobile) {
  .search-box {
    margin-right: 0;
    .suggestions {
      right: 0;
    }
  }
}

@media (max-width: 500px) {
  .search-box {
    width: 100%;
  }
  .suggestions {
    width: calc(100vw - 20px) !important;
    min-width: auto !important;
    right: auto;
    left: 0px;
  }
  .focused {
    width: 100%;
  }
  input {
    transition: all 0s ease;
    color: transparent !important;
    &:focus {
      width: 100%;
      color: inherit !important;
    }
    &::placeholder {
      color: transparent !important;
    }
  }
}
</style>
