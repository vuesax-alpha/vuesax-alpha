<template>
  <div class="center">
    <vs-radio v-model="picked" value="1"> Label </vs-radio>
    <vs-radio v-model="picked" label-before value="2"> label Before </vs-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const picked = ref(1)
</script>
