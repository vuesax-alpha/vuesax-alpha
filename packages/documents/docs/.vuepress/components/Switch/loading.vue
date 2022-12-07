<template>
  <div class="center con-switch">
    <vs-switch v-model="activeLoading"> Active Loading </vs-switch>
    <vs-switch :loading="activeLoading" v-model="active2" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeLoading = ref(true);
const active2 = ref(false);
</script>

<style lang="scss" scoped>
.con-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  & > {
    & > {
      & > .vs-switch {
        margin: 10px;
      }
    }
  }
}
</style>
