<template>
  <div class="center">
    <vs-radio v-model="picked" val="1">
      Yen
      <template #icon>
        <i class="bx bx-yen" />
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="2">
      Won
      <template #icon>
        <i class="bx bx-won" />
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="3">
      Pound
      <template #icon>
        <i class="bx bx-pound" />
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="4">
      Euro
      <template #icon>
        <i class="bx bx-euro" />
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="5">
      Rupee
      <template #icon>
        <i class="bx bx-rupee" />
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="6">
      Bitcoin
      <template #icon>
        <i class="bx bx-bitcoin" />
      </template>
    </vs-radio>
    <vs-radio v-model="picked" val="7">
      Dollar
      <template #icon>
        <i class="bx bx-dollar" />
      </template>
    </vs-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const picked = ref(1)
</script>

<style lang="scss" scoped>
.center {
  flex-direction: column;
  align-items: flex-start;
  .vs-radio-content {
    margin: 5px 0px;
  }
}
</style>
