<template>
  <div class="center">
    <vs-button
      @click="handleClick"
      :icon="success"
      :upload="sending"
      :color="success ? 'success' : 'primary'"
    >
      <span v-if="!success">
        <i class="bx bx-mail-send"></i>
        Send
      </span>

      <i class="bx bx-check" v-else></i>
    </vs-button>

    <vs-button
      :animate-inactive="successFace"
      @click="handleClickFace"
      :loading="loadingFace"
      color="facebook"
    >
      <i class="bx bxl-facebook-square"></i>
      {{ successFace ? "Logout" : "Facebook" }}
      <template #animate> <i class="bx bx-user"></i> Login </template>
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const sending = ref<boolean>(false);
const success = ref<boolean>(false);
const loadingFace = ref<boolean>(false);
const successFace = ref<boolean>(false);

const handleClick = () => {
  sending.value = true;

  setTimeout(() => {
    sending.value = false;
    success.value = !success.value;
  }, 2000);
};
const handleClickFace = () => {
  loadingFace.value = true;

  setTimeout(() => {
    loadingFace.value = false;
    successFace.value = !successFace.value;
  }, 2000);
};
</script>

<style scoped lang="scss">
span {
  display: flex;
  align-items: center;
  justify-content: center;
}
i {
  &.bx {
    &:not(.bx-check) {
      padding-right: 5px;
      font-size: 1.1rem;
    }
  }
}
</style>
