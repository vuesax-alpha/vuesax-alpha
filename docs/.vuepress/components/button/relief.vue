<template>
  <div class="center">
    <vs-button type="relief" :active="active == 0" @click="active = 0">
      Active
    </vs-button>
    <vs-button type="relief" :active="active == 1" @click="active = 1">
      Default
    </vs-button>
    <vs-button type="relief" disabled> Disabled </vs-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref<number>(0)
</script>
