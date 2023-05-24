<template>
  <span :class="chipKls" @click="onClick">
    <slot />

    <icon-close
      v-if="!disabled"
      hover="less"
      scale="0.5"
      @click="onClose"
      @mouseenter="onMouseEnterClose"
      @mouseleave="onMouseLeaveClose"
    />
  </span>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { IconClose } from '@vuesax-alpha/components/icon'
import { chipEmits, chipProps } from './chip'
import { selectContextKey } from './tokens'

defineOptions({
  name: 'VsChip',
})

const ns = useNamespace('chip')

const select = inject(selectContextKey)!

const props = defineProps(chipProps)
const emit = defineEmits(chipEmits)

const chipKls = computed(() => [
  ns.b(),
  ns.is('disabled', props.disabled),
  ns.is('hit', props.hit),
  ns.is(props.shape),
])

const onClick = (e: Event) => {
  emit('click', e)
}

const onClose = (e: Event) => {
  emit('close', e)
}

const onMouseEnterClose = () => {
  select.handleTarget('chip-close', !props.disabled)
}

const onMouseLeaveClose = () => {
  select.handleTarget(null)
}
</script>
