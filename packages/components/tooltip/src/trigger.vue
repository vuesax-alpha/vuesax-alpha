<template>
  <vs-popper-trigger
    :id="id"
    :virtual-ref="virtualRef"
    :open="open"
    :virtual-triggering="virtualTriggering"
    :class="ns.e('trigger')"
    @blur="onBlur"
    @click="onClick"
    @contextmenu="onContextMenu"
    @focus="onFocus"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @keydown="onKeydown"
  >
    <slot />
  </vs-popper-trigger>
</template>

<script lang="ts" setup>
import { inject, ref, toRef, unref } from 'vue'
import { VsPopperTrigger } from '@vuesax-alpha/components/popper'
import { composeEventHandlers } from '@vuesax-alpha/utils'
import { useNamespace } from '@vuesax-alpha/hooks'
import { tooltipInjectionKey } from '@vuesax-alpha/tokens'
import { tooltipTriggerProps } from './trigger'
import { whenTrigger } from './utils'
import type { OnlyChildExpose } from '@vuesax-alpha/components/slot'

defineOptions({
  name: 'VsTooltipTrigger',
})

const props = defineProps(tooltipTriggerProps)
const ns = useNamespace('tooltip')

const { controlled, id, open, onOpen, onClose, onToggle } = inject(
  tooltipInjectionKey,
  undefined
)!

const triggerRef = ref<OnlyChildExpose | null>(null)

const stopWhenControlledOrDisabled = () => {
  if (unref(controlled) || props.disabled) {
    return true
  }
}
const trigger = toRef(props, 'trigger')
const onMouseenter = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'hover', onOpen)
)
const onMouseleave = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'hover', onClose)
)
const onClick = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'click', (e) => {
    // distinguish left click
    if ((e as MouseEvent).button === 0) {
      onToggle(e)
    }
  })
)
const onFocus = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'focus', onOpen)
)
const onBlur = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'focus', onClose)
)
const onContextMenu = composeEventHandlers(
  stopWhenControlledOrDisabled,
  whenTrigger(trigger, 'contextmenu', (e: Event) => {
    e.preventDefault()
    onToggle(e)
  })
)
const onKeydown = composeEventHandlers(
  stopWhenControlledOrDisabled,
  (e: KeyboardEvent) => {
    const { code } = e
    if (props.triggerKeys.includes(code)) {
      e.preventDefault()
      onToggle(e)
    }
  }
)

defineExpose({
  /**
   * @description trigger element
   */
  triggerRef,
})
</script>

<script lang="ts">
export interface TooltipTriggerExpose {
  /**
   * @description trigger element
   */
  readonly triggerRef: OnlyChildExpose | null
}
</script>
