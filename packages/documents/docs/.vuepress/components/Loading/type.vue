<template>
  <div :class="{ hasOpenLoading }" class="center">
    <div
      v-for="(type, i) in types"
      :ref="`box${i}`"
      @click="handleClickLoading(type)"
      class="box-loading"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, Ref, ref } from "vue";
import { loading } from "vuesax-alpha";

const hasOpenLoading = ref(false);
const types = [
  "default",
  "waves",
  "corners",
  "border",
  "points",
  "square",
  "gradient",
  "rectangle",
  "circles",
  "square-rotate",
  "scale",
];

const $refs = reactive<{
  [x: string]: Ref<HTMLElement>;
}>({});

const handleClickLoading = (type: string) => {
  const loadingInstance = loading({
    type,
  });
  hasOpenLoading.value = true;
  setTimeout(() => {
    loadingInstance.close();
    hasOpenLoading.value = false;
  }, 3000);
};
const openLoading = (type: string, ref: string) => {
  loading({
    target: $refs[ref].value,
    text: type,
    type,
  });
};

onMounted(() => {
  types.forEach((type, i) => {
    openLoading(type, `box${i}`);
  });
});
</script>
<style scoped lang="stylus">
getColor(vsColor, alpha = 1)
    unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
getVar(var)
    unquote("var(--vs-"+var+")")
.center
  flex-wrap wrap
  z-index 200
  position relative
  padding 20px 10px
  &.hasOpenLoading
    .box-loading
      opacity 0
      transform scale(.7)
.box-loading
  width 120px
  height 120px
  position relative
  margin 5px
  border-radius 20px
  box-shadow 0px 10px 20px -10px rgba(0,0,0,.07)
  overflow hidden
  cursor pointer
  transition all .25s ease
  &:hover
    transform translate(0,-5px)
    box-shadow 0px 15px 20px -10px rgba(0,0,0,.09)
  >>>.vs-loading
    padding 0px
    background transparent !important
    &.vs-loading--gradient, &.vs-loading--square
      .vs-loading__load__animation__2
        background getVar(theme-layout) !important
</style>
