<template>
  <div class="center content-inputs">
    <vs-input
      v-model="value"
      type="password"
      label-placeholder="Password"
      :progress="getProgress"
      :show-password="hasVisiblePassword"
      icon-after
      @click-icon="hasVisiblePassword = !hasVisiblePassword"
    >
      <template #icon>
        <i v-if="!hasVisiblePassword" class="bx bx-show-alt" />
        <i v-else class="bx bx-hide" />
      </template>

      <template v-if="getProgress >= 100" #message-success>
        Secure password
      </template>
    </vs-input>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const value = ref('')
const hasVisiblePassword = ref(false)

const getProgress = computed(() => {
  let progress = 0
  // at least one number
  if (/\d/.test(value.value)) {
    progress += 20
  }
  // at least one capital letter
  if (/(.*[A-Z].*)/.test(value.value)) {
    progress += 20
  }
  // at menons a lowercase
  if (/(.*[a-z].*)/.test(value.value)) {
    progress += 20
  }
  // more than 5 digits
  if (value.value.length >= 6) {
    progress += 20
  }
  // at least one special character
  if (/[^A-Za-z0-9]/.test(value.value)) {
    progress += 20
  }
  return progress
})
</script>
