<template>
  <div class="center">
    <vs-checkbox v-model="option1"> Primary </vs-checkbox>
    <vs-checkbox success v-model="option2"> Success </vs-checkbox>
    <vs-checkbox danger v-model="option3"> Danger </vs-checkbox>
    <vs-checkbox warn v-model="option4"> warning </vs-checkbox>
    <vs-checkbox dark v-model="option5"> dark </vs-checkbox>
    <vs-checkbox color="#7d33ff" v-model="option6"> HEX </vs-checkbox>
    <vs-checkbox color="rgb(59,222,200)" v-model="option7"> RGB </vs-checkbox>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const option1 = ref<boolean>(true);
const option2 = ref<boolean>(true);
const option3 = ref<boolean>(true);
const option4 = ref<boolean>(true);
const option5 = ref<boolean>(true);
const option6 = ref<boolean>(true);
const option7 = ref<boolean>(true);
</script>
