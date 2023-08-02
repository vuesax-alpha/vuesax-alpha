<template>
  <div class="center">
    <vs-time-select
      v-model="value"
      start="08:30"
      step="00:15"
      end="18:30"
      placeholder="Select time"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
