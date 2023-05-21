<template>
  <teleport :to="appendTo" :disabled="!teleported">
    <transition :name="animation">
      <vs-only-child
        v-if="open"
        v-show="open"
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
import { computed, inject } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { VsOnlyChild } from '@vuesax-alpha/components/slot'
import { popperContextKey } from '@vuesax-alpha/tokens'
import { popperContentProps } from './content'

defineOptions({
  name: 'VsPopper',
})

const ns = useNamespace('popper')

const { contentRef, startShow, stopShow, startHide, stopHide, open } = inject(
  popperContextKey,
  undefined
)!

const props = defineProps(popperContentProps)

const popperKls = computed(() => [ns.b(), props.popperClass])

const mouseenter = () => {
  if (props.interactivity) {
    stopHide()
    startShow()
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
