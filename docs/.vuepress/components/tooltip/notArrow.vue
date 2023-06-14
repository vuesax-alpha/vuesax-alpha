<template>
  <div class="center">
    <vs-tooltip :show-arrow="false" placement="left">
      <vs-button type="border"> left not-arrow </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip :show-arrow="false">
      <vs-button type="border"> Top not-arrow </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip :show-arrow="false" placement="bottom">
      <vs-button type="border"> Bottom not-arrow </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip :show-arrow="false" placement="right">
      <vs-button type="border"> right not-arrow </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
  </div>
</template>
<style scoped lang="scss">
.vs-button {
  margin: 0 5px;
}
</style>
