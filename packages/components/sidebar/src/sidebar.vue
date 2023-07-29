<template>
  <div
    ref="sidebarRef"
    v-click-outside="clickCloseSidebar"
    :class="sidebarKls"
    :style="sidebarStyles"
    @mouseenter="mouseEnterSidebar"
    @mouseleave="mouseLeaveSidebar"
  >
    <div v-if="$slots.logo" :class="ns.e('logo')">
      <slot name="logo" />
    </div>

    <div v-if="$slots.header" :class="ns.e('header')">
      <slot name="header" />
    </div>

    <div :class="ns.e('body')">
      <slot />
    </div>

    <div v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, provide, ref, watch } from 'vue'
import { useBaseComponent, useColor, useNamespace } from '@vuesax-alpha/hooks'
import { ClickOutside as vClickOutside } from '@vuesax-alpha/directives'
import { getVsColor, setColor } from '@vuesax-alpha/utils'
import { sidebarContextKey } from '@vuesax-alpha/tokens'
import { sidebarEmits, sidebarProps } from './sidebar'

defineOptions({
  name: 'VsSidebar',
})

const props = defineProps(sidebarProps)
const emit = defineEmits(sidebarEmits)

const ns = useNamespace('sidebar')

const color = useColor('primary')

const sidebarRef = ref<HTMLElement>()

const staticWidth = ref<number>(260)
const reduceInternal = ref<boolean>(false)

const sidebarKls = computed(() => [
  ns.b(),
  useBaseComponent(),
  ns.is('reduce', reduceInternal.value),
  ns.is('open', props.open),
  ns.is('not-line-active', props.notLineActive),
  ns.is('not-shadow', props.notShadow),
  ns.is('text-white', props.textWhite),
  ns.is('absolute', props.absolute),
  ns.is(props.shape, !!props.shape),
  ns.is('right', props.right),
])

const sidebarStyles = computed(() => [
  ns.cssVar({
    color: getVsColor(color.value),
  }),
])

const mouseEnterSidebar = () => {
  if (props.hoverExpand) {
    reduceInternal.value = false
  }
}

const mouseLeaveSidebar = () => {
  if (props.hoverExpand) {
    reduceInternal.value = true
  }
}

const clickCloseSidebar = () => {
  emit('update:open', false)
}

const handleClickItem = (id: string) => {
  emit('update:modelValue', id)
  clickCloseSidebar()
}

watch(
  () => props.reduce,
  (val: boolean) => {
    const wrapper = sidebarRef.value
    if (!wrapper) return

    reduceInternal.value = val
    if (val) {
      wrapper.style.width = '50px'
    } else {
      wrapper.style.width = `${staticWidth.value}px`
    }
  }
)

watch(reduceInternal, (val: boolean) => {
  const wrapper = sidebarRef.value
  if (!wrapper) return

  if (val) {
    wrapper.style.width = '50px'
  } else {
    wrapper.style.width = `${staticWidth.value}px`
  }
})

watch(
  () => props.background,
  () => {
    setColor(
      'background',
      props.background || '',
      sidebarRef.value!,
      true,
      ns.namespace.value
    )
  }
)

provide(sidebarContextKey, {
  modelValue: computed(() => props.modelValue),
  reduce: computed(() => props.reduce),
  handleClickItem,
})

onMounted(() => {
  staticWidth.value = sidebarRef.value!.offsetWidth
  reduceInternal.value = props.reduce

  setColor(
    'background',
    props.background || '',
    sidebarRef.value!,
    true,
    ns.namespace.value
  )

  if (props.textWhite) {
    setColor('text', '#fff', sidebarRef.value!, true, ns.namespace.value)
  }
})
</script>
