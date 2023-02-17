<template>
  <div ref="contentRef" :style="contentStyle" data-tooltip-root>
    <div v-if="!nowrap" :data-side="side" :class="contentClass">
      <slot :content-style="contentStyle" :content-class="contentClass" />
      <vs-visual-hidden :id="contentId" role="tooltip">
        <template v-if="ariaLabel">
          {{ ariaLabel }}
        </template>
        <slot v-else />
      </vs-visual-hidden>
      <slot name="arrow" :style="arrowStyle" :side="side" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, provide, ref, unref, watch } from 'vue'
import { offset } from '@floating-ui/dom'
import { tooltipContentKey, tooltipRootKey } from '@vuesax-alpha/tokens'
import {
  arrowMiddleware,
  useFloating,
  useNamespace,
  useZIndex,
} from '@vuesax-alpha/hooks'
import { VsVisualHidden } from '@vuesax-alpha/components/visual-hidden'
import { tooltipContentProps } from './content'
import { tooltipCommonProps } from './common'

import type { CSSProperties } from 'vue'
import type { Middleware } from '@floating-ui/dom'

defineOptions({
  name: 'VsTooltipContent',
})

const props = defineProps({ ...tooltipContentProps, ...tooltipCommonProps })

const { triggerRef, contentId } = inject(tooltipRootKey)!

const placement = ref(props.placement)
const strategy = ref(props.strategy)
const arrowRef = ref<HTMLElement | null>(null)

const { referenceRef, contentRef, middlewareData, x, y, update } = useFloating({
  placement,
  strategy,
  middleware: computed(() => {
    const middleware: Middleware[] = [offset(props.offset)]

    if (props.showArrow) {
      middleware.push(
        arrowMiddleware({
          arrowRef,
        })
      )
    }

    return middleware
  }),
})

const zIndex = useZIndex().nextZIndex()

const ns = useNamespace('tooltip')

const side = computed(() => {
  return placement.value.split('-')[0]
})

const contentStyle = computed<CSSProperties>(() => {
  return {
    position: unref(strategy),
    top: `${unref(y) || 0}px`,
    left: `${unref(x) || 0}px`,
    zIndex,
  }
})

const arrowStyle = computed<CSSProperties>(() => {
  if (!props.showArrow) return {}

  const { arrow } = unref(middlewareData)

  return {
    [`--${ns.namespace.value}-tooltip-arrow-x`]: `${arrow?.x}px` || '',
    [`--${ns.namespace.value}-tooltip-arrow-y`]: `${arrow?.y}px` || '',
  }
})

const contentClass = computed(() => [
  ns.e('content'),
  ns.is('dark', props.effect === 'dark'),
  ns.is(unref(strategy)),
  props.contentClass,
])

watch(arrowRef, () => update())

watch(
  () => props.placement,
  (val) => (placement.value = val)
)

onMounted(() => {
  watch(
    () => props.reference || triggerRef.value,
    (el) => {
      referenceRef.value = el || undefined
    },
    {
      immediate: true,
    }
  )
})

provide(tooltipContentKey, { arrowRef })
</script>
