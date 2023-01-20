<template>
  <div :class="checkboxKls" :style="checkboxStyles" @click="onClickRoot">
    <div :class="ns.e('input')">
      <input
        v-bind="$attrs"
        :id="checkboxId"
        v-model="model"
        :value="value"
        :name="name"
        :disabled="isDisabled"
        type="checkbox"
        :class="ns.e('original')"
        @change="handleChange"
      />
      <div :class="ns.em('input', 'mask')">
        <icon-check v-if="!$slots.icon" :indeterminate="indeterminate" />
        <slot v-else name="icon" />
      </div>

      <icon-loading v-if="loading" />
      <template v-else />
    </div>
    <label
      v-if="hasOwnLabel"
      :for="checkboxId"
      :class="[ns.e('label'), ns.is('line-through', lineThrough)]"
    >
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </label>
    <template v-else />
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { useBaseComponent, useId, useNamespace } from '@vuesax-alpha/hooks'
import { getVsColor } from '@vuesax-alpha/utils'
import { IconCheck, IconLoading } from '@vuesax-alpha/components'
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './composables'

defineOptions({
  inheritAttrs: false,
  name: 'VsCheckbox',
})

const props = defineProps(checkboxProps)
const slots = useSlots()
defineEmits(checkboxEmits)
const ns = useNamespace('checkbox')

const checkboxId = props.id ?? useId()

const { isChecked, isDisabled, model, hasOwnLabel, onClickRoot, handleChange } =
  useCheckbox(props, slots)

const checkboxKls = computed(() => [
  ns.b(),
  useBaseComponent(props.color),
  ns.is('disabled', isDisabled.value),
  ns.is('checked', isChecked.value),
  ns.is('label-before', props.labelBefore),
  ns.is('loading', props.loading),
])

const checkboxStyles = computed(() => [
  ns.cssVar({
    color: getVsColor(props.color),
  }),
])
</script>
