<template>
  <div ref="target" id="target" class="center">
    <vs-button flat @click="openLoading">Open Loading <b>Text</b></vs-button>
  </div>
</template>

<script lang="ts" setup>
import { loading } from "vuesax-alpha";

const openLoading = () => {
  const loadingInstance = loading({
    text: "Loading...",
  });
  setTimeout(() => {
    loadingInstance.close();
  }, 3000);
};
</script>

<style scoped lang="scss">
b {
  margin-left: 5px;
}
</style>
