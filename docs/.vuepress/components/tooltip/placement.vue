<template>
  <div class="center">
    <vs-tooltip placement="left">
      <vs-button type="border"> left </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip placement="top">
      <vs-button type="border"> Top </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip placement="bottom">
      <vs-button type="border"> Bottom </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip placement="right">
      <vs-button type="border"> right </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
  </div>
</template>

<style scoped lang="scss">
.vs-button {
  margin: 0 5px;
}
</style>
