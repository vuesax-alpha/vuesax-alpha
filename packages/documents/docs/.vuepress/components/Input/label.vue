<template>
  <div class="center content-inputs">
    <vs-input
      label="Full Name"
      v-model="value"
      placeholder="Evan You"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('')
</script>
