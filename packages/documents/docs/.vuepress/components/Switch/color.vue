<template>
  <div class="center con-switch">
    <vs-switch v-model="active1" />
    <vs-switch success v-model="active2" />
    <vs-switch danger v-model="active3" />
    <vs-switch warn v-model="active4" />
    <vs-switch dark v-model="active5" />
    <vs-switch color="#7d33ff" v-model="active6" />
    <vs-switch color="rgb(59,222,200)" v-model="active7" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const active1 = ref(true);
const active2 = ref(true);
const active3 = ref(true);
const active4 = ref(true);
const active5 = ref(true);
const active6 = ref(true);
const active7 = ref(true);
</script>

<style lang="scss" scoped>
.con-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  .vs-switch {
    margin: 10px;
  }
}
</style>
