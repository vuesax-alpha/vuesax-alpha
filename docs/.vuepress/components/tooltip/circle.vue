<template>
  <div class="center">
    <vs-tooltip shape="circle">
      <vs-button shape="circle" type="flat"> Do hover here </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
  </div>
</template>

<style scoped lang="scss">
.vs-button {
  margin: 0px;
}
</style>
