<template>
  <div class="center content-inputs">
    <vs-input loading v-model="value" placeholder="Name" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
</script>
