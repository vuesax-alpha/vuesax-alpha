<template>
  <footer
    :title="active ? 'Hide code' : 'View code'"
    class="footer-code"
    @click="$emit('toggleCode')"
  >
    <i class="bx bx-hide" />
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean
}>()
defineEmits<{
  (event: 'toggleCode'): void
}>()
</script>

<style lang="scss">
.footer-code {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  color: #fff;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    opacity: 0.4;
  }
}
</style>
