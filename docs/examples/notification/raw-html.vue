<template>
  <el-button plain @click="open"> Use HTML String </el-button>
</template>

<script lang="ts" setup>
import { ElNotification } from 'vuesax-alpha'

const open = () => {
  ElNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
