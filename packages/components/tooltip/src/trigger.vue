<template>
  <vs-only-child
    v-if="!virtualTriggering"
    v-bind="$attrs"
    :id="id"
    :class="ns.e('trigger')"
    :virtual-ref="virtualRef"
    :open="open"
    :virtual-triggering="virtualTriggering"
    @blur="onBlur"
    @click="onClick"
    @contextmenu="onContextMenu"
    @focus="onFocus"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @keydown="onKeydown"
  >
    <slot />
  </vs-only-child>
</template>
<script lang="ts" setup>
import { inject, toRef, unref } from 'vue'
import { composeEventHandlers } from '@vuesax-alpha/utils'
import { useForwardRef, useNamespace } from '@vuesax-alpha/hooks'
import { TOOLTIP_INJECTION_KEY } from '@vuesax-alpha/tokens'
import { VsOnlyChild } from '@vuesax-alpha/components/slot'
import { tooltipTriggerProps } from './trigger'
import { whenTrigger } from './utils'

defineOptions({
  name: 'ElTooltipTrigger',
})
const props = defineProps(tooltipTriggerProps)

const ns = useNamespace('tooltip')

const { controlled, id, open, onOpen, onClose, onToggle } = inject(
  TOOLTIP_INJECTION_KEY,
  undefined
)!

const { triggerRef } = inject(TOOLTIP_INJECTION_KEY, undefined)!

useForwardRef(triggerRef)

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
