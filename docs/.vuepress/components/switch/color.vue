<template>
  <div class="center con-switch">
    <vs-switch v-model="active1" />
    <vs-switch v-model="active2" success />
    <vs-switch v-model="active3" danger />
    <vs-switch v-model="active4" warn />
    <vs-switch v-model="active5" dark />
    <vs-switch v-model="active6" color="#7d33ff" />
    <vs-switch v-model="active7" color="rgb(59,222,200)" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active1 = ref(true)
const active2 = ref(true)
const active3 = ref(true)
const active4 = ref(true)
const active5 = ref(true)
const active6 = ref(true)
const active7 = ref(true)
</script>

<style lang="scss" scoped>
.con-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  .vs-switch {
    margin: 10px;
  }
}
</style>
