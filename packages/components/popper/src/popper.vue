<template>
  <popper-trigger
    :disabled="disabled"
    :trigger="trigger"
    :virtual-ref="virtualRef"
    :virtual-triggering="virtualTriggering"
    :on-mouseenter="onMouseenter"
    :on-mouseleave="onMouseleave"
    :on-click="onClick"
    :on-keydown="onKeydown"
    :on-focus="onFocus"
    :on-blur="onBlur"
    :on-contextmenu="onContextmenu"
  >
    <slot />
  </popper-trigger>

  <popper-content
    :animation="animation"
    :append-to="appendTo"
    :teleported="teleported"
    :options="options"
    :strategy="strategy"
    :fit="fit"
    :placement="placement"
    :z-index="zIndex"
    :interactivity="interactivity"
    :offset="offset"
    :popper-class="popperClass"
    :popper-style="popperStyle"
  >
    <slot name="content" />
  </popper-content>
</template>

<script setup lang="ts">
import { computed, nextTick, provide, reactive, ref, watch } from 'vue'
import { useElementBounding, useTimeoutFn } from '@vueuse/core'
import { useFloating, useZIndex } from '@vuesax-alpha/hooks'
import { popperContextKey } from '@vuesax-alpha/tokens'
import { popperProps } from './popper'
import popperContent from './content.vue'
import popperTrigger from './trigger.vue'

defineOptions({
  name: 'VsPopper',
})

const props = defineProps(popperProps)

const { currentZIndex, nextZIndex } = useZIndex()

const zIndex = computed(() => currentZIndex.value)

const triggerRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const triggerBounding = reactive(useElementBounding(triggerRef))

const open = ref<boolean>(false)

const { destroy, update, placement } = useFloating(triggerRef, contentRef, {
  ...props,
  autoUpdate: true,
})

const { start: startShow, stop: stopShow } = useTimeoutFn(
  () => {
    if (!open.value) nextZIndex()
    open.value = true
  },
  props.showAfter,
  { immediate: false }
)

const { start: startHide, stop: stopHide } = useTimeoutFn(
  () => {
    open.value = false
  },
  props.hideAfter,
  { immediate: false }
)

provide(popperContextKey, {
  open,
  contentRef,
  triggerRef,
  referenceRef: triggerRef,
  startShow,
  stopShow,
  startHide,
  stopHide,
})

watch([open, triggerBounding], ([isOpen]) => {
  if (isOpen) update()
})

watch(
  [triggerRef],
  ([referenceElement]) => {
    destroy()

    if (!referenceElement) return

    if (open.value) {
      nextTick(() => {
        update()
      })
    }
  },
  {
    flush: 'post',
  }
)
</script>
