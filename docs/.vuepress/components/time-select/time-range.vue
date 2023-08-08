<template>
  <div class="center time-range">
    <vs-time-select
      v-model="startTime"
      :max-time="endTime"
      class="mr-4"
      placeholder="Start time"
      start="08:30"
      step="00:15"
      end="18:30"
    />
    <vs-time-select
      v-model="endTime"
      :min-time="startTime"
      placeholder="End time"
      start="08:30"
      step="00:15"
      end="18:30"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startTime = ref('')
const endTime = ref('')
</script>

<style lang="scss" scoped>
.time-range {
  display: flex;
  gap: 10px;
}
</style>
