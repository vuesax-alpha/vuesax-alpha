<template>
  <div class="center con-checkbox">
    <vs-checkbox-group v-model="options">
      <vs-checkbox value="css"> Css </vs-checkbox>
      <vs-checkbox color="danger" value="html"> Html </vs-checkbox>
      <vs-checkbox color="warn" value="javascript"> Javascript </vs-checkbox>
      <vs-checkbox color="#42b883" value="vue"> Vue </vs-checkbox>
      <vs-checkbox color="dark" value="vuesax"> Vuesax </vs-checkbox>
    </vs-checkbox-group>

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
  .vs-checkbox {
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
