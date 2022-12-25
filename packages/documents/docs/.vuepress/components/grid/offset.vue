<template>
  <div>
    <vs-row vs-w="12">
      <vs-col sm-o="6" sm="2"> offset = 6 </vs-col>
    </vs-row>

    <vs-row>
      <vs-col sm-o="2" sm="2"> offset = 2 </vs-col>
    </vs-row>

    <vs-row>
      <vs-col sm-o="8" sm="2"> offset = 8 </vs-col>
    </vs-row>

    <vs-row>
      <vs-col sm-o="7" sm="2"> offset = 7 </vs-col>
    </vs-row>

    <vs-row>
      <vs-col sm-o="4" sm="2"> offset = 4 </vs-col>
    </vs-row>
  </div>
</template>
<style scoped lang="scss">
@import "../../assets/styles/mixin";
.grid {
  border-radius: 20px;
  overflow: hidden;
  padding: 0px;
}
.vs-row {
  background: -color("theme-layout");
  border-bottom: 1px dashed -color("theme-bg2");
}
.vs-col {
  padding: 10px;
  text-align: center;
  background: -color("theme-bg2");
  cursor: default;
  transition: all 0.25s ease;
  box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(0.93);
    box-shadow: inset 0px 10px 20px -10px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 500px) {
  .vs-col {
    font-size: 0.6rem;
    font-weight: bold;
    padding: 10px 2px;
  }
}
</style>
