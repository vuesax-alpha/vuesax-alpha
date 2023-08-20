<template>
  <div :class="inputKls" :style="inputStyle">
    <div
      :class="[ns.e('wrapper'), ns.is('disabled', disabled)]"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <input
        v-bind="$attrs"
        :id="inputId"
        ref="inputRef"
        v-model="model"
        :type="inputType"
        :disabled="disabled"
        :class="[ns.e('original'), ns.is('disabled', disabled)]"
        placeholder=""
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @keydown="handleKeydown"
      />

      <label
        v-if="placeholder || labelFloat"
        :for="inputId"
        :class="[
          ns.e('placeholder'),
          { [ns.em('placeholder', 'float')]: labelFloat },
          {
            [ns.em('placeholder', 'hidden')]:
              model ||
              model !== 0 ||
              inputType == 'date' ||
              inputType == 'time',
          },
        ]"
        @mousedown.prevent="NOOP"
      >
        {{ placeholder || label }}
      </label>

      <label
        v-if="!labelFloat"
        :for="inputId"
        :class="[ns.e('label')]"
        @mousedown.prevent="NOOP"
      >
        {{ label }}
      </label>

      <span
        v-if="$slots.icon"
        :class="[ns.e('icon')]"
        @mousedown.prevent="NOOP"
        @click="clickIcon"
      >
        <slot name="icon" />
      </span>
      <div v-if="loading" :class="ns.e('loading')">
        <icon-loading />
      </div>

      <transition name="clearable-transition">
        <div v-if="showClear" :class="ns.e('clearable')">
          <icon-close @click="clear" @mousedown.prevent="NOOP" />
        </div>
      </transition>

      <transition name="clearable-transition">
        <span
          v-if="isShowPassword"
          :class="ns.em('icon', 'password')"
          @click="handleShowPassword"
          @mousedown.prevent="NOOP"
        >
          <i
            class="bx"
            :class="isVisiblePassword ? 'bx-show-alt' : 'bx-hide'"
            @mousedown.prevent="NOOP"
          />
        </span>
      </transition>

      <div :class="ns.e('affects')">
        <div :class="ns.em('affects', '1')" />
        <div :class="ns.em('affects', '2')" />
      </div>
    </div>

    <div
      v-if="progress"
      :class="[ns.e('progress'), ns.em('progress', progressState)]"
    >
      <div
        :class="ns.em('progress', 'bar')"
        :style="{ width: `${progress}%` }"
      />
    </div>

    <vs-collapse-transition v-for="message in messageType" :key="message">
      <div
        v-if="$slots[`message-${message}`]"
        :class="[ns.e('message'), ns.em('message', message)]"
      >
        <slot :name="`message-${message}`" />
      </div>
    </vs-collapse-transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import { IconClose, IconLoading } from '@vuesax-alpha/components/icon'
import { VsCollapseTransition } from '@vuesax-alpha/components/collapse-transition'
import {
  useBaseComponent,
  useDeprecated,
  useId,
  useNamespace,
  useProp,
} from '@vuesax-alpha/hooks'
import { NOOP, getVsColor } from '@vuesax-alpha/utils'
import { inputEmits, inputProps } from './input'
import { useInput } from './composables'

defineOptions({
  inheritAttrs: false,
  name: 'VsInput',
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)
const slots = useSlots()

useDeprecated(
  {
    from: 'border',
    type: 'Prop',
    version: 'VuesaxAlpha',
    scope: 'vs-input',
    ref: 'https://vuesax.space/components/input#style',
    replacement: 'inputStyle',
  },
  computed(() => props.border)
)

useDeprecated(
  {
    from: 'shadow',
    type: 'Prop',
    version: 'VuesaxAlpha',
    scope: 'vs-input',
    ref: 'https://vuesax.space/components/input#style',
    replacement: 'inputStyle',
  },
  computed(() => props.shadow)
)

useDeprecated(
  {
    from: 'transparent',
    type: 'Prop',
    version: 'VuesaxAlpha',
    scope: 'vs-input',
    ref: 'https://vuesax.space/components/input#style',
    replacement: 'inputStyle',
  },
  computed(() => props.transparent)
)

useDeprecated(
  {
    from: 'labelPlaceholder',
    type: 'Prop',
    version: 'VuesaxAlpha',
    scope: 'vs-input',
    ref: 'https://vuesax.space/components/input#label',
    replacement: 'labelFloat',
  },
  computed(() => !!props.labelPlaceholder)
)

useDeprecated(
  {
    from: 'square',
    type: 'Prop',
    version: 'VuesaxAlpha',
    scope: 'vs-input',
    ref: 'https://vuesax.space/components/input#shape',
    replacement: 'shape',
  },
  computed(() => !!props.square)
)

const ns = useNamespace('input')

const inputId = props.id ?? useId()

const messageType = ['success', 'warn', 'danger', 'primary', 'dark']

const {
  model,
  inputType,
  isVisiblePassword,
  isShowPassword,
  focused,
  hovering,
  inputRef,
  blur,
  handleBlur,
  handleKeydown,
  focus,
  handleFocus,
  handleChange,
  select,
  clickIcon,
  handleShowPassword,
  handleMouseLeave,
  handleMouseEnter,
  handleInput,
  /** clearable */
  showClear,
  clear,
} = useInput(props, emit)

const inputKls = computed(() => [
  useBaseComponent(props.color),

  ns.b(),
  props.wrapClasses,
  { [ns.is(props.inputStyle)]: !!props.inputStyle },
  ns.is('block', props.block),
  ns.is('focus', focused.value),
  ns.is('hovering', hovering.value),
  ns.is(props.shape),
  ns.is('text-white', props.textWhite),

  { [ns.m(`state-${props.state}`)]: !!props.state },
  { [ns.m('has-label')]: props.label || props.labelFloat },
  { [ns.m('has-color')]: props.color },

  { [ns.m('has-icon')]: slots.icon },
  { [ns.m('icon-after')]: props.iconAfter },
  { [ns.m('icon-eye')]: props.showPassword },
  { [ns.m('icon-clearable')]: showClear.value },
])

const inputStyle = computed(() => [
  ns.cssVar({
    color: getVsColor(props.color),
  }),
  props.wrapStyles,
])

const progressState = computed(() => {
  const progress = useProp<typeof props.progress>('progress')

  if (!progress.value || progress.value <= 33) return 'danger'
  if (progress.value <= 66) return 'warn'
  return 'success'
})

defineExpose({
  /** @description HTML input element native method */
  focus,
  /** @description HTML input element native method */
  blur,
  /** @description HTML input element native method */
  select,
  /** @description clear input value */
  clear,
  /** @description HTML input element ref */
  inputRef,
})
</script>
