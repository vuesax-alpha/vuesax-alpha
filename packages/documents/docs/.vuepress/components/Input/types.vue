<template>
  <div class="center content-inputs">
    <vs-input type="text" v-model="value1" label="Text" />
    <vs-input type="password" v-model="value2" label="Password" />
    <vs-input type="search" v-model="value3" label="Search" />
    <vs-input type="number" v-model="value4" label="Number" />
    <vs-input type="url" v-model="value5" label="Url" />
    <vs-input type="time" v-model="value6" label="time" />
    <vs-input type="date" v-model="value7" label="Date" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
const value5 = ref("");
const value6 = ref("");
const value7 = ref("");
</script>

<style lang="scss" scoped>
.content-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  & > {
    & > {
      & > .vs-input-parent {
        margin: 10px;
      }
    }
  }
}
</style>
