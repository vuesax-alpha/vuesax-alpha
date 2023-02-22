<template>
  <div class="center con-pagination">
    <div class="con-radio">
      <vs-radio v-model="color" success val="success"> Success </vs-radio>
      <vs-radio v-model="color" danger val="danger"> Danger </vs-radio>
      <vs-radio v-model="color" warn val="warn"> Warning </vs-radio>
      <vs-radio v-model="color" dark val="dark"> Dark </vs-radio>
      <vs-radio v-model="color" color="#7d33ff" val="#7d33ff"> HEX </vs-radio>
      <vs-radio v-model="color" color="rgb(59,222,200)" val="rgb(59,222,200)">
        RGB
      </vs-radio>
    </div>
    <vs-pagination v-model="page" :color="color" :length="20" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(1)
const color = ref('success')
</script>

<style lang="scss">
.con-pagination {
  .con-radio {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .vs-radio-content {
      margin: 10px;
    }
  }
  .vs-pagination-content {
    margin: 10px 0px;
  }
}
</style>
