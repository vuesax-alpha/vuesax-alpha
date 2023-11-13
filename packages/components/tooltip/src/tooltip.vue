<template>
  <vs-popper
    ref="popperRef"
    :interactivity="interactivity"
    :popper-class="[tooltipKls, popperClass ?? '']"
    :popper-style="[popperStyle ?? '', tooltipStyle]"
    :animation="animation"
    :append-to="appendTo"
    :flip="flip"
    :flip-options="flipOptions"
    :shift-options="shiftOptions"
    :window-resize="windowResize"
    :window-scroll="windowScroll"
    :disabled="disabled"
    :loading="loading"
    :hide-after="hideAfter"
    :offset-options="offsetOptions"
    :placement="placement"
    :show-after="showAfter"
    :arrow="arrow"
    :strategy="strategy"
    :teleported="teleported"
    :trigger="trigger"
    :trigger-class="triggerClass"
    :trigger-style="triggerStyle"
    :virtual-ref="virtualRef"
    :virtual-triggering="virtualTriggering"
    :z-index="zIndex"
    :on-blur="onBlur"
    :on-click="onClick"
    :on-focus="onFocus"
    :on-keydown="onKeydown"
    :on-contextmenu="onContextmenu"
    :on-mouseenter="onMouseenter"
    :on-mouseleave="onMouseleave"
  >
    <slot />

    <template #content>
      <slot name="content" />
    </template>
  </vs-popper>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useBaseComponent, useNamespace } from '@vuesax-alpha/hooks'
import VsPopper from '@vuesax-alpha/components/popper'
import { getVsColor } from '@vuesax-alpha/utils'
import { tooltipProps } from './tooltip'
import type { PopperExpose } from '@vuesax-alpha/components/popper'

defineOptions({
  name: 'VsTooltip',
})

const ns = useNamespace('tooltip')

const popperRef = ref<PopperExpose>()

const props = defineProps(tooltipProps)

const tooltipStyle = computed(() => [
  ns.cssVar({
    color: getVsColor(props.color),
  }),
])

const tooltipKls = computed(() => [
  ns.b(),
  useBaseComponent(props.color),
  ns.is('loading', props.loading),
  ns.is(props.type, !!props.type),
  ns.is(props.shape, !!props.shape),
  ns.is('not-arrow', !props.arrow),
  ns.is(props.effect),
])

defineExpose({ popperRef })
</script>
