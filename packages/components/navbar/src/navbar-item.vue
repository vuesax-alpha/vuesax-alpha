<template>
  <button
    :class="[ns.b(), ns.is('active', active || isActive)]"
    @click="handleClickItem"
  >
    <slot>{{ link?.text }}</slot>
  </button>
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
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

const router = useRouter()

const { unregister, onClick, isActive } = navbarRegister(props.id)

const navbarGroup = navbarGroupRegister?.(props.id)

const ns = useNamespace('navbar-item')

const handleClickItem = () => {
  onClick()

  if (props.to) {
    router.push(props.to)
  } else {
    if (props.link) {
      window.open(props.link.path, props.link.target)
    }
  }
}

onBeforeUnmount(() => {
  unregister()
  navbarGroup?.unregister()
})
</script>
