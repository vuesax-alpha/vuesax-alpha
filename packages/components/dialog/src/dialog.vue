<template>
  <teleport :to="selector">
    <transition
      :name="ns.b()"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <div
        v-if="visible"
        :class="rootKls"
        :style="{ zIndex }"
        @click="clickDialog.onClick"
        @mousedown="clickDialog.onMousedown"
        @mouseup="clickDialog.onMouseup"
      >
        <div :style="dialogStyles" :class="dialogKls">
          <div v-if="loading" :class="ns.e('loading')">
            <icon-loading />
          </div>
          <template v-else />

          <button v-if="!notClose" :class="ns.e('close')" @click="close">
            <icon-close :hover="'x'" />
          </button>
          <template v-else />

          <div v-if="$slots.header" :class="ns.e('header')">
            <slot name="header" />
          </div>
          <template v-else />

          <div :class="[ns.e('content'), { notFooter: !$slots.footer }]">
            <slot />
          </div>

          <div v-if="$slots.footer" :class="ns.e('footer')">
            <slot name="footer" />
          </div>
          <template v-else />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { IconClose, IconLoading } from '@vuesax-alpha/components/icon'
import {
  useModal,
  useNamespace,
  usePopperContainer,
  usePopperContainerId,
  useSameTarget,
} from '@vuesax-alpha/hooks'
import { dialogEmits, dialogProps } from './dialog'
import { useDialog } from './composables'
import { dialogDeprecated } from './deprecated'

defineOptions({
  name: 'VsDialog',
})

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)

usePopperContainer()
const { selector } = usePopperContainerId()

const ns = useNamespace('dialog')

dialogDeprecated(props)

const {
  visible,
  zIndex,
  dialogKls,
  dialogStyles,
  close,
  afterEnter,
  afterLeave,
  beforeLeave,
  handleClose,
} = useDialog(props, emit)

useModal({ handleClose }, visible)

const clickDialog = useSameTarget(handleClose)

const rootKls = computed(() => [
  ns.b(),
  ns.is('full-screen', props.fullScreen),
  ns.is('blur', props.overlayBlur),
])

defineExpose({
  /** @description whether the dialog is visible */
  visible,
  /** @description dialog close method */
  close,
})
</script>
