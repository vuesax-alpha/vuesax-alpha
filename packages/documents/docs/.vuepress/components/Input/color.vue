<template>
  <div class="center content-inputs">
    <vs-input primary v-model="value" placeholder="Primary" />

    <vs-input success v-model="value2" placeholder="Success Icon">
      <template #icon>
        <i class="bx bx-user"></i>
      </template>
    </vs-input>

    <vs-input
      danger
      icon-after
      v-model="value2"
      placeholder="Danger icon after"
    >
      <template #icon>
        <i class="bx bx-mail-send"></i>
      </template>
    </vs-input>

    <vs-input warn v-model="value4" placeholder="Label Warn" label="Warn" />

    <vs-input dark v-model="value5" label-placeholder="Dark" />

    <vs-input color="#7d33ff" v-model="value6" placeholder="HEX" />

    <vs-input color="rgb(59,222,200)" v-model="value7" placeholder="RGB" />
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
  >>> .vs-input-parent {
    margin: 10px;
  }
}
</style>
