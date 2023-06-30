<template>
  <div ref="groupRef" :class="[ns.b(), ns.is('open', openState)]">
    <div :class="ns.e('header')" @click="onClickHeader">
      <slot name="header" />
    </div>
    <collapse-transition>
      <div v-show="openState" ref="contentRef" :class="ns.e('content')">
        <slot />
      </div>
    </collapse-transition>
  </div>
</template>

<script setup lang="ts">
import { inject, nextTick, onMounted, provide, ref, watch } from 'vue'
import CollapseTransition from '@vuesax-alpha/components/collapse-transition'
import { useNamespace } from '@vuesax-alpha/hooks'
import { sidebarGroupContextKey } from '@vuesax-alpha/tokens'
import { sidebarGroupProps } from './sidebar-group'

defineOptions({
  name: 'VsSidebarGroup',
})

const props = defineProps(sidebarGroupProps)

const ns = useNamespace('sidebar-group')

const sidebarGroup = inject(sidebarGroupContextKey)

const groupRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()

const openState = ref(false)

const onClickHeader = () => {
  openState.value = !openState.value
}

watch(
  () => props.open,
  (val: boolean) => {
    nextTick(() => {
      const h = contentRef.value?.scrollHeight || 0

      if (sidebarGroup) {
        const parentContent = sidebarGroup.contentRef.value!
        if (val) {
          parentContent.style.height = `${parentContent.scrollHeight + h - 1}px`
        } else {
          parentContent.style.height = `${parentContent.scrollHeight - h + 1}px`
        }
      }
    })
  }
)

provide(sidebarGroupContextKey, {
  contentRef,
  groupRef,
})

onMounted(() => {
  if (props.open) {
    openState.value = true
  }
})
</script>
