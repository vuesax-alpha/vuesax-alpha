<template>
  <div class="center content-inputs">
    <vs-input v-model="value" state="primary" placeholder="Primary" />

    <vs-input state="success" v-model="value2" placeholder="Success Icon">
      <template #icon>
        <i class="bx bx-user"></i>
      </template>
    </vs-input>

    <vs-input
      state="danger"
      icon-after
      v-model="value3"
      placeholder="Danger icon after"
    >
      <template #icon>
        <i class="bx bx-mail-send"></i>
      </template>
    </vs-input>

    <vs-input
      state="warn"
      v-model="value4"
      placeholder="Label Warn"
      label="Warn"
    />

    <vs-input state="dark" v-model="value5" label-placeholder="Dark" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
const value5 = ref("");
const value6 = ref("");
const value7 = ref("");
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
