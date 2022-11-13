<template>
  <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <slot></slot>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: String,
  },
  setup() {
    const beforeEnter = (el: HTMLElement) => {
      el.style.height = "0";
    };

    const enter = (el: HTMLElement, done: any) => {
      let h = el.scrollHeight;
      el.style.height = h - 1 + "px";
      done();
    };

    const leave = (el: HTMLElement, done: any) => {
      el.style.minHeight = "0px";
      el.style.height = "0px";
    };

    return {
      beforeEnter,
      enter,
      leave,
    };
  },
});
</script>
