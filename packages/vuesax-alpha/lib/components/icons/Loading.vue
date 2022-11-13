<template>
  <div class="vs-icon-loading">
    <svg viewBox="0 0 50 50" class="vs-icon-loading__item vs-icon-loading__1">
      <circle class="path" cx="25" cy="25" r="25"></circle>
    </svg>
    <svg viewBox="0 0 50 50" class="vs-icon-loading__item vs-icon-loading__2">
      <circle class="path" cx="25" cy="25" r="25"></circle>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "iconLoading",
});
</script>

<style lang="scss">
@import "../../styles/_mixins.scss";

.vs-icon-loading {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  // height: 100%;
  // max-width: 44px;
  // max-height: 44px;
  max-width: 50px;
  max-height: 50px;
  border-radius: 9999px;
  z-index: 999999;
  color: -color("color");
  transition: all 0.25s linear;

  &__item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // width: 100%;
    // height: 100%;
    border-radius: inherit;

    .path {
      stroke: currentColor;
      stroke-width: 10;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: none;
    }
  }

  &__1 {
    animation: rotate 0.88s ease infinite 0.11s;

    .path {
      stroke-dasharray: 60 150;
    }
  }
  &__2 {
    opacity: 0.6;
    animation: rotate 0.88s linear infinite;

    .path {
      stroke-dasharray: 5 130;
    }
  }
}
</style>
