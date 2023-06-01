<template>
  <div class="center">
    <vs-pagination
      v-model:current-page="page"
      :layout="['total', 'prev', 'pager', 'next', 'jumper', 'sizes']"
      :total="50"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(1)
</script>
