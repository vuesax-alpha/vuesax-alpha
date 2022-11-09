<template>
  <div class="flex">
    <div>
      <vs-tooltip
        v-model="isVisible"
        top
        primary
        circle
        border-thick
        not-hover
      >
        <vs-button transparent @click="handlerClick">
          Hover to open Tooltip
        </vs-button>
        <template #tooltip>tooltip</template>
      </vs-tooltip>
    </div>
    {{ isVisible }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handlerClick() {
      this.isVisible = !this.isVisible;
    },
  },
});
</script>

<style lang="scss" scoped></style>
