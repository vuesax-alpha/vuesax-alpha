<template>
  <tooltip-trigger
    :disabled="disabled"
    :trigger="trigger"
    :trigger-keys="triggerKeys"
    :virtual-ref="virtualRef"
    :virtual-triggering="virtualTriggering"
  >
    <slot v-if="$slots.default" />
  </tooltip-trigger>

  <tooltip-content>
    <slot name="content" />
    <div v-if="!notArrow" :class="ns.e('arrow')" />
  </tooltip-content>
</template>

<script lang="ts" setup>
import {
  computed,
  onBeforeUnmount,
  provide,
  readonly,
  ref,
  toRef,
  unref,
  watch,
} from 'vue'
import { isBoolean } from 'lodash-unified'
import { onClickOutside } from '@vueuse/core'
import {
  useDelayedToggle,
  useId,
  useNamespace,
  usePopperContainer,
  usePopperContainerId,
} from '@vuesax-alpha/hooks'
// import { IconLoading } from '@vuesax-alpha/components/icon'
import { TOOLTIP_INJECTION_KEY } from '@vuesax-alpha/tokens'
import { composeEventHandlers } from '@vuesax-alpha/utils'
import { tooltipEmits, tooltipProps, useTooltipModelToggle } from './tooltip'
import tooltipContent from './content.vue'
import tooltipTrigger from './trigger.vue'
import type { Instance as TooltipInstance } from '@popperjs/core'

defineOptions({
  name: 'VsTooltip',
})

const props = defineProps(tooltipProps)
const emit = defineEmits(tooltipEmits)

usePopperContainer()

const { selector } = usePopperContainerId()

const id = useId()

const ns = useNamespace('tooltip')

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

const tooltipInstance = ref<TooltipInstance>()
const contentRef = ref<HTMLElement>()
const referenceRef = ref<HTMLElement>()
const triggerRef = ref<HTMLElement>()

const destroyed = ref(false)
const appendTo = computed(() => props.appendTo || selector.value)

const controlled = computed(
  () => isBoolean(props.visible) && !hasUpdateHandler.value
)

const updateTooltip = () => {
  tooltipInstance.value?.update()
}

const onShow = () => {
  emit('show', toggleReason.value)
}
const onHide = () => {
  emit('hide', toggleReason.value)
}
const onBeforeShow = () => {
  emit('before-show', toggleReason.value)
}
const onBeforeHide = () => {
  emit('before-hide', toggleReason.value)
}
const onTransitionLeave = () => {
  onHide()
}

const onBeforeEnter = () => {
  updateTooltip()
  onBeforeShow?.()
}

let stopHandle: ReturnType<typeof onClickOutside>

const onAfterShow = () => {
  onShow()
  stopHandle = onClickOutside(
    computed(() => {
      return contentRef.value
    }),
    () => {
      if (unref(controlled)) return
      if (props.trigger !== 'hover') {
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

onBeforeUnmount(() => {
  destroyed.value = true
})

watch(
  () => props.disabled,
  (disabled) => {
    if (disabled && open.value) {
      open.value = false
    }
  }
)

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

const onToggle = (event?: Event) => {
  if (unref(open)) {
    onClose(event)
  } else {
    onOpen(event)
  }
}

provide(TOOLTIP_INJECTION_KEY, {
  contentRef,
  referenceRef,
  triggerRef,
  tooltipInstance,
  controlled,
  id,
  open: readonly(open),
  trigger: toRef(props, 'trigger'),
  onOpen,
  onClose,
  onToggle,
  onShow,
  onHide,
  onBeforeShow,
  onBeforeHide,
  updateTooltip,
})
</script>

<style>
#tooltip {
  background: #333;
  color: white;
  font-weight: bold;
  padding: 4px 8px;
  font-size: 13px;
  border-radius: 4px;
  display: none;
}

#tooltip[data-show] {
  display: block;
}

#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg);
}

#tooltip[data-popper-placement^='top'] > #arrow {
  bottom: -4px;
}

#tooltip[data-popper-placement^='bottom'] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^='left'] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^='right'] > #arrow {
  left: -4px;
}
</style>
