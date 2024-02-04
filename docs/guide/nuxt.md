# Vuesax + Nuxt

<card>

## Installation

Vuesax has a plugin for [Nuxt](https://nuxt.com) so starting a project is relatively quick just we have to add Vuesax module to the `nuxt.config.ts`

  <command>

```ts
export default defineNuxtConfig({
  modules: ["@vuesax-alpha/nuxt"],
  vuesaxAlpha: {
    /** Options */
  },
});
```

  </command>

</card>

<card>

## Test a component

Now that we have everything correct we are going to test and verify that everything is ready

for this you can enter the pages folder and add a new test call or choose the `index.vue` that represents the main page of our project.

#### Add a component

Let's try adding a simple component like [vsButton](/components/) the final code could be something like this

```html
<template>
  <div class="app">
    <vs-button active> Hello World Vuesax + Nuxtjs </vs-button>
  </div>
</template>

<script setup lang="ts"></script>

<style>
  .app {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
```

and if we see the page `/test` we find something like this

  <img src="/nuxt-test-app.png" >
</card>
