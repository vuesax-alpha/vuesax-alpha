<template>
  <div class="center">
    <vs-button flat @click="openLoading">Open Loading</vs-button>
  </div>
</template>

<script lang="ts" setup>
import { loading } from "vuesax-alpha";

const openLoading = () => {
  const loadingInstance = loading();
  setTimeout(() => {
    loadingInstance.close();
  }, 3000);
};
</script>
