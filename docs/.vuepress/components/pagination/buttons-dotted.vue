<template>
  <div class="center con-pagination">
    <vs-pagination v-model:current-page="page" buttons-dotted :total="50" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(1)
</script>

<style lang="scss" scoped>
.con-pagination {
  .vs-pagination {
    margin: 10px 0px;
  }
}
</style>
