<template>
  <div class="center">
    <vs-button border icon @click="openNotificationUser">
      Example User
    </vs-button>
    <vs-button border icon @click="openNotificationCookie">
      Example Cookie
    </vs-button>
    <vs-button border icon @click="openNotificationCall">
      Example Call
    </vs-button>
  </div>
</template>

<script lang="ts" setup>
import { notification } from "vuesax-alpha";

import user from "./user.vue";
import cookie from "./cookie.vue";
import call from "./call.vue";

const openNotificationCookie = () => {
  notification({
    duration: 0,
    content: cookie,
  });
};
const openNotificationUser = () => {
  notification({
    duration: 0,
    width: "auto",
    content: user,
  });
};
const openNotificationCall = () => {
  notification({
    duration: 0,
    width: "auto",
    content: call,
    notPadding: true,
  });
};
</script>
