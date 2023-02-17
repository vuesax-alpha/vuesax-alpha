<template>
  <slot :open="open" />
</template>

<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  unref,
  watch,
} from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import { useId, useNamespace } from '@vuesax-alpha/hooks'
import { isNumber, isPropAbsent } from '@vuesax-alpha/utils'
import { TOOLTIP__OPEN, tooltipRootKey } from '@vuesax-alpha/tokens'
import { tooltipRootProps } from './root'

defineOptions({
  name: 'VsTooltipRoot',
})

const props = defineProps(tooltipRootProps)

/**
 * internal open state, when no model value was provided, use this as indicator instead
 */
const _open = ref(props.defaultOpen)
const triggerRef = ref<HTMLElement | null>(null)

const open = computed<boolean>({
  get: () => (isPropAbsent(props.open) ? _open.value : props.open),
  set: (open) => {
    _open.value = open
    props['onUpdate:open']?.(open)
  },
})

const isOpenDelayed = computed(
  () => isNumber(props.delayDuration) && props.delayDuration > 0
)

const { start: onDelayedOpen, stop: clearTimer } = useTimeoutFn(
  () => {
    open.value = true
  },
  computed(() => props.delayDuration),
  {
    immediate: false,
  }
)

const ns = useNamespace('tooltip')

const contentId = useId()

const onNormalOpen = () => {
  clearTimer()
  open.value = true
}

const onDelayOpen = () => {
  unref(isOpenDelayed) ? onDelayedOpen() : onNormalOpen()
}

const onOpen = onNormalOpen

const onClose = () => {
  clearTimer()
  open.value = false
}

const onChange = (open: boolean) => {
  if (open) {
    document.dispatchEvent(new CustomEvent(TOOLTIP__OPEN))
    onOpen()
  }

  props.onOpenChange?.(open)
}

watch(open, onChange)

onMounted(() => {
  // Keeps only 1 tooltip open at a time
  document.addEventListener(TOOLTIP__OPEN, onClose)
})

onBeforeUnmount(() => {
  clearTimer()
  document.removeEventListener(TOOLTIP__OPEN, onClose)
})

provide(tooltipRootKey, {
  contentId,
  triggerRef,
  ns,

  onClose,
  onDelayOpen,
  onOpen,
})

defineExpose({
  /**
   * @description open tooltip programmatically
   */
  onOpen,

  /**
   * @description close tooltip programmatically
   */
  onClose,
})
</script>
