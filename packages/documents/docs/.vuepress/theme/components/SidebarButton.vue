<template>
  <button
    :class="{ openSidebar }"
    class="sidebar-button"
    @click="$emit('toggle-sidebar')"
  >
    <i class="bx bx-menu"></i>
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  (event: 'toggle-sidebar'): void
}>()
defineProps<{ openSidebar: boolean }>();
</script>

<style lang="scss">
@import "../styles/mixin";
.isSidebarOpen {
  .sidebar-button {
    transform: rotate(90deg);
  }
}
.sidebar-button {
  cursor: pointer;
  display: none;
  position: absolute;
  padding: 0.6rem;
  top: 0.6rem;
  left: 0.2rem;
  outline: none;
  user-select: none;
  background: transparent;
  appearance: none;
  box-shadow: none;
  border: 0px;
  transition: all 0.25s ease;
  color: -color("theme-color") !important;
  &:focus {
    outline: 0;
  }
  i {
    display: block;
    font-size: 1.8rem;
  }
}

@media (max-width: 1000px) {
  .sidebar-button {
    display: block;
  }
}
</style>
