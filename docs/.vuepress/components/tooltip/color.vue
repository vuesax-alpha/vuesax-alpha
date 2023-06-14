<template>
  <div class="center">
    <vs-tooltip>
      <vs-button type="shadow"> Default </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip color="primary">
      <vs-button type="flat"> Primary </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip color="success">
      <vs-button color="success" type="flat"> Success </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip color="danger">
      <vs-button color="danger" type="flat"> Danger </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip color="warn">
      <vs-button color="warn" type="flat"> Warning </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip color="dark">
      <vs-button color="dark" type="flat"> Dark </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip color="#7d33ff">
      <vs-button color="#7d33ff" type="flat"> HEX </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
    <vs-tooltip color="rgb(59,222,200)">
      <vs-button color="rgb(59,222,200)" type="flat"> RGB </vs-button>
      <template #content> This is a beautiful button </template>
    </vs-tooltip>
  </div>
</template>

<style scoped lang="scss">
.vs-button {
  margin: 0 5px;
}
</style>
