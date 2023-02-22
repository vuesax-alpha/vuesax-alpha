<template>
  <div class="center">
    <vs-checkbox v-model="option1"> Primary </vs-checkbox>
    <vs-checkbox v-model="option2" success> Success </vs-checkbox>
    <vs-checkbox v-model="option3" danger> Danger </vs-checkbox>
    <vs-checkbox v-model="option4" warn> warning </vs-checkbox>
    <vs-checkbox v-model="option5" dark> dark </vs-checkbox>
    <vs-checkbox v-model="option6" color="#7d33ff"> HEX </vs-checkbox>
    <vs-checkbox v-model="option7" color="rgb(59,222,200)"> RGB </vs-checkbox>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const option1 = ref<boolean>(true)
const option2 = ref<boolean>(true)
const option3 = ref<boolean>(true)
const option4 = ref<boolean>(true)
const option5 = ref<boolean>(true)
const option6 = ref<boolean>(true)
const option7 = ref<boolean>(true)
</script>
