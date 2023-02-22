<template>
  <div class="center con-checkbox">
    <vs-checkbox v-model="options" val="html"> Html </vs-checkbox>
    <vs-checkbox v-model="options" val="css"> Css </vs-checkbox>
    <vs-checkbox v-model="options" val="javascript"> Javascript </vs-checkbox>
    <vs-checkbox v-model="options" val="vue"> Vue </vs-checkbox>
    <vs-checkbox v-model="options" val="vuesax"> Vuesax </vs-checkbox>

    <span class="data-check">
      {{ options }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const options = ref(['javascript', 'vue'])
</script>

<style scoped lang="scss">
.con-checkbox {
  flex-direction: column;
  align-items: flex-start;
  .vs-checkbox-content {
    min-width: 80px;
  }
  .data-check {
    background: rgba(0, 0, 0, 0.03);
    padding: 10px 20px;
    border-radius: 18px;
    margin-top: 20px;
  }
}
</style>
