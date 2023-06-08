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
  - name: shadow-scroll
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
  - name: hide-scroll
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
  - name: padding-scroll
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
  - name: not-line
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
  - name: left-collapsed
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
  - name: center-collapsed
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
  - name: right-collapsed
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
  - name: target-scroll
    type: Boolean
    values: true, false
    description: Determines the element to which the scroll event will be requested.
    default: document
    link: null
    usage: '#target-scroll'
    code: >
      <vs-navbar target-scroll="#my-element">
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
    type: String, Object
    values: vue-router RouteLocationRaw
    description: Use vue-router to generate a new view based on the supplied string.
    default: false
    link: null
    usage: null
    code: >
      <vs-navbar-item to="/">
        ...
      </vs-navbar-item>
  - name: item:to
    type: String, Object
    values: vue-router RouteLocationRaw
    description: Use vue-router to generate a new view based on the supplied string.
    default: false
    link: null
    usage: null
    code: >
      <vs-navbar-item to="/">
        ...
      </vs-navbar-item>
  - name: item:link
    type: Object
    values: NavLink
    description: Use to navigate the site
    default: false
    link: null
    usage: null
    code: >
      <vs-navbar-item :link="{ path: '/docs', text: 'Documents' }">
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

Quickly generate a menu with the `navbar` component, as such the component is divided into 3 slots (**left**, **center** (default), **right**) with which you can determine the location of the elements, as sub components we have `navbar-item` and `navbar-group`

<template #example>
<navbar-default />
</template>

<template #template>

@[code{1-22}](../.vuepress/components/navbar/default.vue)

</template>

<template #script>

@[code{24-28}](../.vuepress/components/navbar/default.vue)

</template>

<template #style>

@[code{30-52}](../.vuepress/components/navbar/default.vue)

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

@[code{1-23}](../.vuepress/components/navbar/color.vue)

</template>

<template #script>

@[code{24-29}](../.vuepress/components/navbar/color.vue)

</template>

<template #style>

@[code{30-52}](../.vuepress/components/navbar/color.vue)

</template>

</card>

<card>

## Hide scroll

Add functionality to hide navbar when user scroll down and show when upload

<template #example>
<navbar-hide-scroll />
</template>

<template #template>

@[code{1-35}](../.vuepress/components/navbar/hide-scroll.vue)

</template>

<template #script>

@[code{37-41}](../.vuepress/components/navbar/hide-scroll.vue)

</template>

<template #style>

@[code{43-65}](../.vuepress/components/navbar/hide-scroll.vue)

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

<template #style>

@[code{66-94}](../.vuepress/components/navbar/group.vue)

</template>

</card>

<card>

## Padding Scroll

Add the functionality that the component has a padding up and down that when it is lowered the scroll is eliminated giving a pleasant effect

<template #example>
<navbar-padding-scroll />
</template>

<template #template>

@[code{1-35}](../.vuepress/components/navbar/padding-scroll.vue)

</template>

<template #script>

@[code{37-41}](../.vuepress/components/navbar/padding-scroll.vue)

</template>

<template #style>

@[code{43-65}](../.vuepress/components/navbar/padding-scroll.vue)

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

<template #style>

@[code{44-66}](../.vuepress/components/navbar/square.vue)

</template>

</card>

<card>

## Not line

Eliminates the active effect line of the component

<template #example>
<navbar-not-line />
</template>

<template #template>

@[code{1-30}](../.vuepress/components/navbar/not-line.vue)

</template>

<template #script>

@[code{32-36}](../.vuepress/components/navbar/not-line.vue)

</template>

</card>

<card>

## Types

```ts
interface NavItem {
  text?: string
  ariaLabel?: string
}

interface NavLink extends NavItem {
  path: string
  target?: string
}

type NavbarItem = NavLink
```

</card>

<card>

## API

</card>
