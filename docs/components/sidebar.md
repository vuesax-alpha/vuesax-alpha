---
PROPS:
  - name: open/v-model:open
    type: Boolean
    values: true,false
    description: Determines if the component is visible.
    default: false
    link: null
    usage: '#open'
    code: null

  - name: v-model
    type: String
    values: id
    description: Determines the item that is in active status.
    default: null
    link: null
    usage: '#default'
    code: null

  - name: absolute
    type: boolean
    values: true,false
    description: Determine if the component is of absolute position.
    default: false
    link: null
    usage: '#default'
    code: null

  - name: relative
    type: Boolean
    values: true,false
    description: Determine if the component is relative position.
    default: false
    link: null
    usage: '#default'
    code: null

  - name: reduce
    type: Boolean
    values: true,false
    description: Determine if the component is in a reduced state with a width of 50px.
    default: false
    link: null
    usage: '#reduce'
    code: null

  - name: hover-expand
    type: Boolean
    values: true,false
    description: Adds the functionality to expand when the user enters inside the sidebar and vice versa.
    default: false
    link: null
    usage: '#hover-expand'
    code: null

  - name: shape
    type: string
    values: square
    description: Determine if the component has no border radius
    default: false
    link: null
    usage: null
    code: null

  - name: not-shadow
    type: Boolean
    values: true,false
    description: Remove the shadow from the sidebar
    default: false
    link: null
    usage: null
    code: null

  - name: background
    type: String
    values: Vuesax Colors, RGB, HEX
    description: Change the background color of the sidebar
    default: false
    link: null
    usage: '#color'
    code: null

  - name: text-white
    type: Boolean
    values: true,false
    description: Change the text color to white
    default: false
    link: null
    usage: '#color'
    code: null

  - name: not-line-active
    type: Boolean
    values: true,false
    description: Remove the active line from items
    default: false
    link: null
    usage: null
    code: null

  - name: vs-sidebar-item:to
    type: String
    values: url
    description: Generate a new vue-router route
    default: null
    link: null
    usage: null
    code: null

  - name: vs-sidebar-item:href
    type: String
    values: url
    description: Generate a new route
    default: null
    link: null
    usage: null
    code: null

  - name: right
    type: Boolean
    values: true,false
    description: Determines if the component is positioned to the right
    default: null
    link: null
    usage: null
    code: null

SLOTS:
  - name: logo
    type: slot
    values: null
    description: Add elements on top of the entire sidebar.
    default: null
    link: null
    usage: '#default'
    code: null

  - name: footer
    type: slot
    values: null
    description: Add the elements at the bottom of the sidebar.
    default: null
    link: null
    usage: '#default'
    code: null

  - name: header
    type: slot
    values: null
    description: Add the elements below the logo and above the items.
    default: null
    link: null
    usage: null
    code: null

  - name: vs-sidebar-item#icon
    type: slot
    values: null
    description: It is the space to add the icon or a representative letter.
    default: null
    link: null
    usage: '#default'
    code: null

NEWS:
  - name
---

# Sidebar

<card>

## Default

<docs-warn />

Add a sidebar menu with the `vs-sidebar` component, there are two subcomponents `vs-sidebar-item` and `vs-sidebar-group`

<template #example>
<sidebar-default />
</template>

</card>

<card>

## Group

You can group items and hide them with the `vs-sidebar-group` sub-component.

:::tip
The component has a slot: header in which we add a sub-component `vs-sidebar-item` with the property **arrow** and without the property id to not change the active state when clicking
:::

<template #example>
<sidebar-group />
</template>

<template #template>

@[code{1-170} html](../.vuepress/components/sidebar/group.vue)

</template>

<template #script>

@[code{172-176} html](../.vuepress/components/sidebar/group.vue)

</template>

</card>

<card>

## Reduce

You can make the component 50px wide and only show the icons with the property `reduce` this property is dynamic

:::tip
For the sidebar to work correctly it is necessary to add to the items the icon slot either with an icon or with for example the first letter of the text
:::

<template #example>
<sidebar-reduce />
</template>

<template #template>

@[code{1-171} html](../.vuepress/components/sidebar/reduce.vue)

</template>

<template #script>

@[code{173-177} html](../.vuepress/components/sidebar/reduce.vue)

</template>

</card>

<card>

## Hover expand

You can add the functionality to expand and collapse the sidebar with the mouse, with the property `hover-expand`

<template #example>
<sidebar-reduce-expand />
</template>

<template #template>

@[code{1-171} html](../.vuepress/components/sidebar/reduce-expand.vue)

</template>

<template #script>

@[code{173-177} html](../.vuepress/components/sidebar/reduce-expand.vue)

</template>

</card>

<card>

## Color

Change the color of the sidebar, if necessary you can also change the color of the text to white with the `textWhite` property

<template #example>
<sidebar-color />
</template>

<template #template>

@[code{1-118} html](../.vuepress/components/sidebar/color.vue)

</template>

<template #script>

@[code{120-124} html](../.vuepress/components/sidebar/color.vue)

</template>

</card>

<card>

## Open

You can define if the sidebar is visible or hidden with the open property, this property by default is `false`

<template #example>
<sidebar-open />
</template>

<template #template>

@[code{1-194} html](../.vuepress/components/sidebar/open.vue)

</template>

<template #script>

@[code{196-201} html](../.vuepress/components/sidebar/open.vue)

</template>

</card>

<card>

## Position Right

Change the position of the sidebar to the right and its animation with the `right` property

<template #example>
<sidebar-right />
</template>

<template #template>

@[code{1-101} html](../.vuepress/components/sidebar/right.vue)

</template>

<template #script>

@[code{103-107} html](../.vuepress/components/sidebar/right.vue)

</template>

</card>

<card>

## API

</card>
