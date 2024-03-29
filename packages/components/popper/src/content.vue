<template>
  <teleport :to="appendTo" :disabled="!teleported">
    <transition
      :name="animation"
      @after-leave="onTransitionLeave"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterShow"
      @before-leave="onBeforeLeave"
    >
      <div
        v-if="shouldRender"
        v-show="shouldShow"
        ref="contentRef"
        :class="popperKls"
        :style="popperStyle"
        :data-popper-placement="placement"
        @mouseenter="onContentEnter"
        @mouseleave="onContentLeave"
      >
        <template v-if="!destroyed">
          <template v-if="content">
            <template v-if="rawContent">
              <div v-html="content" />
            </template>
            <template v-else>
              {{ content }}
            </template>
          </template>

          <template v-else>
            <slot />
          </template>
        </template>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import {
  computed,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
  unref,
  watch,
} from 'vue'
import { onClickOutside, unrefElement } from '@vueuse/core'
import { useNamespace } from '@vuesax-alpha/hooks'
import { popperContextKey } from '@vuesax-alpha/tokens'
import { composeEventHandlers } from '@vuesax-alpha/utils'
import { popperContentEmits, popperContentProps } from './content'

defineOptions({
  name: 'VsPopper',
})

const ns = useNamespace('popper')

const {
  contentRef,
  controlled,
  open,
  trigger,
  updatePopper,
  onOpen,
  onClose,
  onShow,
  onHide,
  onBeforeShow,
  onBeforeHide,
} = inject(popperContextKey, undefined)!

const props = defineProps(popperContentProps)
defineEmits(popperContentEmits)

const destroyed = ref(false)

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

const popperKls = computed(() => [
  ns.b(),
  ns.is('not-arrow', !props.showArrow),
  props.popperClass,
])

const togglePopperAlive = () => {
  updatePopper(false)
}

const stopWhenControlled = () => {
  if (unref(controlled)) return true
}

const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
  if (props.interactivity && unref(trigger) === 'hover') {
    onOpen()
  }
})

const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
  if (unref(trigger) === 'hover') {
    onClose()
  }
})

const onTransitionLeave = () => {
  onHide()
}

const onBeforeEnter = () => {
  updatePopper()
  onBeforeShow?.()
}

const onBeforeLeave = () => {
  onBeforeHide?.()
}

let stopHandle: ReturnType<typeof onClickOutside>

const onAfterShow = () => {
  onShow()
  stopHandle = onClickOutside(
    computed(() => {
      return unrefElement(contentRef)
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

onMounted(() => {
  watch(() => props.visible, togglePopperAlive, { immediate: true })
})

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
    updatePopper()
  }
)

onBeforeUnmount(() => {
  destroyed.value = true
})
</script>
