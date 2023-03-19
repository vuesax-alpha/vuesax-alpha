<h1 align="center">Vuesax Alpha - Vue.js 3 UI library</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/vuesax-alpha">
    <img src="https://img.shields.io/npm/v/vuesax-alpha.svg">
  </a>
  <a href="https://npmcharts.com/compare/vuesax-alpha?minimal=true">
    <img src="https://img.shields.io/npm/dm/vuesax-alpha.svg">
  </a>
  <br>
</p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

## Getting Started

### First, install it from npm:

With NPM
```sh
# Choose a package manager you like.

# NPM
$ npm install vuesax-alpha

# Yarn
$ yarn add vuesax-alpha

# pnpm
$ pnpm install vuesax-alpha
```

### Usage

#### Full import

```ts
// main.ts
import { createApp } from 'vue'
import Vuesax from 'vuesax-alpha'

// style
import 'vuesax-alpha/dist/index.css'
// vuesax darkmode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'

import App from './App.vue'

const app = createApp(App)

app.use(Vuesax)
app.mount('#app')
```

#### Dark theme
To enable it, you can create a switch to toggle `dark` class of html.

If you only need dark mode, just add dark class for html.

```html
<html class="dark">
  <head></head>
  <body></body>
</html>
```

If you want to toggle it, i recommend [useDark | VueUse](https://vueuse.org/core/usedark/).


#### Volar support
If you use volar, please add the global component type definition to compilerOptions.types in tsconfig.json.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vuesax-alpha/global"]
  }
}
```

## Breaking change list

Some APIs is not stable right now, and here's also a full list about how to get upgraded from [Vuesax](https://vuesax.com) to Vuesax Alpha.

You can find the breaking change list here: [Breaking Change List (Updating)](#).

---

Vuesax Alpha is open source software licensed as
[MIT](https://github.com/vuesax-alphax/vuesax-alpha/blob/main/LICENSE).

---
This project is built based on the [Element Plus :heart: ](https://github.com/element-plus/element-plus) project template.
