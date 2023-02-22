<template>
  <div class="center">
    <vs-pagination v-model="page" infinite :length="10" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(1)
</script>
