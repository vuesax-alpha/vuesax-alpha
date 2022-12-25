<template>
  <div class="center">
    <div :style="`background: ${color};`" class="con-input">
      <input v-model="color" type="color" />
      <i class="bx bxs-color-fill"></i>
    </div>
    <vs-button flat :color="color" @click="openLoading">Open Loading</vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { loading } from "vuesax-alpha";

const color = ref("#7a76cb");

const openLoading = () => {
  const loadingInstance = loading({
    background: color.value,
    color: "#fff",
  });
  setTimeout(() => {
    loadingInstance.close();
  }, 3000);
};
</script>
<style scoped lang="scss">
@import "../../assets/styles/mixin";

.con-input {
  border-radius: 10px;
  border: 4px solid -color('theme-layout');
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  &:hover {
    transform: translate(0, -4px);
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.1);
  }
  input {
    opacity: 0;
    width: 30px;
    height: 30px;
    border: 0px;
    cursor: pointer;
  }
  i {
    position: absolute;
    color: -color('theme-layout');
    pointer-events: none;
  }
}
</style>
