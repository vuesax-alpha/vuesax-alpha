<template>
  <teleport :to="appendTo" :disabled="!teleported">
    <transition :name="animation">
      <vs-only-child
        v-if="shouldRender"
        v-show="shouldShow"
        ref="contentRef"
        :class="popperKls"
        :style="{ position: 'fixed', zIndex }"
        :data-popper-placement="placement"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
      >
        <slot />
      </vs-only-child>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed, inject, unref } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { VsOnlyChild } from '@vuesax-alpha/components/slot'
import { popperContextKey } from '@vuesax-alpha/tokens'
import { popperContentProps } from './content'

defineOptions({
  name: 'VsPopper',
})

const ns = useNamespace('popper')

const { contentRef, stopShow, startHide, stopHide, open } = inject(
  popperContextKey,
  undefined
)!

const props = defineProps(popperContentProps)

const persistentRef = computed(() => {
  // For testing, we would always want the content to be rendered
  // to the DOM, so we need to return true here.
  if (process.env.NODE_ENV === 'test') {
    return true
  }
  return props.persistent
})
const shouldRender = computed(() => {
  return unref(persistentRef) ? true : unref(open)
})

const shouldShow = computed(() => {
  return props.disabled ? false : unref(open)
})

const popperKls = computed(() => [ns.b(), props.popperClass])

const mouseenter = () => {
  if (props.interactivity) {
    stopHide()
  } else {
    stopShow()
    startHide()
  }
}

const mouseleave = () => {
  stopShow()
  startHide()
}
</script>
