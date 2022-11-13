<template>
  <i ref="icon" class="vs-icon-close" :class="[{ [`vs-icon-hover-${hover}`]: hover }]"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "iconClose",
  props: {
    hover: String,
  },
});
</script>

<style lang="scss">
.vs-icon-close {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.25s ease;
  
  &:before {
    background: rgba(var(--vs-color), 1);
    content: "";
    position: absolute;
    width: 16px;
    transform: rotate(-45deg);
    height: 2px;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:after {
    background: rgba(var(--vs-color), 1);
    content: "";
    position: absolute;
    width: 16px;
    height: 2px;
    transform: rotate(45deg);
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &.vs-icon-hover-less:hover {
    &:after {
      width: 12px;
      transform: rotate(180deg);
    }
    &:before {
      width: 12px;
      transform: rotate(180deg);
    }
  }
}
</style>
