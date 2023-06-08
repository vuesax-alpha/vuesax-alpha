<template>
  <div class="center con-selects">
    <vs-select v-model="value" placeholder="Select">
      <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
      <vs-option label="Vue" value="2"> Vue </vs-option>
      <vs-option label="Javascript" value="3"> Javascript </vs-option>
      <vs-option disabled label="Sass" value="4"> Sass </vs-option>
      <vs-option label="Typescript" value="5"> Typescript </vs-option>
      <vs-option label="Webpack" value="6"> Webpack </vs-option>
      <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
    </vs-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>

<style lang="scss">
.con-selects {
  .vs-select {
    margin: 15px 10px;
    max-width: calc(40% - 20px);
  }
}

@media (max-width: 500px) {
  .con-selects {
    .vs-select {
      max-width: 100%;
    }
  }
}
</style>
