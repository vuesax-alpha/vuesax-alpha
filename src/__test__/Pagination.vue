<template>
  <div class="flex">
    <vs-pagination
      :disabled-items="[4]"
      :loading-items="[3, 6]"
      v-model="currentPage"
      :length="20"
      progress
    >
    </vs-pagination>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const currentPage = ref(1);
    // setInterval(() => {
    //   currentPage.value += 1;
    // }, 1000)

    return { currentPage };
  },
};
</script>
