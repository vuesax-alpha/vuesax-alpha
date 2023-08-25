# Icons

<card>

## Installation

Vuesax alpha provides a set of common icons.

<command>

<template #npm>

```bash
npm install @vuesax-alpha/icons-vue
```

</template>

<template #yarn>

```bash
yarn add @vuesax-alpha/icons-vue
```

</template>

<template #pnpm>

```bash
pnpm install @vuesax-alpha/icons-vue
```

</template>

</command>

</card>

<card>

## Register All Icons

::: tip
You can change icon name
:::

```ts
// main.ts
import * as VuesaxAlphaIconsVue from '@vuesax-alpha/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(VuesaxAlphaIconsVue)) {
  app.component(`VsIcon${key}`, component)
}
```

</card>

<card>

## Example

<template #example>

<icons-example />

</template>

<template #template>

@[code{1-7}](../.vuepress/components/icons/example.vue)

</template>

</card>

<card>

## Icon Collection

<template #example>
<icons-collection />
</template>

</card>
