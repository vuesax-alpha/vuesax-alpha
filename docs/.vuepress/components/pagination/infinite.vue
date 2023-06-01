<template>
  <div class="center">
    <vs-pagination v-model:current-page="page" infinite :total="50" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(1)
</script>
