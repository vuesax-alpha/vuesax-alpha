<template>
  <div class="center content-inputs">
    <vs-input v-model="value" state="primary" placeholder="Primary" />

    <vs-input v-model="value2" state="success" placeholder="Success Icon">
      <template #icon>
        <i class="bx bx-user" />
      </template>
    </vs-input>

    <vs-input
      v-model="value3"
      state="danger"
      icon-after
      placeholder="Danger icon after"
    >
      <template #icon>
        <i class="bx bx-mail-send" />
      </template>
    </vs-input>

    <vs-input
      v-model="value4"
      state="warn"
      placeholder="Label Warn"
      label="Warn"
    />

    <vs-input v-model="value5" state="dark" label="Dark" label-float />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
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
