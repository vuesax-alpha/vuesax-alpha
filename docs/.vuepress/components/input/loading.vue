<template>
  <div class="center content-inputs">
    <vs-input v-model="value" loading placeholder="Name" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
