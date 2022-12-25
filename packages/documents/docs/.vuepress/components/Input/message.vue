<template>
  <div class="center content-inputs">
    <vs-input v-model="value1" placeholder="Email">
      <template #message-success> Email Valid </template>
    </vs-input>

    <vs-input v-model="value2" placeholder="Name">
      <template #message-danger> Required </template>
    </vs-input>

    <vs-input type="password" v-model="value3" placeholder="Password">
      <template #message-warn> Insecure password </template>
    </vs-input>

    <vs-input
      v-model="value4"
      label="Example Regex Validation"
      placeholder="vuesax@gmail.com"
    >
      <template v-if="validEmail" #message-success> Email Valid </template>
      <template v-if="!validEmail && value4 !== ''" #message-danger>
        Email Invalid
      </template>
    </vs-input>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";

const value1 = ref("vuesax@gmail.com");
const value2 = ref("");
const value3 = ref("123456");
const value4 = ref("");

const validEmail = computed(() => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value4.value);
});
</script>

<style lang="scss" scoped>
.content-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  > .vs-input-parent {
    margin: 10px;
  }
}
</style>
