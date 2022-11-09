<template>
  <div>
    <vs-tooltip right>
      <template #tooltip>Tooltippppppppp</template>
      <vs-alert solid>
        <template #title>Hello vue ui</template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit incidunt, sint provident animi, minus deserunt maxime enim asperiores voluptates esse consectetur ipsum voluptate voluptatem totam nobis nihil repellat dolor?
      </vs-alert>
    </vs-tooltip>
    <vs-alert danger border :closable="false">
      <template #title>Hello vue ui</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit incidunt, sint provident animi, minus deserunt maxime enim asperiores voluptates esse consectetur ipsum voluptate voluptatem totam nobis nihil repellat dolor?
    </vs-alert>
    <vs-alert success flat closable>
      <template #title>Hello vue ui</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit incidunt, sint provident animi, minus deserunt maxime enim asperiores voluptates esse consectetur ipsum voluptate voluptatem totam nobis nihil repellat dolor?
    </vs-alert>
    <vs-alert warn flat>
      <template #icon>
        <div class="bx bx-user" style="transform: scale(2);"></div>
      </template>
      <template #title>Hello vue ui</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit incidunt, sint provident animi, minus deserunt maxime enim asperiores voluptates esse consectetur ipsum voluptate voluptatem totam nobis nihil repellat dolor?
    </vs-alert>
    <vs-alert dark v-model:hiddenContent="hiddenContent1">
      <template #title>Hello vue ui</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit incidunt, sint provident animi, minus deserunt maxime enim asperiores voluptates esse consectetur ipsum voluptate voluptatem totam nobis nihil repellat dolor?
    </vs-alert>
  </div>  
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const hiddenContent1 = ref(false);

    return { hiddenContent1 }
  }
}
</script>

<style lang="scss" scoped>

</style>