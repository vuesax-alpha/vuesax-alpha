<template>
  <span ref="arrowRef" data-popper-arrow :class="ns.e('arrow')" />
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount, watch } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { popperContentInjectionKey } from '@vuesax-alpha/tokens'
import { popperArrowProps } from './arrow'

defineOptions({
  name: 'VsPopperArrow',
  inheritAttrs: false,
})

const props = defineProps(popperArrowProps)
const ns = useNamespace('popper')

const { arrowOffset, arrowRef } = inject(popperContentInjectionKey, undefined)!

watch(
  () => props.arrowOffset,
  (val) => {
    arrowOffset.value = val
  }
)

onBeforeUnmount(() => {
  arrowRef.value = undefined
})

defineExpose({
  /**
   * @description Arrow element
   */
  arrowRef,
})
</script>

<script lang="ts">
export interface PopperArrowExpose {
  readonly arrowRef: HTMLElement | undefined
}
</script>
