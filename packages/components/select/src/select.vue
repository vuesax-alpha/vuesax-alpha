<template>
  <vs-tooltip
    ref="tooltipRef"
    trigger="click"
    :visible="dropMenuVisible"
    :placement="placement"
    :popper-class="ns.e('options')"
    :teleported="teleported"
    :persistent="persistent"
    :show-arrow="false"
    :offset="0"
    @show="handleMenuEnter"
  >
    <template #default>
      <div
        v-click-outside:[popperPaneRef]="handleClose"
        :class="[
          ns.b(),
          ns.is('open', dropMenuVisible),
          ns.is('hovering', states.mouseEnter),
        ]"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click.prevent="toggleMenu"
      >
        <input
          :id="inputId"
          ref="reference"
          :class="[ns.e('input'), ns.is('multiple', multiple)]"
          :readonly="readonly"
          :value="multiple ? '' : states.selectedLabel"
          @focus="handleFocus"
          @blur="handleBlur"
          @input="debouncedOnInputChange"
          @paste="debouncedOnInputChange"
          @compositionstart="handleComposition"
          @compositionupdate="handleComposition"
          @compositionend="handleComposition"
          @keydown.down.prevent="navigateOptions('next')"
          @keydown.up.prevent="navigateOptions('prev')"
          @keydown.enter.prevent="selectOption"
          @keydown.esc="handleKeydownEscape"
          @keydown.tab="states.visible = false"
        />

        <label
          v-if="label"
          :for="inputId"
          :class="[
            ns.e('label'),
            ns.is('placeholder', !modelValue && !dropMenuVisible),
          ]"
        >
          {{ label }}
        </label>

        <span
          v-if="!multiple && !labelFloat && states.currentPlaceholder"
          :class="[ns.e('placeholder'), ns.is('hidden', !!modelValue)]"
        >
          {{ states.currentPlaceholder }}
        </span>

        <vs-icon :class="ns.e('arrow')"><chevron-down /></vs-icon>
      </div>
    </template>

    <template #content>
      <div :class="ns.e('content')">
        <vs-scrollbar max-height="200" :native="nativeScrollbar">
          <slot />
        </vs-scrollbar>
      </div>
    </template>
  </vs-tooltip>
</template>

<script lang="ts" setup>
import { computed, onMounted, provide, reactive, toRefs } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { ClickOutside as vClickOutside } from '@vuesax-alpha/directives'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { VsIcon } from '@vuesax-alpha/components/icon'
import { VsScrollbar } from '@vuesax-alpha/components/scrollbar'
import { VsTooltip } from '@vuesax-alpha/components/tooltip'
import { ChevronDown } from '@vuesax-alpha/icons-vue'
import { useNamespace } from '@vuesax-alpha/hooks'
import { selectContextKey } from './tokens'
import { selectProps } from './select'
import { useSelect, useSelectStates } from './useSelect'
import type { SelectContext } from './tokens'

defineOptions({
  name: 'VsSelect',
})

const props = defineProps(selectProps)
const emit = defineEmits([
  'update:modelValue',
  'visible-change',
  'remove-tag',
  'focus',
  'change',
  'clear',
  'blur',
])

const ns = useNamespace('select')

const states = useSelectStates(props)

const {
  inputId,
  readonly,
  reference,
  tooltipRef,
  selectWrapper,
  handleMouseEnter,
  handleMouseLeave,
  selectOption,
  handleComposition,
  navigateOptions,
  handleKeydownEscape,
  dropMenuVisible,
  query,
  groupQuery,
  debouncedOnInputChange,
  optionsArray,
  handleFocus,
  handleBlur,
  toggleMenu,
  handleMenuEnter,
  handleResize,
  setSelected,
  handleClose,
  onOptionCreate,
  onOptionDestroy,
  handleOptionSelect,
} = useSelect(props, states, emit)

const {
  selected,
  filteredOptionsCount,
  hoverIndex,
  options,
  cachedOptions,
  optionsCount,
} = toRefs(states)

// @ts-ignore - directive: v-click-outside element
const popperPaneRef = computed(() => {
  return tooltipRef.value?.popperComponent?.contentRef
})

if (props.multiple && !Array.isArray(props.modelValue)) {
  emit(UPDATE_MODEL_EVENT, [])
}

if (!props.multiple && Array.isArray(props.modelValue)) {
  emit(UPDATE_MODEL_EVENT, '')
}

onMounted(() => {
  states.cachedPlaceHolder = states.currentPlaceholder = props.placeholder
  if (
    props.multiple &&
    Array.isArray(props.modelValue) &&
    props.modelValue.length > 0
  ) {
    states.currentPlaceholder = ''
  }
  useResizeObserver(selectWrapper, handleResize)

  setSelected()
})

provide(
  selectContextKey,
  reactive({
    props,
    states,
    options,
    optionsArray,
    cachedOptions,
    optionsCount,
    filteredOptionsCount,
    hoverIndex,
    handleOptionSelect,
    onOptionCreate,
    onOptionDestroy,
    selectWrapper,
    selected,
    setSelected,
    query,
    groupQuery,
  }) as SelectContext
)
</script>
