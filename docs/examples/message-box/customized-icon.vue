<template>
  <el-button text @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue'
import { ElMessageBox } from 'vuesax-alpha'
import { Delete } from '@vuesax-alpha/icons-vue'

const open = () => {
  ElMessageBox.confirm(
    'It will permanently delete the file. Continue?',
    'Warning',
    {
      type: 'warning',
      icon: markRaw(Delete),
    }
  )
}
</script>
