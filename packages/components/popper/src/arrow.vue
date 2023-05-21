<template>
  <span ref="arrowRef" data-popper-arrow :class="ns.e('arrow')" />
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount, watch } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { popperContentContextKey } from '@vuesax-alpha/tokens'
import { popperArrowProps } from './arrow'

defineOptions({
  name: 'VsPopperArrow',
  inheritAttrs: false,
})

const props = defineProps(popperArrowProps)
const ns = useNamespace('popper')

const { arrowOffset, arrowRef } = inject(popperContentContextKey, undefined)!

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
