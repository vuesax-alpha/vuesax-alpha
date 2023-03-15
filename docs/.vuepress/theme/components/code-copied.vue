<template>
  <div :class="{ copied }" class="noti-code">
    <i class="bx bx-check" /> {{ text || 'Code Copied' }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  copied: boolean
  text?: string
}>()
</script>

<style lang="scss">
@import '../styles/use';

.noti-code {
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-width: 500px;
  background: -color('theme-color');
  left: 50%;
  transform: translate(-50%, 100%);
  padding: 10px 20px;
  text-align: center;
  color: -color('theme-layout');
  border-radius: 20px 20px 0px 0px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease;
  z-index: 1000;

  i {
    position: absolute;
    left: 0px;
    top: 0px;
    font-size: 20px;
    width: 45px;
    height: 45px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 20px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.copied {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0%);
  }
}
</style>
