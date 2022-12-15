<template>
  <a
    :title="title"
    :href="link"
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
  </a>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps<{
  text: string;
  link?: string;
  active?: boolean;
  NEW?: boolean;
  UPDATE?: boolean;
}>();

const title = computed(() => {
  if (props.NEW) return "New";
  if (props.UPDATE) return "Update";
  return "";
});
</script>
