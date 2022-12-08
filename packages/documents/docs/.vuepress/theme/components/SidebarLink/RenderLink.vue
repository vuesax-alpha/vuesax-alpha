<template>
  <router-link
    :title="title"
    :to="to"
    :class="[
      {
        active,
        'sidebar-new': NEW,
        'sidebar-UPDATE': UPDATE,
      },
      'sidebar-link',
    ]"
  >
    {{ text }}
  </router-link>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps<{
  to: string;
  text: string;
  active: boolean;
  NEW?: boolean;
  UPDATE?: boolean;
}>();

const title = computed(() => {
  if (props.NEW) return "New";
  if (props.UPDATE) return "Update";
  return "";
});
</script>
