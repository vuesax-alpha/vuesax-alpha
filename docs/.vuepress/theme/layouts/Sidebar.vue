<template>
  <div class="clean">
    <vs-sidebar v-model="active" :open="openSidebar" :reduce="reduce">
      <template #logo>
        <img src="/logos/logo-vuesax-logotipo-vuesax-png-3.png" alt="" />
      </template>
      <template #header>
        <vs-avatar>
          <img src="/avatars/avatar-5.png" alt="" />
        </vs-avatar>
      </template>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class="bx bx-sitemap" />
            </template>
            Items
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="home">
          <template #icon>
            <i class="bx bx-home" />
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="docs">
          <template #icon>
            <i class="bx bx-book-open" />
          </template>
          Documents the new
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class="bx bx-archive" />
              </template>
              Children
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="news">
            <template #icon>
              <i class="bx bx-news" />
            </template>
            News
          </vs-sidebar-item>
          <vs-sidebar-item id="Playlist">
            <template #icon>
              <i class="bx bxs-playlist" />
            </template>
            Playlist
          </vs-sidebar-item>
        </vs-sidebar-group>
      </vs-sidebar-group>

      <vs-sidebar-item id="Artist">
        <template #icon>
          <i class="bx bxs-bar-chart-alt-2" />
        </template>
        Artist
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat" />
        </template>
        Chat
      </vs-sidebar-item>
      <vs-sidebar-item id="Songs">
        <template #icon>
          <i class="bx bx-music" />
        </template>
        Songs
      </vs-sidebar-item>
      <template #footer>
        <vs-button flat icon><i class="bx bxs-cog" /></vs-button>
      </template>
    </vs-sidebar>

    <div class="div">
      <vs-button @click="reduce = !reduce"> click toggle </vs-button>
      <vs-button @click="openSidebar = !openSidebar"> Open sidebar </vs-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const reduce = ref<boolean>(false)
const active = ref<string>('docs')
const openSidebar = ref<boolean>(false)
const activeSidebar = ref<boolean>(false)

const handleChange = (val: string) => {
  active.value = val
}

defineExpose({
  activeSidebar,
  handleChange,
})
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  border: 0px;
  background: #f5f5f5;
  .div {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
