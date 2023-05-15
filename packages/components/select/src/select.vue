<template>
  <vs-tooltip
    ref="tooltipRef"
    trigger="click"
    :style="selectStyle"
    :visible="dropMenuVisible"
    :placement="placement"
    :popper-class="[ns.e('options'), useBaseComponent(color)]"
    :teleported="teleported"
    :persistent="persistent"
    :show-arrow="false"
    :offset="0"
    @show="handleMenuEnter"
  >
    <template #default>
      <div
        v-click-outside:[popperPaneRef]="handleClose"
        :class="selectKls"
        :style="selectStyle"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @click.prevent="toggleMenu"
      >
        <input
          v-if="filter"
          ref="input"
          v-model="query"
          type="text"
          :class="[
            ns.e('input'),
            ns.e('input-filter'),
            ns.is('disabled', selectDisabled),
          ]"
          :placeholder="states.selectedLabel ? '' : states.query ?? ''"
          :disabled="selectDisabled"
          @focus="handleFocus"
          @blur="handleBlur"
          @keyup="managePlaceholder"
          @keydown.down.prevent="navigateOptions('next')"
          @keydown.up.prevent="navigateOptions('prev')"
          @keydown.esc="handleKeydownEscape"
          @keydown.enter.stop.prevent="selectOption"
          @keydown.delete="deletePrevTag"
          @keydown.tab="visible = false"
          @compositionstart="handleComposition"
          @compositionupdate="handleComposition"
          @compositionend="handleComposition"
          @input="debouncedQueryChange"
        />
        <vs-input
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
            ns.is(
              'placeholder',
              labelFloat &&
                !dropMenuVisible &&
                (isEqual(modelValue, notValue) ||
                  (!modelValue && modelValue != 0))
            ),
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

        <vs-icon :class="ns.e('arrow')" size="14"><chevron-down /></vs-icon>

        <transition name="v-clearable">
          <span
            v-if="showClose"
            class="vs-select__clearable"
            @click="handleClearClick"
          >
            <icon-close hover="less" scale="0.675" />
          </span>
        </transition>
      </div>
    </template>

    <template #content>
      <div :class="ns.e('content')">
        <vs-scrollbar thickness="3" max-height="200" :native="nativeScrollbar">
          <slot />
        </vs-scrollbar>
      </div>
    </template>
  </vs-tooltip>
</template>

<script lang="ts" setup>
import { computed, onMounted, provide, reactive, toRefs } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { isEqual } from 'lodash-unified'
import { ClickOutside as vClickOutside } from '@vuesax-alpha/directives'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { IconClose, VsIcon } from '@vuesax-alpha/components/icon'
import { VsInput } from '@vuesax-alpha/components/input'
import { VsScrollbar } from '@vuesax-alpha/components/scrollbar'
import { VsTooltip } from '@vuesax-alpha/components/tooltip'
import { ChevronDown } from '@vuesax-alpha/icons-vue'
import { useBaseComponent, useNamespace } from '@vuesax-alpha/hooks'
import { getVsColor } from '@vuesax-alpha/utils'
import { selectContextKey } from './tokens'
import { selectEmits, selectProps } from './select'
import { useSelect, useSelectStates } from './useSelect'
import type { SelectContext } from './tokens'

defineOptions({
  name: 'VsSelect',
})

const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)

const ns = useNamespace('select')

const states = useSelectStates(props)

const {
  debouncedQueryChange,
  managePlaceholder,
  deletePrevTag,
  handleClearClick,
  showClose,
  input,
  inputId,
  readonly,
  reference,
  tooltipRef,
  selectDisabled,
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
  focus,
  blur,
} = useSelect(props, states, emit)

const {
  visible,
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

const selectKls = computed(() => [
  ns.is('block', props.block),

  ns.b(),
  ns.em('state', props.state),
  ns.is('open', dropMenuVisible.value),
  ns.is('hovering', states.mouseEnter),
  ns.is('focus', states.softFocus),
  ns.is('disabled', selectDisabled.value),
  ns.is('multiple', props.multiple),
  ns.is('loading', props.loading),
  { [ns.m('has-label')]: props.label || props.labelFloat },
])

const selectStyle = computed(() => [
  ns.cssVar({
    color: getVsColor(props.color),
  }),
])

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

defineExpose({
  /** focus to select */
  focus,

  /** blur select */
  blur,
})
</script>
