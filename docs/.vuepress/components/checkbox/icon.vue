<template>
  <div class="center checks">
    <vs-checkbox v-model="option1">
      <template #icon>
        <i class="bx bx-check" />
      </template>
    </vs-checkbox>
    <vs-checkbox v-model="option2" color="success">
      <template #icon>
        <i class="bx bx-check-double" />
      </template>
    </vs-checkbox>
    <vs-checkbox v-model="option3" color="danger">
      <template #icon>
        <i class="bx bx-x" />
      </template>
    </vs-checkbox>
    <vs-checkbox v-model="option4" color="warn">
      <template #icon>
        <i class="bx bxs-shield" />
      </template>
    </vs-checkbox>
    <vs-checkbox v-model="option5" color="dark">
      <template #icon>
        <i class="bx bxs-heart" />
      </template>
    </vs-checkbox>
    <vs-checkbox v-model="option6" color="#7d33ff">
      <template #icon>
        <i class="bx bx-brightness" />
      </template>
    </vs-checkbox>
    <vs-checkbox v-model="option7" color="rgb(59,222,200)">
      <template #icon>
        <i class="bx bxs-paint" />
      </template>
    </vs-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const option1 = ref(true)
const option2 = ref(true)
const option3 = ref(true)
const option4 = ref(false)
const option5 = ref(true)
const option6 = ref(true)
const option7 = ref(true)
</script>
<style lang="scss">
.checks {
  .vs-checkbox {
    margin: 5px;
  }
}
</style>
