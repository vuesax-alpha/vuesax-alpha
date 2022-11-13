<template>
  <div>
    <vs-button @click="open">Open Notification</vs-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import notification from "@/functions/vsNotification/Base/notification";

export default defineComponent({
  setup() {
    const open = () => {
      notification({
        title: "Test notification",
        text: "Content",
      });
    };
    
    return { open };
  },
});
</script>

<style lang="scss" scoped></style>
