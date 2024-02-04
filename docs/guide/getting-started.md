# Getting Started

<card>

## Installation

Vuesax is a framework of UI components based on Vuejs which means that vuejs has to be in your project so that Vuesax can do the magic.

</card>

<card>

## NPM

You can install vuesax through npm with the command:

<command>

<template #pnpm>

```bash
pnpm install vuesax-alpha
```

</template>

<template #npm>

```bash
npm install vuesax-alpha
```

</template>

<template #yarn>

```bash
yarn add vuesax-alpha
```

</template>

</command>

</card>

<card>

## Use

To use vuesax in your vuejs project, add this code:

<command>

```ts
import { createApp } from 'vue'
import Vuesax from 'vuesax-alpha'

import App from './App.vue'

import 'vuesax-alpha/theme-chalk/index.css'
// dark mode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(Vuesax)

app.mount('#app')
```

</command>

</card>

<card>

## Individual components (on demand)

There are cases that in your project you only need some components of vuesax and for this you can add them as follows

<command>

```ts
import { createApp } from 'vue'
import { VsAlert, VsInput, VsPopup } from 'vuesax-alpha'
import App from './App.vue'

import 'vuesax-alpha/theme-chalk/index.css'
// dark mode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(VsAlert).use(VsInput).use(VsPopup)

app.mount('#app')
```

</command>

</card>

<card>

## CDN

You can use vuesax by loading it via cdn by adding a `<script>` tag to your project

<command>

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      href="https://unpkg.com/vuesax-alpha/theme-chalk/index.css"
      rel="stylesheet"
    />
    <meta
      name="viewport"
      content="initial-scale=1, maximum-scale=1, user-scalable=no"
    />
  </head>
  <body>
    <div id="app">
      <vs-button>Hello World</vs-button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://unpkg.com/vuesax-alpha/dist/index.full.min.js"></script>

    <script>
      const { createApp } = Vue

      createApp().mount('#app')
    </script>
  </body>
</html>
```

</command>

</card>
