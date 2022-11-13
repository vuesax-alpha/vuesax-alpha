<template>
  <div class="flex">
    <vs-radio v-model="radio" danger val="1"></vs-radio>
    <vs-radio v-model="radio" loading primary val="2"></vs-radio>
    <vs-radio v-model="radio" dark val="3"></vs-radio>
    <vs-radio v-model="radio" loading val="4"></vs-radio>
    <vs-radio v-model="radio" loading val="5"></vs-radio>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const radio = ref('4');

    return { radio }
  }
}
</script>
