<template>
  <i 
    ref="icon" 
    class="vs-icon-arrow" 
    :class="less && 'less'"
  ></i>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "iconArrow",
  props: {
    less: Boolean,
  },
});
</script>

<style lang="scss">
@import "../../styles/_use.scss";

.vs-icon-arrow {
  pointer-events: none;
  width: 7px;
  height: 7px;
  transform: rotate(-135deg);
  transition: all .25s ease;
  transform-origin: center;

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    display: block;
    border-radius: 2px;
    width: 100%;
    height: 1px;
    background: -color('text');
  }

  &::before {
    content: '';
    border-radius: 2px;
    position: absolute;
    display: block;
    top: 0px;
    height: 100%;
    width: 1px;
    background: -color('text');
  }
}
</style>
