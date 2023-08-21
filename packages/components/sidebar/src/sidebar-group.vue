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
import { nextTick, onMounted, ref, watch } from 'vue'
import CollapseTransition from '@vuesax-alpha/components/collapse-transition'
import { useNamespace } from '@vuesax-alpha/hooks'
import { sidebarGroupProps } from './sidebar-group'

defineOptions({
  name: 'VsSidebarGroup',
})

const props = defineProps(sidebarGroupProps)

const ns = useNamespace('sidebar-group')

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
      if (!contentRef.value) return

      const h = contentRef.value.scrollHeight || 0

      const content = contentRef.value
      if (val) {
        content.style.height = `${content.scrollHeight + h - 1}px`
      } else {
        content.style.height = `${content.scrollHeight - h + 1}px`
      }
    })
  }
)

onMounted(() => {
  if (props.open) {
    openState.value = true
  }
})
</script>
