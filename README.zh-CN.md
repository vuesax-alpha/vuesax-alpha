<h1 align="center">Vuesax Alpha - Vue.js 3 UI 库</h1>

<p align="center">
  <a href="https://www.npmjs.org/package/vuesax-alpha">
    <img src="https://img.shields.io/npm/v/vuesax-alpha.svg">
  </a>
  <a href="https://npmcharts.com/compare/vuesax-alpha?minimal=true">
    <img src="https://img.shields.io/npm/dm/vuesax-alpha.svg">
  </a>
  <br>
</p>

- 💪 Vue 3 组合式 API
- 🔥 使用 TypeScript 编写

<div align="center">

[English](./README.md) | 简体中文

</div>

# 起步

## 使用 vuesax-next (vuesax v4)

在这个版本 90% 的 api 都能正常使用. 详情参考 [Vuesax 文档](https://vuesax.com/)

你也可以从 npm 上面使用带 `old` tag 的 版本

```sh
# Choose a package manager you like.

# NPM
$ npm install vuesax-alpha@old

# Yarn
$ yarn add vuesax-alpha@old

# pnpm
$ pnpm install vuesax-alpha@old
```

然后使用 import 导入

```js
import { createApp } from 'vue'
import './style.css'
import vuesax from 'vuesax-alpha'
import 'vuesax-alpha/dist/index.css'

import App from './App.vue'

createApp(App).use(vuesax).mount('#app')
```

然后, 参考 [vuesax-next 文档](https://vuesax.com/) 去使用它

## 新版本 - Vuesax-alpha

这个版本的文档和上面那些版本的完全不同，参考 [VuesaxAlpha 文档](https://vuesax-alpha.vercel.app/)

```sh
# Choose a package manager you like.

# NPM
$ npm install vuesax-alpha

# Yarn
$ yarn add vuesax-alpha

# pnpm
$ pnpm install vuesax-alpha
```

### 使用

#### 全部导入

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

#### 暗黑模式

想要使用暗黑模式，你可以创建一个开关来切换 html 的`dark`类。

如果你只需要黑色模式，在 html 上面添加一个 dark 类就可以了。

```html
<html class="dark">
  <head></head>
  <body></body>
</html>
```

如果你想要切换它，我推荐 [useDark | VueUse](https://vueuse.org/core/usedark/).

#### Volar 支持

如果你使用 Volar，请将全局组件类型定义添加到 tsconfig.json 中的 compilerOptions.types 中。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vuesax-alpha/global"]
  }
}
```

## vuesax-next 与 vuesax-alpha 的组件比较

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

## 不兼容变化

一些 API 目前还不稳定，这里有一个完整的指南，告诉你如何从[Vuesax](https://vuesax.com)升级到 Vuesax Alpha。

你可以在这里找到所有的不兼容变化: [Breaking Change List (Updating)](#).

---

Vuesax Alpha 是一个以[MIT](https://github.com/vuesax-alphax/vuesax-alpha/blob/main/LICENSE)为开题协议的软件。

---

这个项目的构建是基于 [Element Plus :heart: ](https://github.com/element-plus/element-plus)项目模板。
