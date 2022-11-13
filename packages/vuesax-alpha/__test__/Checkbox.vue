<template>
  <div class="checkbox-group">
    <vs-checkbox v-model="test" val="1" line-through>1</vs-checkbox>
    <vs-checkbox v-model="test" val="2" label="Lable" label-before danger>2</vs-checkbox>
    <vs-checkbox v-model="test" val="3" indeterminate>3</vs-checkbox>
    <vs-checkbox v-model="test" checke-force val="4" :loading="loading" danger checked>4</vs-checkbox>
    <vs-checkbox v-model="test" val="5" loading>5</vs-checkbox>
    <vs-checkbox v-model="test" val="6" warn checked>6</vs-checkbox>

    <div>{{ test }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const loading = ref(false);
    const test = ref(['1', '3']);

    setInterval(() => {
      loading.value = !loading.value
    }, 3000);

    return { loading, test }
  }
}
</script>

<style lang="scss" scoped>
.checkbox-group {
  display: flex;
  gap: 30px;
}
</style>