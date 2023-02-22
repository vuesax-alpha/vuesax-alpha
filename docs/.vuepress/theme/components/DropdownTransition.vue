<template>
  <transition
    name="dropdown"
    @enter="setHeight"
    @after-enter="unsetHeight"
    @before-leave="setHeight"
  >
    <slot />
  </transition>
</template>

<script setup lang="ts">
const setHeight = (el: HTMLElement) => {
  // explicitly set height so that it can be transitioned
  el.style.height = `${el.scrollHeight}px`
}

const unsetHeight = (el: HTMLElement) => {
  el.style.height = ''
}
</script>

<style lang="scss">
.dropdown-enter-from,
.dropdown-leave-to {
  height: 0 !important;
}
</style>
