<template>
  <div class="center content-inputs">
    <vs-input label-placeholder="Country" v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
</script>
