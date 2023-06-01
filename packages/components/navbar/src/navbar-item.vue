<template>
  <button
    :class="[ns.b(), ns.is('active', active || isActive)]"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount } from 'vue'
import { throwError } from '@vuesax-alpha/utils'
import { useNamespace } from '@vuesax-alpha/hooks'
import {
  navbarGroupRegisterContextKey,
  navbarRegisterContextKey,
} from '@vuesax-alpha/tokens/navbar'
import { navbarItemProps } from './navbar-item'

defineOptions({
  name: 'VsNavbarItem',
})

const props = defineProps(navbarItemProps)

const navbarRegister = inject(navbarRegisterContextKey)
const navbarGroupRegister = inject(navbarGroupRegisterContextKey)

if (!navbarRegister) {
  throwError('navbar-item', 'need to call inside navbar component')
}

const { unregister, onClick, isActive } = navbarRegister(props.id)

const navbarGroup = navbarGroupRegister?.(props.id)

const ns = useNamespace('navbar-item')

onBeforeUnmount(() => {
  unregister()
  navbarGroup?.unregister()
})
</script>
