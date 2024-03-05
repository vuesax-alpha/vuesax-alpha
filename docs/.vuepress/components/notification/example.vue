<template>
  <div class="center">
    <vs-button type="border" icon @click="openNotificationUser">
      Example User
    </vs-button>
    <vs-button type="border" icon @click="openNotificationCookie">
      Example Cookie
    </vs-button>
    <vs-button type="border" icon @click="openNotificationCall">
      Example Call
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { createVNode } from 'vue'
import { VsNotification } from 'vuesax-alpha'

import user from './user.vue'
import cookie from './cookie.vue'
import call from './call.vue'

const openNotificationCookie = () => {
  VsNotification({
    duration: 0,
    content: createVNode(cookie),
  })
}
const openNotificationUser = () => {
  VsNotification({
    duration: 0,
    width: 'auto',
    content: createVNode(user),
  })
}
const openNotificationCall = () => {
  VsNotification({
    duration: 0,
    width: 'auto',
    content: createVNode(call),
    notPadding: true,
  })
}
</script>
