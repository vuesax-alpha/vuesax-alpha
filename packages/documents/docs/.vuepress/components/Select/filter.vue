<template>
  <div class="center con-selects">
    <vs-select filter placeholder="Filter" v-model="value">
      <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
      <vs-option label="Vue" value="2"> Vue </vs-option>
      <vs-option label="Javascript" value="3"> Javascript </vs-option>
      <vs-option label="Sass" value="4"> Sass </vs-option>
      <vs-option label="Typescript" value="5"> Typescript </vs-option>
      <vs-option label="Webpack" value="6"> Webpack </vs-option>
      <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
    </vs-select>
    <vs-select filter multiple placeholder="Filter Multiple" v-model="value2">
      <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
      <vs-option label="Vue" value="2"> Vue </vs-option>
      <vs-option label="Javascript" value="3"> Javascript </vs-option>
      <vs-option label="Sass" value="4"> Sass </vs-option>
      <vs-option label="Typescript" value="5"> Typescript </vs-option>
      <vs-option label="Webpack" value="6"> Webpack </vs-option>
      <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
    </vs-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
const value2 = ref("");
</script>

<style scoped lang="scss">
.con-selects {
  .vs-select-content {
    margin: 10px;
    max-width: calc(40% - 20px);
  }
}

@media (max-width: 500px) {
  .con-selects {
    .vs-select-content {
      max-width: 100%;
    }
  }
}
</style>
