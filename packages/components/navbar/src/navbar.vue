<template>
  <div ref="navbarRef" :class="navbarKls" :style="navbarStyles">
    <div :class="ns.e('content')">
      <div v-if="isLeft" ref="navbarLeftRef" :class="ns.e('left')">
        <slot name="left" />
      </div>

      <div v-if="isCenter" ref="navbarCenterRef" :class="ns.e('center')">
        <slot />
      </div>

      <div v-if="isRight" ref="navbarRightRef" :class="ns.e('right')">
        <slot name="right" />
      </div>
    </div>

    <div
      v-if="!notLine"
      :class="[ns.e('line'), ns.is('not-transition', !line.transition)]"
      :style="{
        left: `${line.left}px`,
        width: `${line.width}px`,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
} from 'vue'
import { useEventListener } from '@vueuse/core'
import { useBaseComponent, useNamespace } from '@vuesax-alpha/hooks'
import { getVsColor } from '@vuesax-alpha/utils'
import {
  navbarContextKey,
  navbarRegisterContextKey,
} from '@vuesax-alpha/tokens/navbar'
import { UPDATE_MODEL_EVENT } from '@vuesax-alpha/constants'
import { navbarEmits, navbarProps } from './navbar'

defineOptions({
  name: 'VsNavbar',
})

const props = defineProps(navbarProps)
const emit = defineEmits(navbarEmits)

const ns = useNamespace('navbar')

const navbarRef = ref<HTMLElement>()
const navbarLeftRef = ref<HTMLElement>()
const navbarRightRef = ref<HTMLElement>()
const navbarCenterRef = ref<HTMLElement>()

const children = reactive<Set<string>>(new Set())

const state = reactive({
  scrollTop: 0,

  collapsedWidth: 0,
  collapsedForced: false,

  hidden: false,
  shadowActive: false,
  paddingScrollActive: false,
  lineNotTransition: false,
})

const line = reactive({
  left: 0,
  width: 0,
  transition: false,
})

const navbarKls = computed(() => [
  ns.b(),
  useBaseComponent(props.color),

  ns.is('fixed', props.fixed),
  ns.is('shadow', props.shadow),
  // ns.is('hidden', state.hidden),
  ns.is('shadow-active', state.shadowActive),
  ns.is('text-white', props.textWhite),
  ns.is('padding-scroll', props.paddingScroll),
  ns.is('padding-scroll-active', state.paddingScrollActive),
  ns.is('square', props.square),
])

const navbarStyles = computed(() =>
  ns.cssVar({
    color: getVsColor(props.color),
  })
)

const scroll = () => {
  const _scrollTop = props.targetScroll
    ? document.querySelector(props.targetScroll)!.scrollTop
    : window.pageYOffset
  if (props.hideScroll) {
    if (Math.sign(_scrollTop - state.scrollTop) === 1) {
      state.hidden = true
    } else {
      state.hidden = false
    }
  }

  if (props.shadowScroll) {
    if (_scrollTop > 0) {
      state.shadowActive = true
    } else {
      state.shadowActive = false
    }
  }

  if (props.paddingScroll) {
    if (_scrollTop > 0) {
      state.paddingScrollActive = true
    } else {
      state.paddingScrollActive = false
    }
  }
  state.scrollTop = _scrollTop
}

const handleLine = (transition = true) => {
  const navItemActive: HTMLElement | null | undefined =
    navbarRef.value?.querySelector('[aria-item-active="true"]')
  if (!navItemActive) {
    line.width = 0
    line.left = 0
    line.transition = false
    return
  }

  line.width = navItemActive.scrollWidth
  line.left = navItemActive.offsetLeft
  line.transition = transition
}

const handleScroll = () => {
  if (props.hideScroll || props.shadowScroll || props.paddingScroll) {
    if (props.targetScroll) {
      const scrollElement = document.querySelector(props.targetScroll)
      scrollElement?.addEventListener('scroll', scroll)
    } else {
      window.addEventListener('scroll', scroll)
    }
  }
}

const handleResize = () => {
  handleLine(false)

  const navbar = navbarRef.value!

  if (props.leftCollapsed || props.centerCollapsed || props.rightCollapsed) {
    if (navbar.offsetWidth < state.collapsedWidth) {
      state.collapsedForced = true
    }
  }

  if (state.collapsedForced) {
    emit('collapsed', true)
  } else {
    emit('collapsed', false)
  }

  if (navbar.offsetWidth < state.collapsedWidth) {
    emit('collapsed', true)
  } else {
    emit('collapsed', false)
    state.collapsedForced = false
  }
}

const isLeft = computed(() =>
  props.leftCollapsed ? !state.collapsedForced : true
)
const isRight = computed(() =>
  props.rightCollapsed ? !state.collapsedForced : true
)
const isCenter = computed(() =>
  props.centerCollapsed ? !state.collapsedForced : true
)

watch(
  [() => props.hideScroll, () => props.paddingScroll, () => props.shadowScroll],
  handleScroll
)

watch(
  () => props.modelValue,
  () => {
    nextTick(() => {
      handleLine()
    })
  }
)

provide(navbarContextKey, {
  modelValue: computed(() => props.modelValue),
})

provide(navbarRegisterContextKey, (id: string) => {
  children.add(id)

  return {
    unregister: () => children.delete(id),
    onClick: () => emit(UPDATE_MODEL_EVENT, id),
    isActive: computed(() => props.modelValue === id),
  }
})

onMounted(() => {
  nextTick(() => {
    if (
      navbarRef.value &&
      navbarLeftRef.value &&
      navbarCenterRef.value &&
      navbarRightRef.value
    ) {
      const left = navbarLeftRef.value
      const center = navbarCenterRef.value
      const right = navbarRightRef.value
      const navbar = navbarRef.value

      const GAP_PADDING_SLOT = 120 + 30
      state.collapsedWidth =
        left.offsetWidth +
        center.offsetWidth +
        right.offsetWidth +
        GAP_PADDING_SLOT

      if (navbar.offsetWidth < state.collapsedWidth) {
        state.collapsedForced = true
        emit('collapsed', true)
        line.width = 0
        handleResize()
      }
    }
  })

  handleScroll()
  useEventListener(window, 'resize', handleResize)
})
</script>
