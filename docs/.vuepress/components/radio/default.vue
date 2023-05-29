<template>
  <div class="center">
    <vs-radio v-model="picked" value="1"> Option A </vs-radio>
    <vs-radio v-model="picked" value="2"> Option B </vs-radio>
    <vs-radio v-model="picked" value="3" disabled> Option C </vs-radio>
    <vs-radio v-model="picked" value="4"> Option D </vs-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const picked = ref(1)
</script>

<style scoped lang="scss">
.center {
  align-items: flex-start;
  flex-direction: column;
  .vs-radio-wrapper {
    margin: 5px 0px;
  }
}
</style>
