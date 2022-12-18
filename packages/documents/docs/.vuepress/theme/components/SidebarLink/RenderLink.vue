<template>
  <router-link
    :title="title"
    :to="link || ''"
    :class="[
      {
        active,
        'sidebar-new': isNew,
        'sidebar-UPDATE': isUpdate,
      },
      'sidebar-link',
    ]"
  >
    {{ text }}
  </router-link>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { isActive } from "../../util";

const props = defineProps<{
  text: string;
  link?: string;
  isNew?: boolean;
  isUpdate?: boolean;
}>();

const route = useRoute();

const title = computed(() => {
  if (props.isNew) return "New";
  if (props.isUpdate) return "Update";
  return "";
});

const active = computed(() => {
  const a = props.link ? isActive(route, props.link) : false;
  console.log(a)
  if (a == true) {
    console.log(props.link)
  }
  return props.link ? isActive(route, props.link) : false;
})
</script>
