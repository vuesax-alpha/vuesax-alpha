<template>
  <vs-popper ref="popperRef" :role="role">
    <vs-tooltip-trigger
      :disabled="disabled"
      :trigger="trigger"
      :trigger-keys="triggerKeys"
      :virtual-ref="virtualRef"
      :virtual-triggering="virtualTriggering"
    >
      <slot v-if="$slots.default" />
    </vs-tooltip-trigger>
    <vs-tooltip-content
      ref="contentRef"
      :aria-label="ariaLabel"
      :boundaries-padding="boundariesPadding"
      :content="content"
      :disabled="disabled"
      :effect="effect"
      :enterable="enterable"
      :fallback-placements="fallbackPlacements"
      :hide-after="hideAfter"
      :gpu-acceleration="gpuAcceleration"
      :offset="offset"
      :persistent="persistent"
      :popper-class="popperClass"
      :popper-style="popperStyle"
      :placement="placement"
      :popper-options="popperOptions"
      :pure="pure"
      :raw-content="rawContent"
      :reference-el="referenceEl"
      :trigger-target-el="triggerTargetEl"
      :show-after="showAfter"
      :strategy="strategy"
      :teleported="teleported"
      :transition="transition"
      :virtual-triggering="virtualTriggering"
      :z-index="zIndex"
      :append-to="appendTo"
    >
      <slot name="content">
        <span v-if="rawContent" v-html="content" />
        <span v-else>{{ content }}</span>
      </slot>
      <vs-popper-arrow v-if="showArrow" :arrow-offset="arrowOffset" />
    </vs-tooltip-content>
  </vs-popper>
</template>

<script lang="ts" setup>
import {
  computed,
  onDeactivated,
  provide,
  readonly,
  ref,
  toRef,
  unref,
  watch,
} from 'vue'
import { VsPopper, VsPopperArrow } from '@vuesax-alpha/components/popper'
import { isBoolean } from '@vuesax-alpha/utils'
import {
  useDelayedToggle,
  useId,
  usePopperContainer,
} from '@vuesax-alpha/hooks'
import { tooltipInjectionKey } from '@vuesax-alpha/tokens'
import { tooltipEmits, useTooltipModelToggle, useTooltipProps } from './tooltip'
import VsTooltipTrigger from './trigger.vue'
import VsTooltipContent from './content.vue'
import { useTooltipDeprecated } from './useTooltipDeprecated'
import type { TooltipContentInstance } from './content'
import type { PopperInstance } from '@vuesax-alpha/components/popper'

defineOptions({
  name: 'VsTooltip',
})

const props = defineProps(useTooltipProps)
const emit = defineEmits(tooltipEmits)

useTooltipDeprecated(props)

usePopperContainer()

const id = useId()

const popperRef = ref<PopperInstance | null>()
const contentRef = ref<TooltipContentInstance | null>()

const updateTooltip = () => {
  const popperComponent = unref(popperRef)
  if (popperComponent) {
    popperComponent.popperInstanceRef?.update()
  }
}

const open = ref(false)
const toggleReason = ref<Event>()

const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
  indicator: open,
  toggleReason,
})

const { onOpen, onClose } = useDelayedToggle({
  showAfter: toRef(props, 'showAfter'),
  hideAfter: toRef(props, 'hideAfter'),
  open: show,
  close: hide,
})

const controlled = computed(
  () => isBoolean(props.visible) && !hasUpdateHandler.value
)

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled && open.value) {
      open.value = false
    }
  }
)

const isFocusInsideContent = () => {
  const popperContent: HTMLElement | undefined =
    contentRef.value?.contentRef?.popperContentRef
  return popperContent && popperContent.contains(document.activeElement)
}

onDeactivated(() => open.value && hide())

provide(tooltipInjectionKey, {
  controlled,
  id,
  open: readonly(open),
  trigger: toRef(props, 'trigger'),
  onOpen: (event?: Event) => {
    onOpen(event)
  },
  onClose: (event?: Event) => {
    onClose(event)
  },
  onToggle: (event?: Event) => {
    if (unref(open)) {
      onClose(event)
    } else {
      onOpen(event)
    }
  },
  onShow: () => {
    emit('show', toggleReason.value)
  },
  onHide: () => {
    emit('hide', toggleReason.value)
  },
  onBeforeShow: () => {
    emit('before-show', toggleReason.value)
  },
  onBeforeHide: () => {
    emit('before-hide', toggleReason.value)
  },
  updateTooltip,
})

defineExpose({
  /**
   * @description vs-popper component instance
   */
  popperRef,
  /**
   * @description vs-tooltip-content component instance
   */
  contentRef,
  /**
   * @description validate current focus event is trigger inside vs-tooltip-content
   */
  isFocusInsideContent,
  /**
   * @description update vs-popper component instance
   */
  updateTooltip,
  /**
   * @description expose onOpen function to mange vs-tooltip open state
   */
  onOpen,
  /**
   * @description expose onOpen function to mange vs-tooltip open state
   */
  onClose,
  /**
   * @description expose hide function
   */
  hide,
})
</script>
