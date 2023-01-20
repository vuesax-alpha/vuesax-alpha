<template>
  <teleport to="body">
    <transition
      :name="ns.b()"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <div
        v-if="visible"
        :class="[ns.b(), { fullScreen: fullScreen }]"
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
import { IconClose, IconLoading } from '@vuesax-alpha/components'
import {
  useDeprecated,
  useModal,
  useNamespace,
  useSameTarget,
} from '@vuesax-alpha/hooks'
import { dialogProps } from './dialog'
import { useDialog } from './composables'

defineOptions({
  name: 'VsDialog',
})

const props = defineProps(dialogProps)

useDeprecated(
  {
    from: 'overflowHidden',
    scope: 'vs-dialog',
    version: 'VuesaxAlpha',
    type: 'Prop',
    ref: 'https://vuesax.space/components/dialog#lockScroll',
    replacement: 'lockScroll',
  },
  computed(() => !!props.overflowHidden)
)

const ns = useNamespace('dialog')

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
} = useDialog(props)

useModal({ handleClose }, visible)

const clickDialog = useSameTarget(handleClose)

defineExpose({
  /** @description whether the dialog is visible */
  visible,
  /** @description dialog close method */
  close,
})
</script>
