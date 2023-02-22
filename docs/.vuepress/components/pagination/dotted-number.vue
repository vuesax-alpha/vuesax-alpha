<template>
  <div class="center con-pagination">
    <vs-pagination v-model="page" :dotted-number="10" :length="100" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(1)
</script>

<style lang="scss">
.con-pagination {
  .vs-pagination-content {
    margin: 10px 0px;
  }
}
</style>
