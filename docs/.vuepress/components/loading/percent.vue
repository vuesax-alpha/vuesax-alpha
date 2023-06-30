<template>
  <div class="center">
    <vs-button type="flat" @click="openLoading">
      Open Loading <b>Percent</b>
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VsLoadingFn } from 'vuesax-alpha'

const percent = ref<number>(0)

const openLoading = () => {
  const loadingInstance = VsLoadingFn({
    percent: percent.value,
  })

  const interval = setInterval(() => {
    if (percent.value < 100) {
      percent.value = Number(percent.value) + 1
      loadingInstance.setPercent(percent.value)
    }
  }, 40)

  setTimeout(() => {
    loadingInstance.close()
    clearInterval(interval)
    percent.value = 0
  }, 4800)
}
</script>

<style scoped lang="scss">
b {
  margin-left: 5px;
}
</style>
