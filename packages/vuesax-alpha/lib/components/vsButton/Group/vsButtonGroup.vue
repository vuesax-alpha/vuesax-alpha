<template>
  <div class="vs-button__group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseComponent from "@/mixins/component.vue";

export default defineComponent({
  name: "vsButtonGroup",
  extends: BaseComponent,
  data: () => ({
    class: "",
    prototype: null,
  }),
});
</script>

<style lang="scss" src="./style.scss"></style>
