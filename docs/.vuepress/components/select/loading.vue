<template>
  <div class="center con-selects">
    <vs-select v-model="value1" placeholder="Success" loading>
      <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
      <vs-option label="Vue" value="2"> Vue </vs-option>
      <vs-option label="Javascript" value="3"> Javascript </vs-option>
      <vs-option label="Sass" value="4"> Sass </vs-option>
      <vs-option label="Typescript" value="5"> Typescript </vs-option>
      <vs-option label="Webpack" value="6"> Webpack </vs-option>
      <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
    </vs-select>

    <vs-select v-model="value2" placeholder="Warn" loading multiple>
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
import { ref } from 'vue'

const value1 = ref('3')
const value2 = ref(['4', '1', '3'])
</script>

<style scoped lang="scss">
.con-selects {
  align-items: flex-start;
  .vs-select-content {
    margin: 10px;
    max-width: 40%;
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
