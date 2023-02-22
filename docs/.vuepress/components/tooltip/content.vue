<template>
  <div class="center">
    <vs-tooltip>
      <vs-button gradient> Whats is Vuesax? </vs-button>
      <template #tooltip>
        <div class="content-tooltip">
          <h4>Whats is Vuesax?</h4>
          <p>Vuesax is a framework of UI components created with Vuejs</p>
        </div>
      </template>
    </vs-tooltip>
    <vs-tooltip v-model="activeTooltip1" bottom shadow not-hover>
      <vs-button danger @click="activeTooltip1 = !activeTooltip1">
        Click Delete User
      </vs-button>
      <template #tooltip>
        <div class="content-tooltip">
          <h4 class="center">Confirm</h4>
          <p>
            You are sure to delete this user, by doing so you cannot recover the
            data
          </p>
          <footer>
            <vs-button danger block @click="activeTooltip1 = false">
              Delete
            </vs-button>
            <vs-button transparent dark block @click="activeTooltip1 = false">
              Cancel
            </vs-button>
          </footer>
        </div>
      </template>
    </vs-tooltip>
    <vs-tooltip shadow interactivity>
      <vs-avatar>
        <img src="/avatars/avatar-5.png" alt="" />
      </vs-avatar>
      <template #tooltip>
        <div class="content-tooltip">
          <div class="body">
            <div class="text">
              Closed Tasks
              <span> 89 </span>
            </div>
            <vs-avatar
              circle
              size="80"
              @click="activeTooltip1 = !activeTooltip1"
            >
              <img src="/avatars/avatar-5.png" alt="" />
            </vs-avatar>
            <div class="text">
              Open Tasks
              <span> 8 </span>
            </div>
          </div>
          <footer>
            <vs-button circle icon border>
              <i class="bx bxs-share-alt" />
            </vs-button>
            <vs-button circle> Message </vs-button>
            <vs-button circle icon border>
              <i class="bx bx-like" />
            </vs-button>
          </footer>
        </div>
      </template>
    </vs-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeTooltip1 = ref(false)
</script>

<style lang="scss">
@function -color($color, $alpha: 1) {
  @return unquote('rgba(var(--vsd-#{$color}), #{$alpha})');
}
.content-tooltip {
  .body {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .vs-avatar-content {
      margin-top: -30px;
      border: 3px solid -color('theme-layout');
      box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
    }
    .text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 0.55rem;
      padding: 10px;
      font-weight: normal;
      span {
        font-weight: bold;
        font-size: 0.7rem;
      }
    }
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h4 {
    padding: 8px;
    margin: 0px;
    text-align: left;
  }
  p {
    text-align: left;
    padding: 0px;
    margin: 0px;
    line-height: 1rem;
    padding-bottom: 5px;
    padding-left: 8px;
  }
}
</style>
