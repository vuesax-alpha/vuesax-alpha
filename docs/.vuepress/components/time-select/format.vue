<template>
  <div class="center">
    <vs-time-select
      v-model="value"
      start="00:00"
      step="00:30"
      end="23:59"
      placeholder="Select time"
      format="hh:mm A"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
