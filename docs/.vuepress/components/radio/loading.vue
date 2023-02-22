<template>
  <div class="center">
    <vs-radio v-model="picked" loading val="1"> Option 1 </vs-radio>
    <vs-radio v-model="picked" loading val="2"> Option 2 </vs-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const picked = ref(1)
</script>

<style lang="scss" scoped>
.center {
  flex-direction: column;
  align-items: flex-start;
  .vs-radio-content {
    margin: 5px 0px;
  }
}
</style>
