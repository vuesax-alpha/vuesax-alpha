<template>
  <div class="center">
    <vs-alert v-model:page="page">
      <template #title> Vuesax Framework </template>

      <template #page-1>
        Page 1 - this page is a slot and in here you can add either text, html
        elements or components
      </template>

      <template #page-2>
        Page 2 - In this other page you can also put what you need and it is
        dynamic, so you can add as many pages as you need
      </template>

      <template #page-3>
        Page 3 - this is the last page of the example
      </template>
    </vs-alert>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const page = ref<number>(1)
</script>
