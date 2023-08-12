<template>
  <div :class="radioKls" :style="radioStyles">
    <div :class="ns.b()">
      <input
        :id="uid"
        v-model="model"
        type="radio"
        :disabled="isDisabled"
        :readonly="isDisabled"
        :name="name"
        @focus="focus = true"
        @blur="focus = false"
      />
      <span :class="ns.e('effect')">
        <span v-if="$slots.icon" :class="ns.em('effect', 'icon')">
          <slot name="icon" />
        </span>

        <span v-if="loading" :class="ns.em('effect', 'loading')">
          <icon-loading />
        </span>
      </span>
    </div>

    <label v-if="$slots.default || label" :for="uid" :class="ns.e('label')">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import {
  useBaseComponent,
  useColor,
  useId,
  useNamespace,
} from '@vuesax-alpha/hooks'
import { getVsColor } from '@vuesax-alpha/utils'
import { IconLoading } from '@vuesax-alpha/components/icon'
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio'

defineOptions({
  name: 'VsRadio',
})

const ns = useNamespace('radio')

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const uid = useId()

const { isDisabled, loading, model, focus, checked } = useRadio(props, emit)

const color = useColor('primary')

const radioKls = computed(() => [
  useBaseComponent(),
  ns.b('wrapper'),
  ns.is('loading', loading.value),
  ns.is('disabled', isDisabled.value),
  ns.is('active', checked.value),
  ns.is('label-before', props.labelBefore),
])

const radioStyles = computed(() => [
  ns.cssVar({
    color: getVsColor(color.value),
  }),
])
</script>
