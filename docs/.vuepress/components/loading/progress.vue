<template>
  <div class="center">
    <vs-button flat @click="openLoading"
      >Open Loading <b>Progress</b></vs-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { loading } from 'vuesax-alpha'

const progress = ref<number | string>(0)

const openLoading = () => {
  const loadingInstance = loading({
    progress: 0,
  })

  const interval = setInterval(() => {
    if (progress.value <= 100) {
      progress.value = Number(progress.value) + 1
      loadingInstance.setProgress(progress.value)
    }
  }, 40)

  setTimeout(() => {
    loadingInstance.close()
    clearInterval(interval)
    progress.value = 0
  }, 4100)
}
</script>
<style scoped lang="scss">
b {
  margin-left: 5px;
}
</style>
