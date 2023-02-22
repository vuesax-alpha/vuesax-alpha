<template>
  <div class="center">
    <vs-checkbox v-model="option" val="Var"> Option </vs-checkbox>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const option = ref(true)
</script>
