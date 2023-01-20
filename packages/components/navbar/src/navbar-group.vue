<template>
  <div :class="ns.b()">
    <a :class="ns.e('title')">
      <span v-if="links.text !== '...'">
        {{ links.text }}
      </span>
      <i v-else class="bx bx-dots-horizontal-rounded" />

      <i v-if="arrow" class="bx bx-chevron-down" />
    </a>

    <ul :class="ns.e('dropdown')">
      <li
        v-for="(item, i) in links.children"
        :key="i"
        :class="ns.e('dropdown-item')"
      >
        <template v-if="isNavbarGroup(item)">
          <h4 :class="ns.e('dropdown-sub-title')">{{ item.text }}</h4>
          <ul :class="ns.e('dropdown-sub-wrapper')">
            <li
              v-for="(childSubItem, k) in item.children"
              :key="k"
              :class="ns.e('dropdown-sub-item')"
            >
              <navbar-item
                v-if="isNavbarItem(childSubItem)"
                :link="childSubItem"
              />
            </li>
          </ul>
        </template>

        <navbar-item v-else :link="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@vuesax-alpha/hooks'
import { isNavbarGroup, isNavbarItem } from '@vuesax-alpha/utils'
import { navbarGroupProps } from './navbar-group'
import navbarItem from './navbar-item.vue'

defineOptions({
  name: 'VsNavbarGroup',
})

defineProps(navbarGroupProps)

const ns = useNamespace('navbar-group')
</script>
