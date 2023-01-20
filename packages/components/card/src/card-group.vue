<template>
  <div :class="ns.e('group')">
    <button :class="ns.em('group', 'prev')" @click="handleClickPrevicon">
      <icon-arrow />
    </button>

    <vs-scrollbar
      ref="scrollbarRef"
      always
      :view-class="ns.em('group', 'cards')"
      @scroll="handleScrollbar"
    >
      <slot />
    </vs-scrollbar>
    <div :class="ns.em('group', 'space')" />

    <button :class="ns.em('group', 'next')" @click="handleClickNexticon">
      <icon-arrow />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IconArrow, VsScrollbar } from '@vuesax-alpha/components'
import { useNamespace } from '@vuesax-alpha/hooks'
import type {
  ScrollEmitParams,
  ScrollbarInstance,
} from '@vuesax-alpha/components'

defineOptions({
  name: 'VsCardGroup',
})

const ns = useNamespace('card')

const scrollbarRef = ref<ScrollbarInstance>()

const scrollbar = ref<ScrollEmitParams>({
  scrollTop: 0,
  scrollLeft: 0,
})

const handleScrollbar = ({ scrollTop, scrollLeft }: ScrollEmitParams) => {
  scrollbar.value = { scrollTop, scrollLeft }
}

const handleClickNexticon = () => {
  const cards = scrollbarRef.value!
  cards.wrapRef!.style.scrollBehavior = 'smooth'
  cards.scrollTo(scrollbar.value.scrollLeft + cards.wrapRef!.clientWidth, 0)
  cards.wrapRef!.style.scrollBehavior = 'unset'
}
const handleClickPrevicon = () => {
  const cards = scrollbarRef.value!
  cards.wrapRef!.style.scrollBehavior = 'smooth'
  cards.scrollTo(scrollbar.value.scrollLeft - cards.wrapRef!.clientWidth, 0)
  cards.wrapRef!.style.scrollBehavior = 'unset'
}
// init here
</script>
