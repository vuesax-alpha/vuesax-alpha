<template>
  <div class="center">
    <vs-button
      block
    >
      <i class='bx bxs-paint-roll' ></i> Edit Theme
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const active = ref<number>(0);
</script>

<style lang="scss" scoped>
.center {
	max-width: 400px;
	margin: auto;
}
</style>
