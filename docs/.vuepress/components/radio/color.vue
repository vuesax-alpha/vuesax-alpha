<template>
  <div class="center">
    <vs-radio v-model="picked" value="1"> Primary </vs-radio>
    <vs-radio v-model="picked" value="2" color="success"> Success </vs-radio>
    <vs-radio v-model="picked" value="3" color="danger"> Danger </vs-radio>
    <vs-radio v-model="picked" value="4" color="warn"> Warning </vs-radio>
    <vs-radio v-model="picked" value="5" color="dark"> Dark </vs-radio>
    <vs-radio v-model="picked" value="6" color="#7d33ff"> HEX </vs-radio>
    <vs-radio v-model="picked" value="7" color="rgb(59,222,200)">
      RGB
    </vs-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const picked = ref(2)
</script>
<style scoped lang="scss">
.center {
  align-items: flex-start;
  flex-direction: column;
  .vs-radio-wrapper {
    margin: 5px 0px;
  }
}
</style>
