<template>
  <div class="center con-checkbox">
    <vs-checkbox v-model="option1">
      {{ option1 }}
    </vs-checkbox>
    <vs-checkbox v-model="option2">
      {{ option2 }}
    </vs-checkbox>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const option1 = ref<boolean>(true);
const option2 = ref<boolean>(false);
</script>

<style scoped lang="scss">
.con-checkbox {
  flex-direction: column;
  align-items: flex-start;
  > .vs-checkbox-content {
    min-width: 80px;
  }
}
</style>
