<template>
  <div class="center content-inputs">
    <vs-input v-model="value" label="Full Name" placeholder="Evan You" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
