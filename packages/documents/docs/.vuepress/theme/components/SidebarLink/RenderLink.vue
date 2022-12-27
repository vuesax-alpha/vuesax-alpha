<template>
  <router-link
    :title="title"
    :to="link || ''"
    :active-class="''"
    :exact-active-class="''"
    class="sidebar-link"
    :class="{
      active,
      'sidebar-new': isNew,
      'sidebar-update': isUpdate,
    }"
  >
    {{ text }}
  </router-link>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { computed, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";

import { isMathcedPath, isMatchedHeader } from "../../util";

const props = defineProps<{
  text: string;
  link: string;
  isNew?: boolean;
  isUpdate?: boolean;

  isHeaderLink?: boolean;
}>();

const route = useRoute();

const title = computed(() => {
  if (props.isNew) return props.text + "New";
  if (props.isUpdate) return props.text + "Update";
  return props.text;
});

const active = ref<boolean>();

const watchRoute = props.isHeaderLink ? () => route.hash : () => route.path;
const handleRoute = props.isHeaderLink ? isMatchedHeader : isMathcedPath;

watch(watchRoute, () => active.value = handleRoute(route, props.link));
</script>

<style lang="scss">
@import "../../styles/use";

.sidebar-new {
  position: relative;
  color: #42b983 !important;
  opacity: 1 !important;
  &:after {
    background: #42b983 !important;
  }
}
.sidebar-update {
  position: relative;
  color: #ffba00 !important;
  opacity: 1 !important;
  &:after {
    background: #ffba00 !important;
  }
}
.sidebar {
  .sidebar-sub-headers {
    padding-left: 1rem;
    font-size: 0.95em;
  }
}
a {
  &.sidebar-link {
    font-size: 0.95rem;
    font-weight: 400;
    display: inline-block;
    color: -color("theme-color");
    padding: 0.3rem 1rem 0.3rem 1.25rem;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.25s ease;
    opacity: 0.5;
    font-weight: normal;
    position: relative;
    margin-left: 0px;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      left: 0px;
      width: 5px;
      background: -color("theme-color");
      height: 0px;
      transition: all 0.25s ease;
      border-radius: 0px 5px 5px 0px;
    }
    &.active {
      &:after {
        height: 30px;
      }
    }
  }
}
a.sidebar-link.active,
a.sidebar-link:hover {
  opacity: 1;
}
.sidebar-group {
  a {
    &.sidebar-link {
      padding-left: 2rem;
    }
  }
}
.sidebar-sub-headers {
  a {
    &.sidebar-link {
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      border-left: none;
      &.active {
        font-weight: 500;
      }
    }
  }
}
</style>
