<template>
  <transition
    @before-enter="beforeEntercodes"
    @enter="entercodes"
    @leave="leavecodes"
  >
    <slot />
  </transition>
</template>

<script setup lang="ts">
const beforeEntercodes = (el: HTMLElement) => {
  el.style.height = `0`
  el.style.opacity = `0`
  el.style.position = 'absolute'
}

const entercodes = (el: HTMLElement) => {
  const h = el.scrollHeight
  el.style.height = `${h - 1}px`
  el.style.opacity = `1`
  el.style.position = 'relative'
}

const leavecodes = (el: HTMLElement) => {
  el.style.height = '0px'
  el.style.opacity = `0`
  el.style.position = 'absolute'
}
</script>
