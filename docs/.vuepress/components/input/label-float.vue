<template>
  <div class="center content-inputs">
    <vs-input v-model="value" label="Country" label-float />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
