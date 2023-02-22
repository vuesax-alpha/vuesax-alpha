<template>
  <div class="center con-selects">
    <vs-select v-model="value1" label="Group" placeholder="Group">
      <vs-option-group title="Vuejs">
        <!-- PROP: title is required -->
        <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
        <vs-option label="Vue" value="2"> Vue </vs-option>
        <vs-option label="Javascript" value="3"> Javascript </vs-option>
      </vs-option-group>
      <vs-option-group title="Others">
        <vs-option label="Sass" value="4"> Sass </vs-option>
        <vs-option label="Typescript" value="5"> Typescript </vs-option>
        <vs-option label="Webpack" value="6"> Webpack </vs-option>
        <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
      </vs-option-group>
    </vs-select>

    <vs-select
      v-model="value2"
      label="Group Filter"
      filter
      placeholder="Filter"
    >
      <vs-option-group title="Vuejs">
        <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
        <vs-option label="Vue" value="2"> Vue </vs-option>
        <vs-option label="Javascript" value="3"> Javascript </vs-option>
      </vs-option-group>
      <vs-option-group title="Others">
        <vs-option label="Sass" value="4"> Sass </vs-option>
        <vs-option label="Typescript" value="5"> Typescript </vs-option>
        <vs-option label="Webpack" value="6"> Webpack </vs-option>
        <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
      </vs-option-group>
    </vs-select>

    <vs-select
      v-model="value3"
      label="Group Multiple Filter"
      filter
      multiple
      placeholder="Group Multiple Filter"
    >
      <vs-option-group title="Vuejs">
        <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
        <vs-option label="Vue" value="2"> Vue </vs-option>
        <vs-option label="Javascript" value="3"> Javascript </vs-option>
      </vs-option-group>
      <vs-option-group title="Others">
        <vs-option label="Sass" value="4"> Sass </vs-option>
        <vs-option label="Typescript" value="5"> Typescript </vs-option>
        <vs-option label="Webpack" value="6"> Webpack </vs-option>
        <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
      </vs-option-group>
    </vs-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(['3'])
const value2 = ref(['4'])
const value3 = ref(['1'])
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
