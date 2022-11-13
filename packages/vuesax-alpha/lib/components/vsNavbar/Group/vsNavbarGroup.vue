<template>
  <div class="vs-navbar__group">
    <div ref="item" class="vs-navbar__group__item">
      <slot></slot>
    </div>
    <div ref="items" class="vs-navbar__group__items">
      <slot name="items"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import BaseComponent from "@/mixins/component.vue";

export default defineComponent({
  name: "vsNavbarGroup",
  extends: BaseComponent,
});
</script>

<style lang="scss" src="./style.scss"></style>