<template>
  <div class="center content-inputs">
    <vs-input v-model="value" input-style="border" placeholder="Name" />

    <vs-input
      v-model="value2"
      color="#7d33ff"
      input-style="shadow"
      placeholder="Password"
      type="password"
    >
      <template #icon>
        <i class="bx bx-lock-open-alt" />
      </template>
    </vs-input>

    <vs-input
      v-model="value3"
      color="warn"
      label="Address"
      label-float
      input-style="transparent"
      icon-after
      type="email"
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
  .vs-input {
    margin: 10px;
  }
}
</style>
