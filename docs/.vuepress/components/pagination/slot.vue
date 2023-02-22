<template>
  <div class="center con-pagination">
    <vs-pagination v-model="page" :length="20">
      <vs-select v-model="page">
        <vs-option
          v-for="numberPage in 20"
          :key="numberPage"
          :label="numberPage"
          :value="numberPage"
        >
          {{ numberPage }}
        </vs-option>
      </vs-select>
    </vs-pagination>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(1)
</script>

<style lang="scss">
.con-pagination {
  .vs-select-content {
    min-width: 60px;
    margin: 0 4px;
  }
  .vs-pagination-content {
    margin: 10px 0px;
  }
}
</style>
