<template>
  <aside class="sidebar">
    <div class="content-sidebar">
      <render-headers
        :headers="pageData.headers"
        :news="news"
        :updates="updates"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import RenderHeaders from './sidebar-link/render-headers.vue'
import type { ThemeNormalApiFrontmatter } from '../shared/frontmatter/normal'

const pageFrontmatter = usePageFrontmatter<ThemeNormalApiFrontmatter>()
const pageData = usePageData()

const news = pageFrontmatter.value.NEWS
const updates = pageFrontmatter.value.UPDATES
</script>

<style lang="scss">
@import '../styles/use';

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
