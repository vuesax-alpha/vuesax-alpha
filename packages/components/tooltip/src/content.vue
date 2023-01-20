<template>
  <teleport :disabled="!teleported" :to="appendTo">
    <transition
      :name="transition"
      @after-leave="onTransitionLeave"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterShow"
      @before-leave="onBeforeLeave"
    >
      <div
        v-if="!shouldRender"
        v-show="shouldShow"
        ref="contentRef"
        :class="ns.b()"
        @mouseenter="onContentEnter"
        @mouseleave="onContentLeave"
        @blur="onBlur"
        @close="onClose"
      >
        <template v-if="!destroyed">
          <slot />
        </template>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { computed, inject, ref, unref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { createPopper } from '@popperjs/core'
import { TOOLTIP_INJECTION_KEY } from '@vuesax-alpha/tokens'
import { useNamespace, usePopperContainerId } from '@vuesax-alpha/hooks'
import { composeEventHandlers } from '@vuesax-alpha/utils'
import { tooltipContentProps } from './content'

const ns = useNamespace('tooltip')

const props = defineProps(tooltipContentProps)
const { selector } = usePopperContainerId()

const contentRef = ref<any>(null)
const destroyed = ref(false)
const {
  controlled,
  open,
  trigger,
  tooltipInstance,
  onClose,
  onOpen,
  onShow,
  onHide,
  onBeforeShow,
  onBeforeHide,
} = inject(TOOLTIP_INJECTION_KEY, undefined)!

const persistentRef = computed(() => {
  // For testing, we would always want the content to be rendered
  // to the DOM, so we need to return true here.
  if (process.env.NODE_ENV === 'test') {
    return true
  }
  return props.persistent
})

const shouldRender = computed(() => {
  return unref(persistentRef) ? true : unref(open)
})
const shouldShow = computed(() => {
  return props.disabled ? false : unref(open)
})

const createTooltipInstance = ({
  referenceEl,
  popperContentEl,
  arrowEl,
}: CreateTooltipInstanceParams) => {
  const options = buildPopperOptions(props, {
    arrowEl,
    arrowOffset: unref(arrowOffset),
  })
  return createPopper(referenceEl, popperContentEl, options)
}

const updateTooltip = (shouldUpdateZIndex = true) => {
  unref(tooltipInstance)?.update()
  shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex())
}

const onTransitionLeave = () => {
  onHide()
}

const stopWhenControlled = () => {
  if (unref(controlled)) return true
}

const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
  if (props.enterable && unref(trigger) === 'hover') {
    onOpen()
  }
})
const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
  if (unref(trigger) === 'hover') {
    onClose()
  }
})

const onBeforeEnter = () => {
  updateTooltip()
  onBeforeShow?.()
}
const onBeforeLeave = () => {
  onBeforeHide?.()
}
const onAfterShow = () => {
  onShow()
  stopHandle = onClickOutside(
    computed(() => {
      return contentRef.value?.popperContentRef
    }),
    () => {
      if (unref(controlled)) return
      const $trigger = unref(trigger)
      if ($trigger !== 'hover') {
        onClose()
      }
    }
  )
}
const onBlur = () => {
  if (!props.virtualTriggering) {
    onClose()
  }
}
let stopHandle: ReturnType<typeof onClickOutside>
watch(
  () => unref(open),
  (val) => {
    if (!val) {
      stopHandle?.()
    }
  },
  {
    flush: 'post',
  }
)
watch(
  () => props.content,
  () => {
    updateTooltip()
  }
)

defineExpose({
  updateTooltip,
})
</script>
