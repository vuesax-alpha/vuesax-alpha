<template>
  <span ref="arrowRef" :style="arrowStyle" :class="ns.e('arrow')" />
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { tooltipContentKey, tooltipRootKey } from '@vuesax-alpha/tokens'
import { tooltipArrowProps, tooltipArrowSpecialProps } from './arrow'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'VsTooltipArrow',
})

const props = defineProps({
  ...tooltipArrowProps,
  ...tooltipArrowSpecialProps,
})

const { ns } = inject(tooltipRootKey)!
const { arrowRef } = inject(tooltipContentKey)!

const arrowStyle = computed<CSSProperties>(() => {
  const { style, width, height } = props
  const namespace = ns.namespace.value

  return {
    [`--${namespace}-tooltip-arrow-width`]: `${width}px`,
    [`--${namespace}-tooltip-arrow-height`]: `${height}px`,
    [`--${namespace}-tooltip-arrow-border-width`]: `${width / 2}px`,
    [`--${namespace}-tooltip-arrow-cover-width`]: width / 2 - 1,
    ...(style || {}),
  }
})
</script>
