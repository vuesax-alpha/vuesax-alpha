<template>
  <aside class="sidebar">
    <div class="content-sidebar">
      <SidebarLinks :fixed="fixed" :depth="1" :links="sidebarItems" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { SidebarConfigArray } from "vuepress-vite";
import SidebarLinks from "./SidebarLinks.vue";

defineProps<{
  sidebarItems: SidebarConfigArray,
  fixed: boolean
}>();
</script>

<style lang="scss">
@import "../styles/use";

@media (max-width: 1080px) {
  .no-sidebar {
    .sidebar {
      .nav-links {
        display: block !important;
        & > .nav-item {
          &:nth-child(1) {
            display: block;
          }
          &:nth-child(2) {
            display: block;
          }
        }
        .nav-item {
          .dropdown-wrapper {
            .nav-dropdown {
              display: block !important;
              transform: translate(0px) !important;
              box-shadow: none !important;
              opacity: 1 !important;
              visibility: visible !important;
              h4 {
                padding-left: 0px !important;
              }
            }
          }
        }
      }
    }
  }

  .sidebar {
    .nav-links {
      & > .nav-item {
        &:nth-child(1) {
          display: none;
        }
        &:nth-child(2) {
          display: none;
        }
        & > .dropdown-wrapper {
          & > a {
            pointer-events: none;
          }
        }
      }
      .nav-item {
        .nav-dropdown {
          padding-left: 0.4rem;
          li {
            padding: 5px;
            font-weight: normal;
            font-size: 0.95rem;
          }
        }
      }
    }
  }
}
</style>
