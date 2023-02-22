<template>
  <div class="grid">
    <vs-row>
      <vs-col v-for="index in 3" :key="index" :sm="2">
        Default {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row justify="center">
      <vs-col v-for="index in 3" :key="index" :sm="2">
        Center {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row justify="flex-end">
      <vs-col v-for="index in 3" :key="index" :sm="2">
        Flex-end {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row justify="space-around">
      <vs-col v-for="index in 3" :key="index" :sm="2">
        Space-around {{ index + 1 }}
      </vs-col>
    </vs-row>

    <vs-row justify="space-between">
      <vs-col v-for="index in 3" :key="index" :sm="2">
        Space-between {{ index + 1 }}
      </vs-col>
    </vs-row>
  </div>
</template>
<style scoped lang="scss">
@import '../../assets/styles/mixin';
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
