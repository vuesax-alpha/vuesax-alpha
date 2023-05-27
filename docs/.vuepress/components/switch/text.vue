<template>
  <div class="center con-switch">
    <vs-switch v-model="active"> Suscribe </vs-switch>
    <vs-switch v-model="active2">
      <template #off> Off </template>
      <template #on> On </template>
    </vs-switch>
    <vs-switch v-model="active3">
      <template #off> Default </template>
      <template #on> Premium </template>
    </vs-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(false)
const active2 = ref(false)
const active3 = ref(false)
</script>

<style lang="scss" scoped>
.con-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  .vs-switch {
    margin: 10px;
  }
}
</style>
