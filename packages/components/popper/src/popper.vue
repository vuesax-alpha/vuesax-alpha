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
    :strategy="strategy"
    :persistent="persistent"
    :placement="popperPlacement"
    :content="content"
    :z-index="zIndex"
    :interactivity="interactivity"
    :popper-class="popperClass"
    :popper-style="popperStyle"
    :floating-position="floatingStyles"
    :disabled="disabled"
    :visible="visible"
    :arrow="arrow"
    @blur="onBlur"
    @close="onClose"
  >
    <slot name="content" />
  </popper-content>
</template>

<script setup lang="ts">
import {
  computed,
  onDeactivated,
  provide,
  reactive,
  readonly,
  ref,
  toRef,
  unref,
  watch,
} from 'vue'
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue'
import { isBoolean } from '@vuesax-alpha/utils'
import {
  useDelayedToggle,
  usePopperContainer,
  usePopperContainerId,
  useZIndex,
} from '@vuesax-alpha/hooks'
import { popperContextKey } from '@vuesax-alpha/tokens'
import { popperEmits, popperProps, usePopperModelToggle } from './popper'
import popperContent from './content.vue'
import popperTrigger from './trigger.vue'

defineOptions({
  name: 'VsPopper',
  inheritAttrs: false,
})

usePopperContainer()

const { selector, id } = usePopperContainerId()

const appendTo = computed(() => props.appendTo || selector.value)

const props = defineProps(popperProps)
const emit = defineEmits(popperEmits)

const { currentZIndex, nextZIndex } = useZIndex()

const zIndex = computed(() => currentZIndex.value)

const triggerRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const arrowRef = ref<HTMLElement>()

const open = ref(false)
const toggleReason = ref<Event>()

const { show, hide, hasUpdateHandler } = usePopperModelToggle({
  indicator: open,
  toggleReason,
  processBeforeClosing: props.processBeforeClose,
  shouldProceed: props.processBeforeOpen,
})

const { onOpen, onClose } = useDelayedToggle({
  showAfter: toRef(props, 'showAfter'),
  hideAfter: toRef(props, 'hideAfter'),
  open: show,
  close: hide,
})

const placement = computed(() => props.placement)
const middleware = computed(() => {
  const _middleware = []

  if (props.offsetOptions) {
    _middleware.push(offset(props.offsetOptions))
  }

  if (props.flip) {
    _middleware.push(flip(props.flipOptions))
  }

  if (props.shift) {
    _middleware.push(shift(props.shiftOptions))
  }

  return _middleware
})

const {
  floatingStyles,
  placement: popperPlacement,
  update,
} = useFloating(triggerRef, contentRef, {
  placement,
  middleware,
  whileElementsMounted: autoUpdate,
  open,
  transform: false,
  strategy: props.strategy,
})

const controlled = computed(
  () => isBoolean(props.visible) && !hasUpdateHandler.value
)

const updatePopper = (shouldUpdateZIndex = true) => {
  update()
  shouldUpdateZIndex && nextZIndex()
}

const onBlur = () => {
  if (!props.virtualTriggering) {
    onClose()
  }
}

const isFocusInsideContent = () => {
  return !!contentRef.value?.contains(document.activeElement)
}

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled && open.value) {
      open.value = false
    }
  }
)

onDeactivated(() => open.value && hide())

provide(popperContextKey, {
  contentRef,
  triggerRef,
  arrowRef,
  referenceRef: triggerRef,

  controlled,
  id,
  open: readonly(open),
  trigger: toRef(props, 'trigger'),
  onOpen,
  onClose,
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
  updatePopper,
})

defineExpose(
  reactive({
    /**
     * @description popper component instance
     */
    triggerRef,
    /**
     * @description tooltip-content component instance
     */
    contentRef,
    /**
     * @description validate current focus event is trigger inside tooltip-content
     */
    isFocusInsideContent,
    /**
     * @description update popper component instance
     */
    updatePopper,
    /**
     * @description expose onOpen function to mange tooltip open state
     */
    onOpen,
    /**
     * @description expose onOpen function to mange tooltip open state
     */
    onClose,
    /**
     * @description expose hide function
     */
    hide,
    /**
     * @description expose current poppper placement
     */
    popperPlacement,
  })
)
</script>
