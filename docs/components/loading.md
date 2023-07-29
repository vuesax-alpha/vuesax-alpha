---
PROPS:
  #__________________________________
  - name: type
    type: String
    values: atom,ball,scale,waves,border,points,square,circles,corners,default,gradient,rectangle,square-rotate
    description: Change the animation of the loading.
    default: default
    link: null
    usage: '#type'
    code: null
    #__________________________________
  - name: color
    type: String
    values: All colors of vuesax (RGB y HEX)
    description: Change the color of the loading animation.
    default: primary
    link: /theme/
    usage: '#color'
    code: null
    #__________________________________
  - name: background
    type: String
    values: All colors of vuesax (RGB y HEX)
    description: Change the background color of the loading.
    default: '#fff'
    link: /theme/
    usage: '#background'
    code: null
    #__________________________________
  - name: text
    type: String
    values: String
    description: Add a text below the loading animation.
    default: null
    link: null
    usage: '#text'
    code: null
    #__________________________________
  - name: percent
    type: Number
    values: 0 - 100 (%)
    description: Add a percentage text inside the loading.
    default: null
    link: null
    usage: '#percent'
    code: null
    #__________________________________
  - name: progress
    type: Number
    values: 0 - 100
    description: Add a progress bar to the loading and the progress would be the value.
    default: null
    link: null
    usage: '#progress'
    code: null
    #__________________________________
  - name: target
    type: String | HTMLElement | Ref<HTMLElement> | Vue Component
    values: 'String: Element Selector, HTMLElement: Selector element, Ref HTMLElement'
    description: Determine the parent of the loading where it will be instantiated.
    default: null
    link: null
    usage: '#target'
    code: null
    #__________________________________
  - name: opacity
    type: Number
    values: 0 - 1
    description: Change the opacity of the background.
    default: '0.6'
    link: null
    usage: '#target'
    code: null
    #__________________________________
  - name: scale
    type: Number
    values: null
    description: Change the size of the loading animation.
    default: '1'
    link: null
    usage: '#target'
    code: null
  #__________________________________
  - name: setPercent
    type: Function
    values: '(percent: Number) => void'
    description: Change the value of the percent after instantiating the loading.
    default: null
    link: null
    usage: '#percent'
    code: null
  #__________________________________
  - name: setProgress
    type: Function
    values: '(progress: Number) => void'
    description: Change the value of the progress after instantiating the loading.
    default: null
    link: null
    usage: '#progress'
    code: null
  #__________________________________
  - name: setText
    type: Function
    values: '(text: String) => void'
    description: Change the value of the text property after instantiating the loading.
    default: null
    link: null
    usage: '#text'
    code: null

UPDATES:
  - type
---

# Loading

<card>

## Default

<docs-warn />

Generate a loading with the vuesax function

<Command>

```ts
import { VsLoading, VsLoadingFn } from 'vuesax-alpha'

VsLoadingFn(options)

// Or use via service
VsLoading.service(options)
```

</Command>

<template #example>
<loading-default />
</template>

<template #template>

@[code{1-5} html{3}](../.vuepress/components/loading/default.vue)

</template>

<template #script>

@[code{7-16} html{5,7}](../.vuepress/components/loading/default.vue)

</template>

</card>

<card>

## Type <Badge text="Update" type="warn" />

Change the type of loading with the option `type`

Tipos de loading:

 - atom
 - ball
 - scale
 - waves
 - border
 - points
 - square
 - circles
 - corners
 - default
 - gradient
 - rectangle
 - square-rotate

::: tip
Click on the example loading to open it in the whole page
:::

<template #example>
<loading-type />
</template>

<template #template>

@[code{1-11} html](../.vuepress/components/loading/type.vue)

</template>

<template #script>

@[code{13-64} html{36-38}](../.vuepress/components/loading/type.vue)

</template>

</card>

<card>

## Color

Change the color of the loading animation with the property `color`, the colors can be the main ones of vuesax or (**RGB**, **HEX**)

<template #example>
<loading-color />
</template>

<template #template>

@[code{1-17} html](../.vuepress/components/loading/color.vue)

</template>

<template #script>

@[code{19-87} html](../.vuepress/components/loading/color.vue)

</template>

</card>

<card>

## Background

You can change the loading background with the property `loading`

<template #example>
<loading-background />
</template>

<template #template>

@[code{1-11} html](../.vuepress/components/loading/background.vue)

</template>

<template #script>

@[code{13-29} html](../.vuepress/components/loading/background.vue)

</template>

</card>

<card>

## Text

Add a descriptive text of the loading or informing the user that it is loading or that it is missing to load with the property `text`

<template #example>
<loading-text />
</template>

<template #template>

@[code{1-7} html](../.vuepress/components/loading/text.vue)

</template>

<template #script>

@[code{9-21} html](../.vuepress/components/loading/text.vue)

</template>

</card>

<card>

## Percent

You can add a string of the percentage of load with the `percent` property, if you need to change that value use the `setPercent` function in the loading instance.

<template #example>
<loading-percent />
</template>

<template #template>

@[code{1-7} html](../.vuepress/components/loading/percent.vue)

</template>

<template #script>

@[code{9-33} html](../.vuepress/components/loading/percent.vue)

</template>

</card>

<card>

## Progress

Add a progress bar at the top to indicate the loading progress of the loading with the `progress` property, the value is a number that determines the percentage and the allowed value is (0 - 100)

<template #example>
<loading-progress />
</template>

<template #template>

@[code{1-7} html](../.vuepress/components/loading/progress.vue)

</template>

<template #script>

@[code{9-33} html](../.vuepress/components/loading/progress.vue)

</template>

</card>

<card>

## Target

Use the loading on a specific dom element using the `target` property and the value can be a string with the `id` or the `class` only if it is unique for the element, you can also use the element itself as per example using `$refs`

<template #example>
<loading-target />
</template>

<template #template>

@[code{1-17} html](../.vuepress/components/loading/target.vue)

</template>

<template #script>

@[code{19-49} html](../.vuepress/components/loading/target.vue)

</template>

</card>

<card>

## API

</card>
