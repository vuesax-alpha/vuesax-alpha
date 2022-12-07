<template>
  <div class="center">
    <vs-tooltip loading>
      <vs-button flat> Do hover here loading </vs-button>
      <template #tooltip> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip loading>
      <vs-button flat> Do hover here loading </vs-button>
      <template #tooltip></template>
    </vs-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const active = ref(false);
</script>

<style scoped lang="scss">
.vs-button {
  margin: 5px;
}
</style>
