<template>
  <div>
    <vs-row vs-w="12">
      <vs-col :span="3"> 1 </vs-col>
      <vs-col :span="3"> 2 </vs-col>
      <vs-col :pull="-1" :span="3"> 3 </vs-col>
      <vs-col :span="3"> 4 </vs-col>
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
}
.vs-row {
  background: -color('theme-layout');
}
.vs-col {
  padding: 10px;
  text-align: center;
  background: -color('theme-bg2');
  cursor: default;
  transition: all 0.25s ease;
  box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  border: 2px solid -color('theme-layout');
  &:hover {
    transform: scale(0.93);
    box-shadow: inset 0px 10px 20px -10px rgba(0, 0, 0, 0.1);
  }
}
</style>
