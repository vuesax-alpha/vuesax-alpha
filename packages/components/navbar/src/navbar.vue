<template>
  <div ref="el$" :class="navbarKls" :style="navbarStyles">
    <div :class="ns.e('content')">
      <div v-if="isLeft" ref="left$" :class="ns.e('left')">
        <slot name="left" />
      </div>

      <div v-if="isCenter" ref="center$" :class="ns.e('center')">
        <slot />
      </div>

      <div v-if="isRight" ref="right$" :class="ns.e('right')">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue'
import { useEventListener } from '@vueuse/core'
import { useBaseComponent, useNamespace } from '@vuesax-alpha/hooks'
import { getVsColor } from '@vuesax-alpha/utils'
import { navbarEmits, navbarProps } from './navbar'

defineOptions({
  name: 'VsNavbar',
})

const props = defineProps(navbarProps)
const emit = defineEmits(navbarEmits)

const ns = useNamespace('navbar')

const el$ = ref<HTMLElement>()
const left$ = ref<HTMLElement>()
const right$ = ref<HTMLElement>()
const center$ = ref<HTMLElement>()

const state = reactive({
  scrollTop: 0,

  collapsedWidth: 0,
  collapsedForced: false,

  hidden: false,
  shadowActive: false,
  paddingScrollActive: false,
  lineNotTransition: false,
})

const navbarKls = computed(() => [
  ns.b(),
  useBaseComponent(props.color),

  ns.is('fixed', props.fixed),
  ns.is('shadow', props.shadow),
  ns.is('hidden', state.hidden),
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
  const navbar: any = el$.value

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

onMounted(() => {
  nextTick(() => {
    if (el$.value && left$.value && center$.value && right$.value) {
      const left = left$.value
      const center = center$.value
      const right = right$.value
      const navbar = el$.value

      const GAP_PADDING_SLOT = 120 + 30
      state.collapsedWidth =
        left.offsetWidth +
        center.offsetWidth +
        right.offsetWidth +
        GAP_PADDING_SLOT

      if (navbar.offsetWidth < state.collapsedWidth) {
        state.collapsedForced = true
        emit('collapsed', true)
        handleResize()
      }
    }
  })

  handleScroll()
  useEventListener(window, 'resize', handleResize)
})
</script>
