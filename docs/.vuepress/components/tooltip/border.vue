<template>
  <div class="center">
    <vs-tooltip type="border">
      <vs-button type="transparent"> Do hover here </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip color="danger" type="border">
      <vs-button color="danger" type="transparent"> Do hover here </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip color="#7d33ff" type="border-thick">
      <vs-button color="#7d33ff" type="transparent"> Do hover here </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
  </div>
</template>

<style scoped lang="scss">
.vs-button {
  margin: 0 5px;
}
</style>
