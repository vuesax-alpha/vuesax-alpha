<template>
  <div class="switch-group">
    <vs-switch dark v-model="isDark">
      <template #off>
        <i class="bx bx-sun"></i>
      </template>
      <template #on>
        <i class="bx bx-moon"></i>
      </template>
    </vs-switch>
    <vs-switch danger v-model="check2">
      <template #circle>
        <i class="bx bxs-sun"></i>
      </template>
      <template #off>
        <i class="bx bx-sun"></i>
      </template>
      <template #on>
        <i class="bx bx-moon"></i>
      </template>
    </vs-switch>
    <vs-switch v-model="check" success></vs-switch>
    <vs-switch dark></vs-switch>
    <vs-switch danger :loading="check" v-model="check2"></vs-switch>
    <vs-switch indeterminate></vs-switch>
    <vs-switch disabled indeterminate checked color="twitter"></vs-switch>
  </div>
</template>

<script>
import { inject, ref, watch, watchEffect } from 'vue';

export default {
  setup() {
    const check = ref(true);
    const check2 = ref(true);

    const isDark = ref(false);
    const vsFunction = inject('vsFunction');

    watchEffect(() => {
      vsFunction.setTheme(!isDark.value ? "light" : "dark");
    });

    return { check, check2, isDark };
  },
};
</script>

<style lang="scss" scoped>
.switch-group {
  display: flex;
  gap: 30px;
}
</style>
