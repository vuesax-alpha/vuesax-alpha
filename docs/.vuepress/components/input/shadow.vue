<template>
  <div class="center content-inputs">
    <vs-input v-model="value" shadow placeholder="Name" />

    <vs-input
      v-model="value2"
      color="#7d33ff"
      shadow
      type="password"
      placeholder="Password"
    >
      <template #icon>
        <i class="bx bx-lock-open-alt" />
      </template>
    </vs-input>

    <vs-input
      v-model="value3"
      shadow
      warn
      type="email"
      icon-after
      label-placeholder="Address"
    >
      <template #icon>
        <i class="bx bxl-bitcoin" />
      </template>
    </vs-input>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
<style lang="scss" scoped>
.content-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  > .vs-input-parent {
    margin: 10px;
  }
}
</style>
