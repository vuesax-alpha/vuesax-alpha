<!-- <template>
  <div class="center">
    <vs-button flat @click="openLoading">Open Loading <b>Percent</b></vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { loading } from 'vuesax-alpha'

const percent = ref<number | string>(0)

const openLoading = () => {
  const loadingInstance = loading({
    percent: percent.value,
  })

  const interval = setInterval(() => {
    if (percent.value <= 100) {
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
</style> -->

<template>
  <div>a</div>
</template>
