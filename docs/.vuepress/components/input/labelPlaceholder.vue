<template>
  <div class="center content-inputs">
    <vs-input v-model="value" label-placeholder="Country" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
