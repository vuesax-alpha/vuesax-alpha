<template>
  <section
    class="sidebar-group"
    :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0,
      },
      `depth-${depth}`,
    ]"
  >
    <router-link
      v-if="item.link"
      class="sidebar-heading clickable"
      :class="{
        open,
        active: isMathcedPath($route, item.link),
      }"
      :to="item.link"
      @click="$emit('toggle')"
    >
      <span>{{ item.text }}</span>
      <span v-if="collapsable" class="arrow" :class="open ? 'down' : 'right'" />
      <template v-else />
    </router-link>

    <p
      v-else
      class="sidebar-heading"
      :class="{ open }"
      @click="$emit('toggle')"
    >
      <span>{{ item.text }}</span>
      <i class="bx bx-chevron-right" />
    </p>

    <DropdownTransition>
      <SidebarLinks
        v-if="open || !collapsable"
        class="sidebar-group-items"
        :links="item.children"
        :depth="depth + 1"
      />
    </DropdownTransition>
  </section>
</template>

<script lang="ts" setup>
import { isMathcedPath } from '../util'
import DropdownTransition from './DropdownTransition.vue'
import SidebarLinks from './SidebarLinks.vue'
import type { SidebarGroupCollapsible } from 'vuepress-vite'

defineEmits<{
  (event: 'toggle'): void
}>()

defineProps<{
  open: boolean
  collapsable: boolean
  depth: number
  item: SidebarGroupCollapsible
}>()
</script>

<style lang="scss">
@import '../styles/use';

.sidebar-group {
  .sidebar-group {
    padding-left: 0.5em;
  }
  &:not(.collapsable) {
    .sidebar-heading {
      &:not(.clickable) {
        cursor: auto;
        color: inherit;
      }
    }
  }
  &.is-sub-group {
    padding-left: 0;
    & > .sidebar-heading {
      font-size: 0.95em;
      line-height: 1.4;
      font-weight: normal;
      padding-left: 2rem;
      &:not(.clickable) {
        opacity: 0.5;
      }
    }
    & > .sidebar-group-items {
      padding-left: 1rem;
      & > li {
        & > .sidebar-link {
          font-size: 0.95em;
          border-left: none;
        }
      }
    }
  }
  &.depth-2 {
    & > .sidebar-heading {
      border-left: none;
    }
  }
}
.sidebar-heading {
  color: -color('theme-color');
  transition: color 0.15s ease;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  padding: 0.35rem 1.5rem 0.35rem 1.25rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  border-left: 0.25rem solid transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-icon {
    max-width: 20px;
    margin-bottom: -4px;
    margin-left: 4px;
  }
  &.open {
    box-icon {
      transform: rotate(90deg);
    }
  }
  .arrow {
    position: relative;
    top: -0.12em;
    left: 0.5em;
  }
  &.clickable {
    &.active {
      font-weight: 600;
      color: -color('accent-color');
      border-left-color: -color('accent-color');
    }
    &:hover {
      color: -color('accent-color');
    }
  }
}
.sidebar-group-items {
  transition: height 0.1s ease-out;
  font-size: 0.95em;
  overflow: hidden;
}
</style>
