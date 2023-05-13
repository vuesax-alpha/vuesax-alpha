<template>
  <div class="center content-inputs">
    <vs-input v-model="value" color="primary" placeholder="Primary" />

    <vs-input v-model="value2" color="success" placeholder="Success Icon">
      <template #icon>
        <i class="bx bx-user" />
      </template>
    </vs-input>

    <vs-input
      v-model="value3"
      color="danger"
      icon-after
      placeholder="Danger icon after"
    >
      <template #icon>
        <i class="bx bx-mail-send" />
      </template>
    </vs-input>

    <vs-input
      v-model="value4"
      color="warn"
      placeholder="Label Warn"
      label="Warn"
    />

    <vs-input v-model="value5" color="dark" label="Dark" label-float />

    <vs-input v-model="value6" color="#7D33FF" placeholder="HEX #7D33FF" />

    <vs-input
      v-model="value7"
      color="rgb(59, 222, 200)"
      placeholder="RGB(59, 222, 200)"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
</script>

<style lang="scss" scoped>
.content-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  .vs-input {
    margin: 10px !important;
  }
}
</style>
