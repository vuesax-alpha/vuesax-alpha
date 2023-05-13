<template>
  <div class="center content-inputs">
    <vs-input v-model="value1" type="text" label="Text" />
    <vs-input v-model="value2" type="password" label="Password" />
    <vs-input v-model="value3" type="search" label="Search" />
    <vs-input v-model="value4" type="number" label="Number" />
    <vs-input v-model="value5" type="url" label="Url" />
    <vs-input v-model="value6" type="time" label="time" />
    <vs-input v-model="value7" type="date" label="Date" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
</script>

<style lang="scss" scoped>
.content-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  .vs-input {
    margin: 10px;
  }
}
</style>
