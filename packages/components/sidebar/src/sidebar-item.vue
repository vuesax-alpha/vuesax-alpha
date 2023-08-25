<template>
  <button :class="itemKls" @click="handleClickItem($router)">
    <div v-if="$slots.icon" :class="ns.e('icon')">
      <slot name="icon" />
    </div>

    <div :class="ns.e('text')">
      <slot />
    </div>
    <div :class="ns.e('text-tooltip')">
      <slot />
    </div>

    <slot v-if="$slots.arrow" name="arrow" />
    <div v-else-if="arrow" :class="ns.e('arrow')">
      <icon-arrow />
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, inject, useSlots } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { sidebarContextKey } from '@vuesax-alpha/tokens'
import { throwError } from '@vuesax-alpha/utils'
import { IconArrow } from '@vuesax-alpha/components/icon'
import { sidebarItemProps } from './sidebar-item'
import type { Router } from 'vue-router'

defineOptions({
  name: 'VsSidebarItem',
})

const slots = useSlots()

const props = defineProps(sidebarItemProps)

const ns = useNamespace('sidebar-item')

const sidebar = inject(sidebarContextKey)

if (!sidebar) {
  throwError('sidebar-item', 'need to call inside the sidebar component')
}

const handleClickItem = (router: Router) => {
  if (props.id) {
    sidebar.handleClickItem(props.id)
  }

  if (props.to) {
    router.push(props.to)
  } else if (props.href) {
    window.open(props.href, props.target)
  }
}

const itemKls = computed(() => [
  ns.b(),
  ns.is('active', props.active || sidebar.modelValue.value == props.id),
  ns.is('has-icon', Boolean(slots.icon)),
])
</script>
