<template>
  <div class="center con-checkbox">
    <vs-checkbox-group v-model="options">
      <vs-checkbox
        :value="{
          github: 'https://github.com/webpack/webpack',
          name: 'Webpack',
        }"
      >
        Webpack
      </vs-checkbox>

      <vs-checkbox
        color="danger"
        :value="{
          github: 'https://github.com/microsoft/TypeScript',
          name: 'Typescript',
        }"
      >
        Typescript
      </vs-checkbox>

      <vs-checkbox
        color="warn"
        :value="{ github: 'https://github.com/sass/sass', name: 'Sass' }"
      >
        Sass
      </vs-checkbox>
    </vs-checkbox-group>
    <pre class="data-check">
      {{ options }}
    </pre>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const options = ref([
  {
    github: 'https://github.com/webpack/webpack',
    name: 'Webpack',
  },
])
</script>
<style scoped lang="scss">
.con-checkbox {
  flex-direction: column;
  align-items: flex-start;
  .vs-checkbox-content {
    min-width: 80px;
  }
  .data-check {
    background: rgba(0, 0, 0, 0.03);
    padding: 10px;
    border-radius: 18px;
    margin-top: 20px;
    font-size: 0.9rem;
    width: 100%;
    pre {
      background: transparent;
      padding: 0px 10px;
      overflow: hidden;
    }
  }
}
</style>
