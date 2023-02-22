# Getting Started

<card>

## Installation

Vuesax is a framework of UI components based on Vuejs which means that vuejs has to be in your project so that Vuesax can do the magic.

</card>

<card>

## NPM

You can install vuesax through npm with the command:

<command>

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

## Uso

To use vuesax in your vuejs project, add this code:

<command>

```ts
import { createApp } from "vue";
import Vuesax from "vuesax-alpha";
import App from "./App.vue";

import "vuesax-alpha/dist/vuesax.css"; // Vuesax styles

const app = createApp(App);
app.use(Vuesax);

app.mount("#app");
```

</command>

</card>

<card>

## Individual components (on demand)

There are cases that in your project you only need some components of vuesax and for this you can add them as follows

<command>

```ts
import { createApp } from "vue";
import { vsAlert, vsInput, vsPopup } from "vuesax-alpha";
import App from "./App.vue";

import "vuesax-alpha/dist/vuesax.css"; // Vuesax styles

const app = createApp(App);
app.use(vsPopup).use(vsAlert).use(vsInput);

app.mount("#app");
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
      href="https://unpkg.com/vuesax-alpha@0.0.20/dist/style.css"
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
    <script src="https://unpkg.com/vuesax-alpha@0.0.20/dist/vuesax-alpha.js"></script>

    <script>
      const { createApp } = Vue;

      createApp().mount("#app");
    </script>
  </body>
</html>
```

</command>

</card>
