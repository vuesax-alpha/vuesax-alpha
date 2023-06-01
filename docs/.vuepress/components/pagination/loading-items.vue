<template>
  <div class="center con-pagination">
    <vs-pagination
      v-model:current-page="page"
      :loading-items="[3, 4, 9, 10, 11, 12, 19]"
      :total="50"
    />
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
