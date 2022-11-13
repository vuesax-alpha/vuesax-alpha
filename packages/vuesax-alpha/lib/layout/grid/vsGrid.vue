<template>
  <div class="vs-grid">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "vsGrid",
});
</script>

<style lang="scss">
.vs-grid {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
