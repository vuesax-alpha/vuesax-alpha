<template>
  <div :class="[ns.b(), ns.is('active', isGroupActive)]">
    <div :class="ns.e('text')">
      <slot />
    </div>
    <div :class="ns.e('items')">
      <slot name="items" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, provide, reactive } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import {
  navbarContextKey,
  navbarGroupRegisterContextKey,
} from '@vuesax-alpha/tokens/navbar'

defineOptions({
  name: 'VsNavbarGroup',
})

const { modelValue } = inject(navbarContextKey)!

const ns = useNamespace('navbar-group')

const children = reactive<Set<string>>(new Set())

const isGroupActive = computed(() => children.has(`${modelValue.value}`))

provide(navbarGroupRegisterContextKey, (id: string) => {
  children.add(id)

  return {
    unregister: () => children.delete(id),
  }
})
</script>
