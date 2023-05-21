<template>
  <vs-only-child
    ref="triggerRef"
    :class="ns.e('trigger')"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
  >
    <slot />
  </vs-only-child>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { popperContextKey } from '@vuesax-alpha/tokens'
import { VsOnlyChild } from '@vuesax-alpha/components/slot'
import { popperTriggerProps } from './trigger'

const ns = useNamespace('popper')

const { triggerRef, startShow, startHide, stopHide, stopShow } = inject(
  popperContextKey,
  undefined
)!

defineProps(popperTriggerProps)

const mouseenter = () => {
  stopHide()
  startShow()
}

const mouseleave = () => {
  stopShow()
  startHide()
}
</script>
