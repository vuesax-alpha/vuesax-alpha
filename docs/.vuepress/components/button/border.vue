<template>
  <div class="center">
    <vs-button border :active="active == 0" @click="active = 0">
      Active
    </vs-button>
    <vs-button border :active="active == 1" @click="active = 1">
      Default
    </vs-button>
    <vs-button border disabled> Disabled </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref<number>(0)
</script>

<style lang="scss">
* {
  box-sizing: border-box !important;
}
</style>
<style lang="scss" scoped>
.center {
  max-width: 400px;
  margin: auto;
}
</style>
