<template>
  <div ref="$target" class="center">
    <div class="con-btns">
      <vs-button ref="$button" flat @click="openLoadingButton">Open Loading <b>Button</b></vs-button>
      <vs-button border @click="openLoading">Open Loading <b>Target</b></vs-button>
    </div>

    <div ref="$content" class="content-div">
      I am the container <br />
      of the <b>loading</b>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { loading } from "vuesax-alpha";

const $button = ref<HTMLElement>();
const $content = ref<HTMLElement>();

const openLoading = () => {
  const loadingInstance = loading({
    target: $content.value,
  });

  setTimeout(() => {
    loadingInstance.close();
  }, 3000);
};

const openLoadingButton = () => {
  const loadingInstance = loading({
    target: $button.value,
    scale: "0.6",
    background: 'danger',
    opacity: 1,
    color: "#fff",
  });

  setTimeout(() => {
    loadingInstance.close();
  }, 3000);
};
</script>

<style scoped lang="scss">
.con-btns {
  display: flex;
  align-items: center;
  justify-content: center;

  b {
    margin-left: 5px;
  }
}

.center {
  flex-direction: column;

  .content-div {
    width: 200px;
    height: 200px;
    box-shadow: 0px 6px 25px -10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 0.6rem;
  }
}
</style>
