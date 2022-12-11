<template>
  <div class="dropdown-wrapper" :class="{ open }">
    <a class="dropdown-title" @click="toggle">
      <span :class="item.text" class="title">
        <span v-if="item.text !== '...'">
          {{ item.text }}
        </span>
        <i v-else class="bx bx-dots-horizontal-rounded"> </i>

        <i v-if="hasFle" class="bx bx-chevron-down not-remove"></i>
      </span>
    </a>

    <DropdownTransition>
      <ul class="nav-dropdown" v-show="open">
        <li class="dropdown-item" v-for="subItem in item.children">
          <template v-if="!isString(subItem)">
            <template v-if="'children' in subItem">
              <h4>{{ subItem.text }}</h4>
              <ul class="dropdown-subitem-wrapper">
                <li
                  class="dropdown-subitem"
                  v-for="childSubItem in subItem.children"
                >
                  <template
                    v-if="
                      !isString(childSubItem) && !('children' in childSubItem)
                    "
                  >
                    <NavLink
                      :exact="
                        $route.path.indexOf('/guide/components/') !== -1 ||
                        childSubItem.text === 'Button'
                      "
                      :nav-item="childSubItem"
                    />
                  </template>
                </li>
              </ul>
            </template>

            <NavLink v-else :nav-item="subItem" />
          </template>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script setup lang="ts">
import NavLink from "./NavLink.vue";
import DropdownTransition from "./DropdownTransition.vue";
import { ref } from "vue";
import { NavbarGroup } from "vuepress-vite";
import { isString } from "@vue/shared";

defineProps<{
  item: NavbarGroup;
  hasFle?: boolean;
}>();

const open = ref<boolean>(false);

const toggle = () => {
  open.value = !open.value;
};
</script>

<style lang="scss">
@import "../styles/use";

.dropdown-wrapper {
  .dropdown-title {
    display: flex !important;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .title {
      display: flex !important;
      align-items: center;
      justify-content: center;
      &.Languages {
        span {
          font-size: 0.7rem;
        }
      }
    }
    i {
      &.bx {
        font-size: 1.3rem;
        transition: all 0.25s ease;
      }
    }
    .nav-link {
      i {
        &.bx {
          max-width: 18px !important;
          max-height: 18px !important;
          transition: all 0.25s ease;
          margin-bottom: -4px;
        }
      }
    }
  }
  &:hover {
    border-color: transparent;
    .nav-link {
      i {
        &.bx {
          transform: rotate(-180deg);
        }
      }
    }
  }
  .nav-dropdown {
    .dropdown-item {
      color: inherit;
      line-height: 1.7rem;
      h4 {
        margin: 0.45rem 0 0;
        padding: 0.45rem 1.5rem 0 1.25rem;
        margin-bottom: 6px;
        font-weight: bold;
        cursor: default;
        color: getVar(theme-color);
      }
      .dropdown-subitem-wrapper {
        padding: 0;
        list-style: none;
        .dropdown-subitem {
          font-size: 0.9em;
        }
      }
      a {
        display: block;
        position: relative;
        border-bottom: none !important;
        margin-bottom: 0 !important;
        padding: 3px 25px;
        opacity: 0.5;
        font-weight: bold !important;
        transform: translate(0) !important;
        &::after {
          content: "";
          width: 5px;
          height: 5px;
          position: absolute;
          top: calc(50% - 2px);
          left: 0px;
          opacity: 0;
        }
        &:hover {
          opacity: 1;
        }
        &.router-link-active {
          opacity: 1 !important;
          &::after {
            position: absolute;
            top: calc(50% - 2px);
            left: 14px !important;
            width: 5px !important;
            opacity: 1;
          }
        }
      }
      &:first-child {
        h4 {
          margin-top: 0;
          padding-top: 0;
          border-top: 0;
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .dropdown-wrapper {
    &.open {
      .dropdown-title {
        margin-bottom: 0.5rem;
      }
    }
    .nav-dropdown {
      transition: height 0.1s ease-out;
      overflow: hidden;
      .dropdown-item {
        h4 {
          border-top: 0;
          margin-top: 0;
          padding-top: 0;
        }
        .dropdown-subitem {
          font-size: 14px;
          padding-left: 1rem;
        }
      }
    }
  }
  .dropdown-wrapper .nav-dropdown .dropdown-item h4,
  .dropdown-wrapper .nav-dropdown .dropdown-item > a {
    font-size: 15px;
    line-height: 2rem;
  }
}

@media (min-width: $MQMobile) {
  .dropdown-wrapper {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: -12px;
      width: 100%;
      height: 20px;
      background: transparent;
      display: none;
    }
    &:hover {
      display: block !important;
      &:after {
        display: block;
      }
      .nav-dropdown {
        transform: translate(0, calc(100% + 10px)) !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
    }
    .dropdown-title {
      .arrow {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 6px solid -color("arrow-bg-color");
        border-bottom: 0;
      }
    }
    .nav-dropdown {
      min-width: 200px;
      display: block !important;
      visibility: hidden;
      opacity: 0;
      height: auto !important;
      box-sizing: border-box;
      max-height: calc(100vh - 2.7rem);
      overflow-y: auto;
      position: absolute;
      bottom: 0px;
      transform: translate(0, 100%);
      left: 0;
      background-color: -color("theme-layout");
      padding: 0.5rem 0;
      text-align: left;
      border-radius: 7px 20px 20px 20px;
      white-space: nowrap;
      margin: 0;
      margin-top: -10px;
      transition: all 0.25s ease;
      box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
