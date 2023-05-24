<template>
  <vs-only-child
    ref="triggerRef"
    :class="ns.e('trigger')"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur"
    @contextmenu="onContextMenu"
  >
    <slot />
  </vs-only-child>
</template>

<script setup lang="ts">
import { inject, toRef } from 'vue'
import { useForwardRef, useNamespace } from '@vuesax-alpha/hooks'
import { popperContextKey } from '@vuesax-alpha/tokens'
import { VsOnlyChild } from '@vuesax-alpha/components/slot'
import { composeEventHandlers } from '@vuesax-alpha/utils'
import { popperTriggerProps } from './trigger'
import { whenTrigger } from './utils'

const ns = useNamespace('popper')

const { triggerRef, onOpen, onClose, onToggle } = inject(
  popperContextKey,
  undefined
)!

useForwardRef(triggerRef)

const props = defineProps(popperTriggerProps)

const stopWhenControlledOrDisabled = () => {
  if (props.disabled) {
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
</script>
