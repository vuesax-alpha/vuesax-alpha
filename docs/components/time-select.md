---
PROPS:
  - name: v-model / model-value
    type: String
    values:
    description: binding time value
    default: false
    link: null
    usage: '#default'
    code: null
---

# Time select

<card>

## Default

Use Time Select for time input.

The available time range is 00:00 to 23:59

::: tip
This component requires the
<code>\<client-only\> \<\/client-only\></code>
wrap when used in SSR (eg: [Nuxt](https://nuxt.com/)) and SSG (eg: [VitePress](https://vitepress.dev/)).
:::

<template #example>
<time-select-default />
</template>

<template #template>

@[code{1-11}](../.vuepress/components/time-select/default.vue)

</template>

<template #script>

@[code{13-17}](../.vuepress/components/time-select/default.vue)

</template>

</card>

<card>

## Time Formats

Use format to control format of time(hours and minutes).

Check the list [here](https://day.js.org/docs/en/display/format#list-of-all-available-formats) of all available formats of Day.js.

::: warning
Pay attention to capitalization
:::

<template #example>
<time-select-format />
</template>

<template #template>

@[code{1-12}](../.vuepress/components/time-select/format.vue)
</template>

<template #script>

@[code{14-18}](../.vuepress/components/time-select/format.vue)
</template>

</card>

<card>

## Fixed time ranges

If start( end ) time is picked at first, then the status of end( start ) time's options will change accordingly.

<template #example>
<time-select-time-range />
</template>

<template #template>

@[code{1-21}](../.vuepress/components/time-select/time-range.vue)
</template>

<template #script>

@[code{23-28}](../.vuepress/components/time-select/time-range.vue)
</template>

</card>

<card>

## Disabled

whether TimeSelect is disabled

<template #example>
<time-select-disabled />
</template>

<template #template>

@[code{1-12} vue{9}](../.vuepress/components/time-select/disabled.vue)
</template>

<template #script>

@[code{14-18}](../.vuepress/components/time-select/disabled.vue)
</template>

</card>

<card>

## API

</card>
