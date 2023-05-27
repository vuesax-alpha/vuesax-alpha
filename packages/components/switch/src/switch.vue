<template>
  <div type="checkbox" :class="switchKls" :style="switchStyles" @click="click">
    <input
      :checked="isChecked"
      v-bind="$attrs"
      type="checkbox"
      :class="ns.e('input')"
      @input="input"
    />
    <div :class="ns.e('circle')">
      <slot name="circle" />
      <icon-loading v-if="isLoading" />
    </div>
    <div
      v-if="$slots.on || $slots.default"
      :class="[ns.e('text'), ns.is('on')]"
    >
      <slot v-if="$slots.on" name="on" />
      <slot v-else-if="$slots.default" />
    </div>

    <div
      v-if="$slots.off || $slots.default"
      :class="[ns.e('text'), ns.is('off')]"
    >
      <slot v-if="$slots.off" name="off" />
      <slot v-else-if="$slots.default" />
    </div>

    <div :class="ns.e('background')" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useBaseComponent, useColor, useNamespace } from '@vuesax-alpha/hooks'
import { IconLoading } from '@vuesax-alpha/components/icon'
import { getVsColor } from '@vuesax-alpha/utils'
import { switchEmits, switchProps } from './switch'
import { useSwitch } from './use-switch'

defineOptions({
  name: 'VsSwitch',
})

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const ns = useNamespace('switch')

const color = useColor('primary')

const { isLoading, isChecked, isDisabled, click, input } = useSwitch(
  props,
  emit
)

const switchKls = computed(() => [
  useBaseComponent(),
  ns.b(),
  ns.is('loading', isLoading.value),
  ns.is(props.shape),
  ns.is('indeterminate', props.indeterminate),
  ns.is('icon', props.icon),
  ns.is('checked', isChecked.value),
  ns.is('disabled', isDisabled.value),
])

const switchStyles = computed(() => [
  ns.cssVar({
    color: getVsColor(color),
  }),
])
// init here
</script>
