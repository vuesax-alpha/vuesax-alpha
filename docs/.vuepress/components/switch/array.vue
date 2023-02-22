<template>
  <div class="center con-switch">
    <vs-switch v-model="options" val="html"> Html </vs-switch>
    <vs-switch v-model="options" val="css"> Css </vs-switch>
    <vs-switch v-model="options" val="javascript"> Javascript </vs-switch>
    <vs-switch v-model="options" val="vue"> Vue </vs-switch>
    <vs-switch v-model="options" val="vuesax"> Vuesax </vs-switch>

    <span class="data">
      {{ options }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const options = ref(['javascript', 'vue'])
</script>

<style lang="scss" scoped>
.con-switch {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  .vs-switch {
    margin: 5px;
  }
  .data {
    background: rgba(0, 0, 0, 0.03);
    padding: 10px 20px;
    border-radius: 18px;
    margin-top: 20px;
  }
}
</style>
