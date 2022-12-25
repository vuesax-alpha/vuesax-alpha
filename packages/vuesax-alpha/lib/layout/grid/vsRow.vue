<template>
  <div
    class="vs-row"
    :style="{
      justifyContent: justify,
      alignItems: align,
      flexDirection: direction,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vsRow",
  props: {
    w: {
      type: Number,
      default: 12,
    },
    justify: {
      type: String,
      default: "flex-start",
    },
    align: {
      type: String,
      default: "flex-start",
    },
    direction: {
      type: String,
      default: "row",
    },
  },
});
</script>

<style lang="scss">
.vs-row {
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin: calc(-1 * var(--row-gutter)) calc(-1 * var(--col-gutter));
}
</style>
