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

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

# Getting Started

## Try with vuesax-next (vuesax v4)

About 90% of the api in this version works fine. This version references to [Vuesax documentaion](https://vuesax.com/)

You can try with tag `old` from npm

```sh
# Choose a package manager you like.

# NPM
$ npm install vuesax-alpha@old

# Yarn
$ yarn add vuesax-alpha@old

# pnpm
$ pnpm install vuesax-alpha@old
```

And import it to use

```js
import { createApp } from 'vue'
import './style.css'
import vuesax from 'vuesax-alpha'
import 'vuesax-alpha/dist/index.css'

import App from './App.vue'

createApp(App).use(vuesax).mount('#app')
```

Then, see the [vuesax-next doucmentation](https://vuesax.com/) to try it

## New version - Vuesax-alpha

The documentation of this version is different from the above version, see the [VuesaxAlpha doucmentation](https://vuesax-alpha.vercel.app/)

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

## Components vuesax-next vs vuesax-alpha

- [x] Alert
- [x] Avatar
- [x] Badge
- [ ] Breadcrumb
- [x] Button
- [x] Card
- [x] Checkbox
- [ ] Chip
- [ ] Collapse
- [ ] Date picker
- [ ] Datetime picker
- [x] Dialogs
- [ ] Divider
- [ ] Dropdown
- [ ] Images
- [x] Input
- [ ] List
- [x] Loading
- [x] Navbar
- [x] Notification
- [x] Number Input
- [x] Pagination
- [x] Popup
- [ ] Progress
- [x] Radio
- [x] Select
- [x] Sidebar
- [ ] Slider
- [ ] Steps
- [x] Switch
- [x] Table
- [ ] Tabs
- [ ] Textarea
- [x] Tooltip
- [ ] Upload
- [ ] Time picker
- [x] Time select

## Breaking change list

Some APIs is not stable right now, and here's also a full list about how to get upgraded from [Vuesax](https://vuesax.com) to Vuesax Alpha.

You can find the breaking change list here: [Breaking Change List (Updating)](#).

---

Vuesax Alpha is open source software licensed as
[MIT](https://github.com/vuesax-alphax/vuesax-alpha/blob/main/LICENSE).

---

This project is built based on the [Element Plus :heart: ](https://github.com/element-plus/element-plus) project template.
