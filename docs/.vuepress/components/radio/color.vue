<template>
  <div class="center">
    <vs-radio v-model="picked" val="1"> Primary </vs-radio>
    <vs-radio v-model="picked" val="2" success> Success </vs-radio>
    <vs-radio v-model="picked" val="3" danger> Danger </vs-radio>
    <vs-radio v-model="picked" val="4" warn> Warning </vs-radio>
    <vs-radio v-model="picked" val="5" dark> Dark </vs-radio>
    <vs-radio v-model="picked" val="6" color="#7d33ff"> HEX </vs-radio>
    <vs-radio v-model="picked" val="7" color="rgb(59,222,200)"> RGB </vs-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const picked = ref(2)
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
