<template>
  <div class="scroll-test">
    <vs-scrollbar show-always thickness="4" height="300" tag="span">
      <p v-for="(c, i) in content" :key="i">
        {{ c }} {{ ' ' + i }}
      </p>
    </vs-scrollbar>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';

export default {
  setup () {
    const content = reactive([]);

    onMounted(() => {
      const interval = setInterval(() => {
        content.push('lorem bla bla');
        if (content.length > 100) clearInterval(interval);
      }, 20);
    })

    return { content }
  }
}
</script>

<style lang="scss" scoped>
// .scroll-test {
  // overflow: auto;
  // height: 700px;
  // background-color: #eee;
  // padding: 10px 10px 0 10px;
// }
// .content {
//   height: 1000px;
//   background-color: #ccc;
// }
</style>