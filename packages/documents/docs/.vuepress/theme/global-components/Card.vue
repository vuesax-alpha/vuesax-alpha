<template>
  <div class="card">
    <div class="text">
      <slot></slot>
    </div>

    <div
      v-if="$slots.example"
      class="example"
      :class="{ mobile: $vsTheme.mobileActive }"
    >
      <slot name="example"></slot>
    </div>
    <template v-else></template>

    <div
      v-if="$slots.template || $slots.script || $slots.style"
      class="slotcode"
    >
      <codex :codesandbox="codesandbox" :codepen="codepen">
        <div v-if="$slots.template" slot="template">
          <slot name="template"></slot>
        </div>
        <template v-else></template>
        <div v-if="$slots.script" slot="script">
          <slot name="script"></slot>
        </div>
        <template v-else></template>
        <div v-if="$slots.style" slot="style">
          <slot name="style"></slot>
        </div>
        <template v-else></template>
      </codex>
    </div>
    <template v-else></template>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { vsThemeKey } from "../type";

import codex from "./codex.vue";

defineProps(["codepen", "codesandbox"]);

const $vsTheme = inject(vsThemeKey, {});
</script>

<style lang="scss">
@import "../styles/mixin";

h1 {
  & + .card {
    .text {
      h2 {
        padding-top: 20px !important;
      }
    }
  }
}
.card {
  border-radius: 20px;
  overflow: hidden;
  margin: 20px 0px;
  margin-top: 20px;
  margin-bottom: -50px;
  width: 100%;
  &:last-of-type {
    margin-bottom: 0px;
  }
  & > .text {
    ul {
      margin-left: 40px;
      padding-left: 0px;
      li {
        p {
          padding-left: 5px !important;
        }
      }
    }
  }
  .text {
    & > img {
      width: 100%;
      max-width: 600px;
      margin: auto;
      margin-top: 10px;
      display: block;
      border-radius: 20px;
    }
    h2 {
      padding-top: 120px;
      font-size: 1.3rem;
      padding-top: 80px;
      padding-left: 10px;
      padding-bottom: 0px;
    }
    p {
      padding: 5px 20px;
      margin: 0px;
      font-size: 0.85rem;
      z-index: 200;
      position: relative;
      padding-left: 10px;
      padding-top: 10px;
    }
    li {
      font-size: 0.85rem;
    }
  }
  .example {
    position: relative;
    padding: 10px;
    margin: auto;
    margin-top: 10px;
    border-radius: 5px 20px 0px 0px;
    border-bottom: 0px solid rgba(0, 0, 0, 0.03);
    background: -var(theme-layout);
    position: relative;
    overflow: hidden;
    transition: all 0.25s ease;
    width: 100%;
    height: auto;
    &:after {
      transition: all 0.25s ease;
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      border: 8px solid -var(theme-bg2);
      box-sizing: border-box;
      top: 0px;
      left: 0px;
      border-radius: 25px;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
    }
    &:before {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      width: 60px;
      height: 25px;
      content: "";
      position: absolute;
      background: -var(theme-bg2);
      box-sizing: border-box;
      top: 0px;
      left: 50%;
      transform: translate(-50%);
      border-radius: 0px 0px 8px 8px;
      transition: all 0.25s ease;
    }
    &.mobile {
      width: 260px;
      height: 520px;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 20px;
      border-radius: 25px;
      padding: 30px 20px;
      overflow: auto;
      &:after {
        opacity: 1;
        visibility: visible;
      }
      &:before {
        opacity: 1;
        visibility: visible;
      }
      & ~ .slotcode {
        .code {
          border-radius: 20px;
          background: transparent;
        }
      }
    }
  }
}
.card .text h2,
.card .text h3,
.card .text h4,
.card .text h5,
.card .text h6 {
  padding: 15px 20px;
  margin: 0px;
  border-bottom: 0px;
  padding-bottom: 10px;
  transition: all 0.25s ease;
  z-index: 200;
  position: relative;
}
.card .text h2:hover,
.card .text h3:hover,
.card .text h4:hover,
.card .text h5:hover,
.card .text h6:hover {
  padding-left: 40px;
}
@media (max-width: 500px) {
  .card .text {
    padding: 10px;
  }
}
</style>
