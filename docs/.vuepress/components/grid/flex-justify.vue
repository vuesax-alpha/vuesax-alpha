<template>
  <div class="grid">
    <vs-row>
      <vs-col v-for="i in 3" :key="i" :sm="2"> Default {{ i + 1 }} </vs-col>
    </vs-row>

    <vs-row justify="center">
      <vs-col v-for="i in 3" :key="i" :sm="2"> Center {{ i + 1 }} </vs-col>
    </vs-row>

    <vs-row justify="end">
      <vs-col v-for="i in 3" :key="i" :sm="2"> Flex-end {{ i + 1 }} </vs-col>
    </vs-row>

    <vs-row justify="space-around">
      <vs-col v-for="i in 3" :key="i" :sm="2">
        Space-around {{ i + 1 }}
      </vs-col>
    </vs-row>

    <vs-row justify="space-between">
      <vs-col v-for="i in 3" :key="i" :sm="2">
        Space-between {{ i + 1 }}
      </vs-col>
    </vs-row>
  </div>
</template>
<style scoped lang="scss">
@function -var($var) {
  @return unquote('var(--vs-' + var + ')');
}
@function -color($color, $alpha: 1) {
  @return unquote('rgba(var(--vs-#{$color}), #{$alpha})');
}
.grid {
  border-radius: 20px;
  overflow: hidden;
  padding: 0px;
}
.vs-row {
  &:first-child {
    border-top: 2px solid -color('theme-layout');
  }
}
.vs-col {
  padding: 10px;
  text-align: center;
  font-size: 0.65rem;
  background: -color('theme-bg2');
  border-left: 2px solid -color('theme-layout');
  border-bottom: 2px solid -color('theme-layout');
  cursor: default;
  transition: all 0.25s ease;
  box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(0.93);
    box-shadow: inset 0px 10px 20px -10px rgba(0, 0, 0, 0.1);
  }
  &:last-child {
    border-right: 2px solid -color('theme-layout');
  }
}

@media (max-width: 500px) {
  .vs-col {
    font-size: 0.58rem;
    font-weight: bold;
    padding: 10px 0px;
  }
}
</style>
