<template>
  <div class="center con-pagination">
    <vs-pagination :loading-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const page = ref(1);
</script>

<style lang="scss">
.con-pagination {
  .vs-pagination-content {
    margin: 10px 0px;
  }
}
</style>
