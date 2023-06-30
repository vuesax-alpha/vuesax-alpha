<template>
  <div class="center">
    <vs-button type="flat" @click="openLoading">
      Open Loading <b>Text</b>
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { VsLoadingFn } from 'vuesax-alpha'

const openLoading = () => {
  const loadingInstance = VsLoadingFn({
    text: 'Loading...',
  })

  setTimeout(() => {
    loadingInstance.close()
  }, 3000)
}
</script>

<style scoped lang="scss">
b {
  margin-left: 5px;
}
</style>
