<template>
  <div class="center">
    <vs-button flat @click="active = true">Open Alert 10s</vs-button>
    <vs-alert v-model="active" :progress="progress">
      <template #title> Vuesax Framework </template>
      Vuesax (pronounced / vjusacks: /, as view sacks) is a
      <b>UI components framework</b> created with
      <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for
      all types of developed from the frontend lover to the backend that wants
      to easily create your visual approach to the end user
    </vs-alert>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const active = ref<boolean>(false)
const time = ref<number>(6000)
const progress = ref<number>(0)

watch(active, (val: boolean) => {
  if (val) {
    const interval = setInterval(() => {
      progress.value++
    }, time.value / 100)

    setTimeout(() => {
      active.value = false
      clearInterval(interval)
      progress.value = 0
    }, time.value)
  }
})
</script>
