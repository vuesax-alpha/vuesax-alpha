<template>
  <div class="grid">
    <vs-row>
      <vs-col :sm="num">
        {{ num }}
      </vs-col>
      <vs-col :sm="num2">
        {{ num2 }}
      </vs-col>
      <vs-col :sm="num">
        {{ num }}
      </vs-col>
    </vs-row>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const num = ref(2)
const num2 = ref(8)

onMounted(() => {
  setInterval(() => {
    if (num.value == 2) {
      num.value = 4
      num2.value = 4
    } else if (num.value == 4) {
      num.value = 1
      num2.value = 10
    } else if (num.value == 1) {
      num.value = 5
      num2.value = 2
    } else if (num.value == 5) {
      num.value = 2
      num2.value = 8
    }
  }, 2000)
})
</script>
<style scoped lang="scss">
@import '../../assets/styles/mixin';
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
