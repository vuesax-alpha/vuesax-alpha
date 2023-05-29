<template>
  <div class="center">
    <vs-radio v-model="picked" loading value="1"> Option 1 </vs-radio>
    <vs-radio v-model="picked" loading value="2"> Option 2 </vs-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const picked = ref(1)
</script>
