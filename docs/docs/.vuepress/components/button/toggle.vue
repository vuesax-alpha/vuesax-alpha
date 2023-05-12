<template>
  <div class="center">
    <vs-button
      @click="handleClickMail"
      :icon="successMail"
      :upload="sendingMail"
      :color="successMail ? 'success' : 'primary'"
    >
      <span v-if="!successMail">
        <i class="bx bx-mail-send" />
        Send
      </span>

      <i class="bx bx-check" v-else />
    </vs-button>

    <vs-button
      :animate-inactive="successFace"
      @click="handleClickFace"
      :loading="loadingFace"
      color="facebook"
    >
      <i class="bx bxl-facebook-square" />
      {{ successFace ? 'Logout' : 'Facebook' }}
      <template #animate> <i class="bx bx-user" /> Login </template>
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const sendingMail = ref<boolean>(false)
const successMail = ref<boolean>(false)
const loadingFace = ref<boolean>(false)
const successFace = ref<boolean>(false)

const handleClickMail = () => {
  sendingMail.value = true

  setTimeout(() => {
    sendingMail.value = false
    successMail.value = !successMail.value
  }, 2000)
}
const handleClickFace = () => {
  loadingFace.value = true

  setTimeout(() => {
    loadingFace.value = false
    successFace.value = !successFace.value
  }, 2000)
}
</script>

<style scoped lang="scss">
span {
  display: flex;
  align-items: center;
  justify-content: center;
}
i.bx:not(.bx-check) {
  padding-right: 5px;
  font-size: 1.1rem;
}
</style>
