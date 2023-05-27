<template>
  <div class="center con-switch">
    <vs-switch v-model="active1">
      <template #off>
        <i class="bx bxs-volume-mute" />
      </template>
      <template #on>
        <i class="bx bxs-volume-full" />
      </template>
    </vs-switch>
    <vs-switch v-model="active2" color="danger">
      <i class="bx bxs-microphone" />
    </vs-switch>
    <vs-switch v-model="active3" color="success">
      <template #off>
        <i class="bx bx-x" />
      </template>
      <template #on>
        <i class="bx bx-check" />
      </template>
    </vs-switch>
    <vs-switch v-model="active4" color="warn">
      <template #off>
        <i class="bx bxs-plane-alt" />
      </template>
      <template #on> Active </template>
    </vs-switch>
    <vs-switch v-model="active5" color="dark">
      <template #circle>
        <i v-if="!active5" class="bx bxs-moon" />
        <i v-else class="bx bxs-sun" />
      </template>
    </vs-switch>
    <vs-switch v-model="active6" color="#7d33ff" icon>
      <template #circle>
        <i v-if="active6" class="bx bxl-instagram-alt" />
        <i v-else class="bx bxl-instagram" />
      </template>
    </vs-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active1 = ref(false)
const active2 = ref(false)
const active3 = ref(false)
const active4 = ref(false)
const active5 = ref(false)
const active6 = ref(false)
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
