<template>
  <div class="content-i">
    <div class="con-text">
      <h2 v-html="feature.title" />

      <p v-html="feature.details" />

      <template v-if="feature.action">
        <button class="btn-action" @click="handleRouter(feature.action?.link)">
          {{ feature.action.text }}
        </button>
      </template>
      <template v-else />
    </div>
    <div class="con-ilus">
      <img class="not-darken" src="/vuesax-white-3.svg" alt="" />
      <img class="has-darken" src="/vuesax-dark-3.svg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { VsThemeHomeFeatureOption } from '../shared/frontmatter/home'

defineProps<{ feature: VsThemeHomeFeatureOption }>()

const router = useRouter()

const handleRouter = (link?: string) => {
  if (!link) return
  router.push(link)
}
</script>

<style scoped lang="scss">
.content-i {
  width: 100%;
  padding: 120px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin: auto;
  .con-text {
    padding-left: 50px;
    width: 50%;
    h2 {
      border: 0px;
      font-size: 2rem;
      font-weight: normal;
    }
  }
  .con-ilus {
    width: 50%;
    height: 450px;
    padding-left: 50px;
    max-width: 600px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
