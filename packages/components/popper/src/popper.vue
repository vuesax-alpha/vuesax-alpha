<template>
  <slot />
</template>

<script lang="ts" setup>
import { computed, provide, ref } from 'vue'
import { popperInjectionKey } from '@vuesax-alpha/tokens'
import { popperProps } from './popper'
import type { Instance as PopperInstance } from '@popperjs/core'
import type { PopperInjectionContext } from '@vuesax-alpha/tokens'

defineOptions({
  name: 'VsPopperRoot',
  inheritAttrs: false,
})

const props = defineProps(popperProps)
const triggerRef = ref<HTMLElement>()
const popperInstanceRef = ref<PopperInstance>()
const contentRef = ref<HTMLElement>()
const referenceRef = ref<HTMLElement>()
const role = computed(() => props.role)

const popperProvides = {
  /**
   * @description trigger element
   */
  triggerRef,
  /**
   * @description popperjs instance
   */
  popperInstanceRef,
  /**
   * @description popper content element
   */
  contentRef,
  /**
   * @description popper reference element
   */
  referenceRef,
  /**
   * @description role determines how aria attributes are distributed
   */
  role,
} as PopperInjectionContext

defineExpose(popperProvides)

provide(popperInjectionKey, popperProvides)
</script>
