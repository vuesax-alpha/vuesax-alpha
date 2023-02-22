<template>
  <div class="center">
    <vs-button @click="openNotification"> Open Notification </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { notification } from 'vuesax-alpha'

const openNotification = () => {
  notification({
    title: 'Documentation Vuesax-alpha',
    text: 'These documents refer to the latest version of Vuesax-alpha, to see the documents of the previous versions you can do it here 👉 Vuesax4.0',
  })
}
</script>
