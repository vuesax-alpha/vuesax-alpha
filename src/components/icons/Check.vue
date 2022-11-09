<template>
  <i class="vs-icon-check" :class="indeterminate && 'indeterminate'">
    <span>
      <div class="line1"></div>
      <div class="line2"></div>
    </span>
  </i>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "iconCheck",
  props: {
    indeterminate: Boolean,
  },
});
</script>

<style lang="scss">
.vs-icon-check {
  width: 23px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  border-radius: inherit;

  span {
    transform: rotate(45deg);
    display: block;
    position: relative;
    width: 8px;
    height: 13px;
    margin-top: -4px;

    .line1 {
      background: transparent;
      content: "";
      position: absolute;
      height: 2px;
      transition: all 0.2s ease;
      border-radius: 5px;
      z-index: 100;
      width: 8px;
      bottom: 0;

      &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background: #fff;
        transition: all 0.25s ease;
        border-radius: 5px;
        left: auto;
        right: 0;
      }
    }
    .line2 {
      bottom: 0;
      right: 0;
      z-index: 100;
      border-radius: 5px;
      background: transparent;
      content: "";
      position: absolute;
      height: 13px;
      transition: all 0.2s ease;
      width: 2px;
      &:after {
        content: "";
        position: absolute;
        width: 2px;
        height: 0;
        background: #fff;
        transition: all 0.25s ease;
        bottom: 0;
        border-radius: 5px;
      }
    }
  }

  &.active {
    &:before {
      width: 8px;
    }
    &:after {
      width: 4px;
    }
  }

  &.indeterminate span {
    transform: rotate(0);
    height: auto;
    margin: 0;
    width: 0;

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0; // checked -> 10px
      height: 2px;
      border-radius: 2px;
      background: #fff;
      display: block;
      transition: all ease .25s;
    }
    .line1 {
      transform: rotate(-45deg);
      bottom: 0;
      right: -1px;
      opacity: 0;
      display: none;
    }
    .line2 {
      right: 0 !important;
      bottom: -14px !important;
      transform: rotate(45deg) !important;
      transition: all 0.25s ease !important;
      height: 11px !important;
      display: none;
    }
  }
}
</style>
