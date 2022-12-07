<template>
  <div class="center">
    <vs-button flat @click="active = !active">
      Open Dialog Not Padding
    </vs-button>
    <vs-dialog not-close auto-width not-padding v-model="active">
      <div class="con-image">
        <img src="/foto1.png" alt="" />
      </div>
    </vs-dialog>
  </div>
</template>

<script lang="ts" setup>
const { ref } = require("vue");

const active = ref(false);
</script>

<style lang="scss">
.con-image {
  border-radius: inherit;
  img {
    display: block;
    position: relative;
    border-radius: inherit;
    max-width: 350px;
  }
}
</style>
