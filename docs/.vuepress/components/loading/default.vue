<template>
  <div class="center">
    <vs-button type="flat" @click="openLoading"> Open Loading </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { VsLoadingFn } from 'vuesax-alpha'

const openLoading = () => {
  const loadingInstance = VsLoadingFn()
  setTimeout(() => {
    loadingInstance.close()
  }, 3000)
}
</script>
