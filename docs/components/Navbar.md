---
PROPS:
  - name: fixed
    type: Boolean
    values: true, false
    description: Defines if the component is fixed on the screen.
    default: false
    link: null
    usage: null
    code: >
      <vs-navbar fixed>
        ...
      </vs-navbar>
  - name: shadow
    type: Boolean
    values: true, false
    description: Add a shadow to the component.
    default: primary
    link: null
    usage: null
    code: >
      <vs-navbar shadow>
        ...
      </vs-navbar>
  - name: shadowScroll
    type: Boolean
    values: true, false
    description: Add functionality to add shadow to component when scrollTop is more than 0.
    default: false
    link: null
    usage: null
    code: >
      <vs-navbar shadow-scroll>
        ...
      </vs-navbar>
  - name: hideScroll
    type: Boolean
    values: true, false
    description: Add the functionality to hide and show the component based on whether the scroll is lowered or raised.
    default: false
    link: null
    usage: '#hide-scroll'
    code: >
      <vs-navbar hide-scroll>
        ...
      </vs-navbar>
  - name: textWhite
    type: Boolean
    values: true, false
    description: Change the text color of items to white.
    default: false
    link: null
    usage: '#color'
    code: >
      <vs-navbar text-white>
        ...
      </vs-navbar>
  - name: square
    type: Boolean
    values: true, false
    description: Change the border radius to 0 by making the component square.
    default: false
    link: null
    usage: '#square'
    code: >
      <vs-navbar square>
        ...
      </vs-navbar>
  - name: paddingScroll
    type: Boolean
    values: true, false
    description: Determines if the component has padding and the user scrolling is removed making an effect.
    default: false
    link: null
    usage: '#padding-scroll'
    code: >
      <vs-navbar padding-scroll>
        ...
      </vs-navbar>
  - name: notLine
    type: Boolean
    values: true, false
    description: Delete the active line in the component.
    default: false
    link: null
    usage: '#not-line'
    code: >
      <vs-navbar not-line>
        ...
      </vs-navbar>
  - name: leftCollapsed
    type: Boolean
    values: true, false
    description: Add the functionality that when the elements of this slot cannot be correctly they are visually removed.
    default: false
    link: null
    usage: '#default'
    code: >
      <vs-navbar left-collapsed>
        ...
      </vs-navbar>
  - name: centerCollapsed
    type: Boolean
    values: true, false
    description: Add the functionality that when the elements of this slot cannot be correctly they are visually removed.
    default: false
    link: null
    usage: '#default'
    code: >
      <vs-navbar center-collapsed>
        ...
      </vs-navbar>
  - name: rightCollapsed
    type: Boolean
    values: true, false
    description: Add the functionality that when the elements of this slot cannot be correctly they are visually removed.
    default: false
    link: null
    usage: '#default'
    code: >
      <vs-navbar right-collapsed>
        ...
      </vs-navbar>
  - name: targetScroll
    type: Boolean
    values: true, false
    description: Determines the element to which the scroll event will be requested.
    default: document
    link: null
    usage: '#padding-scroll'
    code: >
      <vs-navbar padding-scroll="#my-element">
        ...
      </vs-navbar>
  - name: item:active
    type: Boolean
    values: true, false
    description: Determines if the component is in active status.
    default: false
    link: null
    usage: '#default'
    code: >
      <vs-navbar-item active>
        ...
      </vs-navbar-item>
  - name: item:to
    type: String
    values: url
    description: Use vue-router to generate a new view based on the supplied string.
    default: false
    link: null
    usage: null
    code: >
      <vs-navbar-item to="/">
        ...
      </vs-navbar-item>
  - name: item:id
    type: String
    values: id
    description: It is the id that is used to change the value of the v-model of the parent component and thus be able to determine the active state based on user interaction..
    default: false
    link: null
    usage: null
    code: >
      <vs-navbar-item id="myIdItem">
        ...
      </vs-navbar-item>
  - name: item:href
    type: String
    values: url
    description: Generate a new tab with the url provided.
    default: false
    link: null
    usage: null
    code: >
      <vs-navbar-item href="http://vuesax.com/">
        ...
      </vs-navbar-item>
  - name: item:target
    type: String
    values: html-target
    description: Determine if the tab is a new one or if it replaces the current one.
    default: '_blank'
    link: null
    usage: null
    code: >
      <vs-navbar-item target="_self">
        ...
      </vs-navbar-item>

SLOTS:
  - name: default
    type: slot
    values: null
    description: Add the elements in the center of the component.
    default: null
    link: null
    usage: '#default'
    code: >
      <vs-navbar v-model="active">
        <vs-navbar-item :active="active == 'guide'" id="guide">
          Guide
        </vs-navbar-item>
      </vs-navbar>
  - name: left
    type: slot
    values: null
    description: Add the elements on the left side of the component.
    default: null
    link: null
    usage: '#default'
    code: >
      <template #left>
        <img src="/logo2.png" alt="">
      </template>
  - name: right
    type: slot
    values: null
    description: Add the elements on the right side of the component.
    default: null
    link: null
    usage: '#default'
    code: >
      <template #right>
        <vs-button flat> Login </vs-button>
        <vs-button> Get Started </vs-button>
      </template>
---

# Navbar

<card>

## Default

<docs-warn />

Quickly generate a menu with the `vs-navbar` component, as such the component is divided into 3 slots (**left**, **center** (default), **right**) with which you can determine the location of the elements, as sub components we have `vs-navbar-item` and` vs-navbar-group`

::: tip
You can see a complete example and change the properties in real time
[Here](/examples/navbar.html)
:::

<template #example>
<navbar-default />
</template>

<template #template>

@[code{1-30}](../.vuepress/components/navbar/default.vue)

</template>

<template #script>

@[code{32-36}](../.vuepress/components/navbar/default.vue)

</template>

</card>

<card>

## Color

Change the component's color with the `color` property or by directly adding one of the main vuesax colors

if you want to change the text color to white you can do it with the property `text-white`

<template #example>
<navbar-color />
</template>

<template #template>

@[code{1-40}](../.vuepress/components/navbar/color.vue)

</template>

<template #script>

@[code{41-45}](../.vuepress/components/navbar/color.vue)

</template>

</card>

<card>

## Hide scroll

Add functionality to hide navbar when user scroll down and show when upload

<template #example>
<navbar-hideScroll />
</template>

<template #template>

@[code{1-35}](../.vuepress/components/navbar/hideScroll.vue)

</template>

<template #script>

@[code{37-41}](../.vuepress/components/navbar/hideScroll.vue)

</template>

</card>

<card>

## Group

You can add a list of elements within an item with the `vs-navbar-group` component and within it add the `vs-navbar-item` components

<template #example>
<navbar-group />
</template>

<template #template>

@[code{1-58}](../.vuepress/components/navbar/group.vue)

</template>

<template #script>

@[code{60-64}](../.vuepress/components/navbar/group.vue)

</template>

</card>

<card>

## Padding Scroll

Add the functionality that the component has a padding up and down that when it is lowered the scroll is eliminated giving a pleasant effect

<template #example>
<navbar-paddingScroll />
</template>

<template #template>

@[code{1-36}](../.vuepress/components/navbar/paddingScroll.vue)

</template>

<template #script>

@[code{38-42}](../.vuepress/components/navbar/paddingScroll.vue)

</template>

</card>

<card>

## Square

Remove the border-radius property by making the component square

<template #example>
<navbar-square />
</template>

<template #template>

@[code{1-36}](../.vuepress/components/navbar/square.vue)

</template>

<template #script>

@[code{38-42}](../.vuepress/components/navbar/square.vue)

</template>

</card>

<card>

## Not line

Eliminates the active effect line of the component

<template #example>
<navbar-notLine />
</template>

<template #template>

@[code{1-30}](../.vuepress/components/navbar/notLine.vue)

</template>

<template #script>

@[code{32-36}](../.vuepress/components/navbar/notLine.vue)

</template>

</card>

<card>

## API

</card>
