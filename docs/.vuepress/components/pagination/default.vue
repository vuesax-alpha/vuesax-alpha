<template>
  <div class="center">
    <vs-pagination v-model="page" :length="20" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(1)
</script>
