<template>
  <div class="center con-switch">
    <vs-switch v-model="active" />
    <vs-switch v-model="active2" />
    <vs-switch v-model="active3" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const active = ref(false);
const active2 = ref(true);
const active3 = ref(false);
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
