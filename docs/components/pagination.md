---
PROPS:
  - name: v-model:current-page
    type: Number
    values: number
    description: Determine the page where the user is.
    default: 1
    link: null
    usage: '#default'
    code: >
      <vs-pagination v-model:current-page="page" :total="20" />
  - name: total
    type: Number
    values: number
    description: It is the total number of pages that the component has.
    default: null
    link: null
    usage: '#default'
    code: >
      <vs-pagination v-model:current-page="page" :total="20" />
  - name: color
    type: String
    values: Vuesax colors, RGB, HEX
    description: Change the base color of the component.
    default: primary
    link: null
    usage: '#color'
    code: >
      <vs-pagination color="danger" v-model:current-page="page" :total="20" />

  - name: disabled
    type: Boolean
    values: true, false
    description: Determine if the entire component is in the disabled state.
    default: false
    link: null
    usage: '#disabled'
    code: >
      <vs-pagination disabled v-model:current-page="page" :total="20" />

  - name: shape
    type: String
    values: circle, square
    description: Change the style of the buttons making them completely round or totally square.
    default: null
    link: null
    usage: '#shape'
    code: >
      <vs-pagination shape="circle" v-model:current-page="page" :total="20" />

      <vs-pagination square v-model:current-page="page" :total="20" />

  - name: buttons-dotted
    type: Boolean
    values: true, false
    description: Makes the buttons not have the internal number and changes its size.
    default: false
    link: null
    usage: '#buttons-dotted'
    code: >
      <vs-pagination buttons-dotted v-model:current-page="page" :total="20" />

  - name: disabled-items
    type: Number[]
    values: null
    description: Determine which items are in the disabled state.
    default: null
    link: null
    usage: '#disabled-items'
    code: >
      <vs-pagination :disabled-items="[3,4,9,10,11,12,19]" v-model:current-page="page" :total="20" />

  - name: loading-items
    type: Number[]
    values: null
    description: Determine which items are in the charging state.
    default: null
    link: null
    usage: '#loading-items'
    code: >
      <vs-pagination :loading-items="[3,4,9,10,11,12,19]" v-model:current-page="page" :total="20" />

  - name: not-margin
    type: Boolean
    values: true, false
    description: Change the margin between the items causing them to be fully glued and the radius is removed making them square.
    default: false
    link: null
    usage: '#not-margin'
    code: >
      <vs-pagination not-margin v-model:current-page="page" :total="20" />

  - name: progress
    type: Boolean
    values: true, false
    description: Add a progress bar to the component determined by the current page and the total of pages.
    default: false
    link: null
    usage: '#progress'
    code: >
      <vs-pagination progress v-model:current-page="page" :total="20" />

  - name: infinite
    type: Boolean
    values: true, false
    description: Determine if the pagination is infinite.
    default: false
    link: null
    usage: '#infinite'
    code: >
      <vs-pagination infinite v-model:current-page="page" :total="100" />

  - name: v-model:page-size
    type: Number
    values: null
    description: item count of each page.
    default: 10
    link: null
    usage: '#default'
    code: null

  - name: default-page-size
    type: Number
    values: null
    description: default initial value of page size
    default: null
    link: null
    usage: null
    code: null

  - name: page-count
    type: Number
    values: null
    description: total page count. Set either total or page-count and pages will be displayed; if you need page-sizes, total is required
    default: null
    link: null
    usage: null
    code: null

  - name: pager-count
    type: Number
    values: 5, 7, 9, 11, 13, 15, 17, 19, 21
    description: number of pagers. Pagination collapses when the total page count exceeds this value
    default: 7
    link: null
    usage: null
    code: null

  - name: default-current-page
    type: Number
    values: null
    description: default initial value of current-page
    default: null
    link: null
    usage: null
    code: null

  - name: layout
    type: String, String[]
    values: prev, pager, next, jumper, ->, total, slot, sizes
    description: layout of Pagination, an array or elements separated with a comma
    default: [prev, pager, next, jumper, ->, total, slot, sizes]
    link: null
    usage: '#default'
    code: null

  - name: page-sizes
    type: Array
    values: number[]
    description: options of item count per page
    default: [10, 20, 30, 40, 50, 100]
    link: null
    usage: null
    code: null

  - name: hide-on-single-page
    type: Boolean
    values: true, false
    description: options of item count per page
    default: false
    link: null
    usage: '#hide-on-single-page'
    code: null

  - name: prev-text
    type: String
    values: null
    description: text for the prev button
    default: null
    link: null
    usage: null
    code: null

  - name: prev-icon
    type: String, Component
    values: null
    description: icon for the prev button, higher priority of prev-text
    default: ChevronLeft
    link: null
    usage: null
    code: null

  - name: next-text
    type: String
    values: null
    description: text for the next button
    default: null
    link: null
    usage: null
    code: null

  - name: next-icon
    type: String, Component
    values: null
    description: icon for the next button, higher priority of next-text
    default: ChevronRight
    link: null
    usage: null
    code: null

SLOTS:
  - name: default
    type: slot
    values: null
    description: Custom content. To use this, need to declare slot in layout
    default: null
    link: null
    usage: '#slot'
    code: >
      <vs-pagination v-model:current-page="page" :total="20">
        <template #default="{ currentPage, total, pageSize, pageSizes, pageCount }">
          // do something
        </template>
      </vs-pagination>
---

# Pagination

<card>

## Default

<docs-warn />

### Layout

Set layout of Pagination, pass an array or elements separated with a comma

The accepted values:

- `prev` a button navigating to the previous page
- `next` a button navigating to the next page
- `jumper` a jump-to input
- `pager` page list
- `sizes` a select to determine page size
- `total` total item count
- `->` Every element after this symbol will be pulled to the right

::: warning NOTE
We'll detect some deprecated usages, if your pagination don't appeared or worked as expected, please check rules below:

You have to define one of total and page-count, otherwise we can't determine count of total pages.When both defined, page-count taken as priority.
If current-page is defined, you have to listen current-page change, by also define @update:current-page, otherwise pagination didn't work.
If page-size is defined while page size selector displayed(sizes included in layout), you have to listen page-size change as well, by define @update:page-size, otherwise change of page size didn't work.
:::

Easily add a pagination with the `vs-pagination` component, the required properties are `total`

<template #example>
<pagination-default />
</template>

<template #template>

@[code{1-9} html{3}](../.vuepress/components/pagination/default.vue)

</template>

<template #script>

@[code{11-15}](../.vuepress/components/pagination/default.vue)

</template>

</card>

<card>

## Color

<coloren />

<template #example>
<pagination-color />
</template>

<template #template>

@[code{1-19} html{4}](../.vuepress/components/pagination/color.vue)

</template>

<template #script>

@[code{21-26}](../.vuepress/components/pagination/color.vue)

</template>

<template #style>

@[code{28-43}](../.vuepress/components/pagination/color.vue)

</template>

</card>

<card>

## Disabled

Change the disabled state of the component with the `disabled` property, this property is a boolean and you can add it without value

<template #example>
<pagination-disabled />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/disabled.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/disabled.vue)

</template>

</card>

<card>

## Shape

### Circle

Change the radius of all the elements that make up the component by making them circular with the `circle` property, this property is a boolean so it does not need value

<template #example>
<pagination-circle />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/circle.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/circle.vue)

</template>

</card>

<card>

### Square

Change the radius of all the elements that make up the component making them square with the `square` property, this property is a boolean so it does not need value

<template #example>
<pagination-square />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/square.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/square.vue)

</template>

</card>

<card>

## Buttons Dotted

Cambia por completo el estilo de el componente y elimina los números internos en cada botón con la propiedad `buttons-dotted`

<template #example>
<pagination-buttons-dotted />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/buttons-dotted.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/buttons-dotted.vue)

</template>

</card>

<card>

## Disabled Items

You can put disabled buttons specific to the pagination component with the `disabled-items` property, this property is an array with the number of the button you want to put in disabled status

::: tip
The buttons that are in disabled will skip when changing the value for example on the next or back buttons
:::

<template #example>
<pagination-disabled-items />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/disabled-items.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/disabled-items.vue)

</template>

</card>

<card>

## Loading Items

You can make a button inside the pagination be in the state of loading with the `loading-items` property, this property is an array with the number of the button that you want to put in the disabled state

::: tip
The buttons that are in loading will skip when changing the value for example in the next or back buttons
:::

<template #example>
<pagination-loading-items />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/loading-items.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/loading-items.vue)

</template>

</card>

<card>

## Not Margin

Change the style of the entire component by removing the margin between the buttons and changing the radius with the `not-margin` property

<template #example>
<pagination-not-margin />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/not-margin.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/not-margin.vue)

</template>

</card>

<card>

## Progress

Add a progress bar to the pagination by referencing where you find the last page with the `progress` property

<template #example>
<pagination-progress />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/progress.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/progress.vue)

</template>

</card>

<card>

## Infinite

You can make the pagination infinite with the `infinite` property, this means that the arrow buttons are no longer in the disabled state

<template #example>
<pagination-infinite />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/infinite.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/infinite.vue)

</template>

</card>

<card>

## API

</card>
