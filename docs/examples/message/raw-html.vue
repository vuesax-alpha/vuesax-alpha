<template>
  <el-button :plain="true" @click="openHTML">Use HTML String</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'vuesax-alpha'

const openHTML = () => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
