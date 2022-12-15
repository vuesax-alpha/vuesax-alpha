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

.effect1 {
  transform: rotate(-90deg);
  position: absolute;
  max-width: 40px;
  max-height: 40px;
  z-index: 200;
  right: -37px;
  top: -2px;
  pointer-events: none;
  fill: -color("theme-layout");
}
.header__btns {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  transition: all 0.25s ease;
  max-width: 90px;
  overflow: hidden;
  button {
    background: transparent;
    border: 0px;
    width: 35px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: $navbarHeight;
    cursor: pointer;
    transition: all 0.25s ease;
    outline: none;
    opacity: 0.4;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%);
      background: -color("text-color");
      width: 0px;
      height: 2px;
      transition: all 0.25s ease;
    }
    &.active {
      opacity: 1;
      &:after {
        width: 60%;
      }
    }
    svg {
      max-width: 20px;
      max-height: 20px;
    }
  }
}

.sidebar {
  padding-right: 5px;
  z-index: 12000 !important;
  transition: all 0.25s ease;
  overflow: inherit !important;
  .content-sidebar {
    overflow: auto;
    max-height: 100%;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
    & > .sidebar-links {
      padding: 1.5rem 0;
      & > li {
        & > a {
          &.sidebar-link {
            font-size: 1.1em;
            line-height: 1.7;
            font-weight: bold;
          }
        }
        &:not(:first-child) {
          margin-top: 0.75rem;
        }
      }
    }
  }
  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  .sidebar-sub-headers {
    display: none;
  }
  .sidebar-links {
    transition: all 0.15s ease;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  a {
    display: inline-block;
  }
  .nav-links {
    display: none;
    border-bottom: 1px solid -color("border-color");
    padding: 0.5rem 0 0.75rem 0;
    a {
      font-weight: 600;
    }
  }
}
.sidebar .nav-links .nav-item,
.sidebar .nav-links .repo-link {
  display: block;
  line-height: 1.25rem;
  font-size: 1.1em;
  padding: 0.5rem 0 0.5rem 1.5rem;
}

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
      display: block !important;
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
        &:hover {
          .dropdown-wrapper {
            .nav-dropdown {
              display: block !important;
              transform: translate(0px) !important;
              box-shadow: none !important;
              h4 {
                padding-left: 0px !important;
              }
            }
          }
        }
      }
      .dropdown-wrapper {
        .nav-dropdown {
          position: relative;
          display: none !important;
          .dropdown-item {
            a {
              &.router-link-active {
                &::after {
                  top: calc(1rem - 2px);
                }
              }
            }
          }
        }
      }
    }
    .content-sidebar {
      & > .sidebar-links {
        padding: 1rem 0;
      }
    }
  }
}
@media (max-width: 400px) {
  .back-link {
    display: none;
  }
}
</style>
