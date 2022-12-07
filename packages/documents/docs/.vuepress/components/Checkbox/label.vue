<template>
  <div class="center con-checkbox">
    <vs-checkbox v-model="option"> Label </vs-checkbox>
    <vs-checkbox label-before v-model="option2"> Label Before </vs-checkbox>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const option = ref(true);
const option2 = ref(true);
</script>
<style scoped lang="scss">
.con-checkbox {
  flex-direction: column;
  align-items: flex-start;
}
</style>
