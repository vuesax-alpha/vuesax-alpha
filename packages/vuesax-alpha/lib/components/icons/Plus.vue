<template>
  <i ref="icon" class="vs-icon-plus" :class="less && 'less'"></i>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
  name: "iconPlus",
  props: {
    less: Boolean,
  },
});
</script>

<style lang="scss">
.vs-icon-plus {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.25s ease;
  cursor: pointer;

  &:before {
    background: rgba(var(--vs-color), 1);
    content: "";
    position: absolute;
    width: 14px;
    transform: rotate(0deg);
    height: 2px;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  &:after {
    background: rgba(var(--vs-color), 1);
    content: "";
    position: absolute;
    width: 14px;
    height: 2px;
    transform: rotate(90deg);
    border-radius: 2px;
    transition: all 0.4s ease;
  }
  &:hover:not(.less) {
    transform: rotate(-90deg);
  }
  &.less {
    &:hover {
      transform: scale(0.75);
    }
    &:after {
      transform: rotate(180deg);
    }
  }
}
</style>
