<template>
  <vs-button @click="dialogVisible = true">click to open the Dialog</vs-button>

  <vs-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <vs-button
          color="danger"
          style="margin-right: 10px"
          @click="dialogVisible = false"
          >Cancel</vs-button
        >
        <vs-button color="primary" @click="dialogVisible = false">
          Confirm
        </vs-button>
      </span>
    </template>
  </vs-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(true)
</script>
