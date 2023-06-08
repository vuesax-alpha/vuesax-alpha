<template>
  <div class="center con-selects">
    <vs-select v-model="value1" placeholder="Success">
      <template #message-success> Option Valid </template>
      <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
      <vs-option label="Vue" value="2"> Vue </vs-option>
      <vs-option label="Javascript" value="3"> Javascript </vs-option>
      <vs-option label="Sass" value="4"> Sass </vs-option>
      <vs-option label="Typescript" value="5"> Typescript </vs-option>
      <vs-option label="Webpack" value="6"> Webpack </vs-option>
      <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
    </vs-select>

    <vs-select v-model="value2" placeholder="Warn">
      <template #message-danger> Required </template>
      <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
      <vs-option label="Vue" value="2"> Vue </vs-option>
      <vs-option label="Javascript" value="3"> Javascript </vs-option>
      <vs-option label="Sass" value="4"> Sass </vs-option>
      <vs-option label="Typescript" value="5"> Typescript </vs-option>
      <vs-option label="Webpack" value="6"> Webpack </vs-option>
      <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
    </vs-select>

    <vs-select v-model="value3" placeholder="Danger">
      <template #message-warn>
        Select your country where you are currently
      </template>
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

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>

<style scoped lang="scss">
.con-selects {
  align-items: flex-start;
  .vs-select-content {
    margin: 10px;
  }
}
</style>
