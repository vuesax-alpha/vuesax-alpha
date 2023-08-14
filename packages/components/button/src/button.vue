<template>
  <button
    ref="root$"
    :class="buttonClasses"
    :style="buttonStyles"
    @mousedown="mouseDown"
  >
    <div :class="ns.e('content')">
      <slot />
    </div>

    <div
      v-if="$slots.animate"
      :class="[ns.e('animate'), ns.em('animate', animationType)]"
    >
      <slot name="animate" />
    </div>
    <template v-else />

    <div v-if="loading" :class="ns.e('loading')">
      <icon-loading />
    </div>
    <template v-else />
  </button>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { useBaseComponent, useNamespace } from '@vuesax-alpha/hooks'
import { IconLoading } from '@vuesax-alpha/components/icon'
import {
  getVsColor,
  ripple,
  rippleCut,
  rippleReverse,
} from '@vuesax-alpha/utils'
import { buttonProps } from './button'

defineOptions({
  name: 'VsButton',
})

const props = defineProps(buttonProps)
const slots = useSlots()

const ns = useNamespace('button')

const root$ = ref<HTMLElement>()

const buttonClasses = computed(() => {
  return [
    ns.b(),
    useBaseComponent(props.color),
    props.shape && ns.m(props.shape),
    props.active && ns.m('active'),
    slots.animate && ns.m('animate'),
    props.animationType && ns.m(`animate-${props.animationType}`),
    props.animateInactive && ns.m('animate-inactive'),
    props.block && ns.m('block'),
    props.icon && ns.m('icon'),
    props.loading && ns.m('loading'),
    ns.em('size', props.size),
    ns.m(props.type),
    props.upload && ns.m('upload'),
  ]
})

const buttonStyles = computed(() => {
  return [
    ns.cssVar({
      color: getVsColor(props.color),
    }),
  ]
})

const mouseDown = (evs: MouseEvent) => {
  // ripple effect
  if (props.ripple === 'reverse') {
    rippleReverse(evs)
  } else if (props.ripple === 'cut') {
    rippleCut(evs)
  } else {
    if (props.type === 'flat') {
      ripple(
        evs,
        !props.active && document.activeElement !== root$.value
          ? 'inherit'
          : undefined,
        !props.active && document.activeElement !== root$.value
      )
    } else {
      ripple(evs, undefined, false)
    }
  }
}
</script>
