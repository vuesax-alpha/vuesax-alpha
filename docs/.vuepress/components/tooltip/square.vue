<template>
  <div class="center">
    <vs-tooltip shape="square">
      <vs-button shape="square" type="flat"> Do hover here </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
  </div>
</template>

<style scoped lang="scss">
.vs-button {
  margin: 0px;
}
</style>
