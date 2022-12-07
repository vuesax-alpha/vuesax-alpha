<template>
  <div class="center">
    <vs-pagination infinite v-model="page" :length="10" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const page = ref(1);
</script>
