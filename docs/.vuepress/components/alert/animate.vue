<template>
  <div class="center">
    <vs-button @click="active = !active">
      {{ active ? 'Close Alert' : 'Open Alert' }}
    </vs-button>

    <vs-alert v-model="active" closeable>
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
import { ref } from 'vue'

const active = ref<boolean>(true)
</script>

<style scoped>
.vs-button {
  margin-bottom: 4px;
}
</style>
