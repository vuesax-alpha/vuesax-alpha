<template>
  <transition
    name="vs-notification"
    @before-enter="onTransitionBeforeEnter"
    @enter="onTransitionEnter"
    @leave="onTransitionLeave"
  >
    <div
      v-show="visible"
      ref="notifyRef"
      :class="notifyKls"
      :style="notifyStyles"
      @click="handleClick"
    >
      <template v-if="!loading">
        <template v-if="icon">
          <div
            v-if="typeof icon === 'string'"
            :class="ns.e('icon')"
            v-html="icon"
          />
          <component :is="icon" v-else :class="ns.e('icon')" />
        </template>

        <div :class="ns.e('content')">
          <div v-if="title" :class="ns.e('title')">
            <h4>{{ title }}</h4>
          </div>

          <div v-if="text" :class="ns.e('text')">
            <p>{{ text }}</p>
          </div>

          <div v-if="typeof content === 'string'" v-html="content" />
          <component :is="content" v-else-if="content" />
        </div>
      </template>
      <div v-else :class="ns.e('loading')" />

      <button v-if="showClose" :class="ns.e('close')" @click="handleClickClose">
        <icon-close hover="less" />
      </button>

      <div
        v-if="progressAuto"
        :class="ns.e('progress')"
        :style="{ width: `${currentProgress}%` }"
      />
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, unref } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import {
  useBaseComponent,
  useColor,
  useGlobalComponentSettings,
} from '@vuesax-alpha/hooks'
import { IconClose } from '@vuesax-alpha/components/icon'
import { getVsColor } from '@vuesax-alpha/utils'
import { notificationProps } from './notification'

defineOptions({
  name: 'VsNotification',
})

const props = defineProps(notificationProps)

const { ns, zIndex } = useGlobalComponentSettings('notification')

const { currentZIndex, nextZIndex } = zIndex

const color = useColor()

const notifyRef = ref<HTMLElement>()
const visible = ref(false)
let timer: (() => void) | undefined = undefined

const notifyKls = computed(() => [
  ns.b(),
  useBaseComponent(color),
  ns.is('flat', props.flat),
  ns.is('sticky', props.sticky),
  ns.is('border', !!props.border),
  ns.is('color', !!color.value),
  ns.is('icon', !!props.icon),
  ns.is('on-click', !!props.onClick),
  ns.is('on-click-close', !!props.onClickClose),
  props.shape && ns.is(props.shape),
  ns.is('loading', props.loading),
  ns.is('not-padding', props.notPadding),
  ns.is('width-full', props.width == 'full'),
  ns.is('width-auto', props.width == 'auto'),
])

const notifyStyles = computed(() => [
  {
    zIndex: unref(currentZIndex),
  },
  ns.cssVar({
    color: getVsColor(color),
    border: getVsColor(props.border),
  }),
])

const handleClick = () => {
  props.onClick?.()
}

const handleClickClose = () => {
  if (!props.onClickClose?.()) {
    return
  }
  visible.value = false

  props.onClose?.()
}

const onTransitionBeforeEnter = (el: Element) => {
  nextZIndex()
  const _el = el as HTMLElement
  _el.style.maxHeight = `0`
  _el.style.padding = `0 20px`
}

const onTransitionEnter = (el: Element, done: () => void) => {
  const h = el.scrollHeight
  const _el = el as HTMLElement
  _el.style.maxHeight = `${h + 40}px`
  if (window.innerWidth < 600) {
    _el.style.padding = `15px`
  } else {
    _el.style.padding = `20px`
  }
  done()
}

const onTransitionLeave = (_: Element, done: () => void) => {
  setTimeout(() => {
    notifyRef.value?.remove()
    done()
    props.onClose?.()
  }, 150)
}

const startTimer = () => {
  if (props.duration > 0) {
    ;({ stop: timer } = useTimeoutFn(() => {
      if (visible.value) close()
    }, props.duration))
  }
}

const clearTimer = () => {
  timer?.()
}

const open = () => {
  clearTimer()
  startTimer()
  nextZIndex()

  visible.value = true
}

const close = () => {
  visible.value = false
}

let intervalProgress = 0
const currentProgress = ref(0)

const handleProgress = () => {
  if (props.progressAuto && props.duration > 0) {
    intervalProgress = setInterval(() => {
      currentProgress.value += 1
    }, props.duration / 100)
  }
}

onMounted(() => {
  open()
  handleProgress()
})

onBeforeUnmount(() => {
  clearInterval(intervalProgress)
})

defineExpose({
  visible,
  /** @description close notification */
  close,
  /** @description open notification */
  open,
})
</script>
