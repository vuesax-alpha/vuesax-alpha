<template>
  <teleport :disabled="!teleported" :to="appendTo">
    <transition
      :name="transition"
      @after-leave="onTransitionLeave"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterShow"
      @before-leave="onBeforeLeave"
    >
      <vs-popper-content
        v-if="shouldRender"
        v-show="shouldShow"
        :id="id"
        ref="contentRef"
        v-bind="$attrs"
        :aria-label="ariaLabel"
        :aria-hidden="ariaHidden"
        :boundaries-padding="boundariesPadding"
        :fallback-placements="fallbackPlacements"
        :gpu-acceleration="gpuAcceleration"
        :offset="offset"
        :placement="placement"
        :popper-options="popperOptions"
        :strategy="strategy"
        :effect="effect"
        :enterable="enterable"
        :pure="pure"
        :popper-class="popperClass"
        :popper-style="[popperStyle, contentStyle]"
        :reference-el="referenceEl"
        :trigger-target-el="triggerTargetEl"
        :visible="shouldShow"
        :z-index="zIndex"
        @mouseenter="onContentEnter"
        @mouseleave="onContentLeave"
        @blur="onBlur"
        @close="onClose"
      >
        <template v-if="!destroyed">
          <slot />
        </template>
      </vs-popper-content>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { usePopperContainerId } from '@vuesax-alpha/hooks'
import { composeEventHandlers } from '@vuesax-alpha/utils'
import { VsPopperContent } from '@vuesax-alpha/components/popper'
import { tooltipInjectionKey } from '@vuesax-alpha/tokens'
import { tooltipContentProps } from './content'
import type { PopperContentInstance } from '@vuesax-alpha/components/popper'

defineOptions({
  name: 'VsTooltipContent',
  inheritAttrs: false,
})

const props = defineProps(tooltipContentProps)
const { selector } = usePopperContainerId()

const contentRef = ref<PopperContentInstance | null>(null)

const destroyed = ref(false)
const {
  controlled,
  id,
  open,
  trigger,
  onClose,
  onOpen,
  onShow,
  onHide,
  onBeforeShow,
  onBeforeHide,
} = inject(tooltipInjectionKey, undefined)!

const persistentRef = computed(() => {
  // For testing, we would always want the content to be rendered
  // to the DOM, so we need to return true here.
  if (process.env.NODE_ENV === 'test') {
    return true
  }
  return props.persistent
})

const shouldRender = computed(() => {
  return persistentRef.value ? true : open.value
})

const shouldShow = computed(() => {
  return props.disabled ? false : open.value
})

const appendTo = computed(() => {
  return props.appendTo || selector.value
})

const contentStyle = computed(() => (props.style ?? {}) as any)

const ariaHidden = computed(() => !open.value)

const onTransitionLeave = () => {
  onHide()
}

const stopWhenControlled = () => {
  if (controlled.value) return true
}

const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
  if (props.enterable && trigger.value === 'hover') {
    onOpen()
  }
})

const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
  if (trigger.value === 'hover') {
    onClose()
  }
})

const onBeforeEnter = () => {
  contentRef.value?.updatePopper?.()
  onBeforeShow?.()
}

const onBeforeLeave = () => {
  onBeforeHide?.()
}

const onAfterShow = () => {
  onShow()
  stopHandle = onClickOutside(
    computed(() => {
      return contentRef.value?.popperContentRef
    }),
    () => {
      if (controlled.value) return
      if (trigger.value !== 'hover') {
        onClose()
      }
    }
  )
}

const onBlur = () => {
  if (!props.virtualTriggering) {
    onClose()
  }
}

let stopHandle: ReturnType<typeof onClickOutside>

watch(
  open,
  (val) => {
    if (!val) {
      stopHandle?.()
    }
  },
  {
    flush: 'post',
  }
)

watch(
  () => props.content,
  () => {
    contentRef.value?.updatePopper?.()
  }
)

onBeforeUnmount(() => {
  destroyed.value = true
})

defineExpose({
  /**
   * @description vs-popper-content component instance
   */
  contentRef,
})
</script>
