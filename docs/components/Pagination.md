---
PROPS:
  - name: v-model
    type: Number
    values: Number
    description: Determine the page where the user is.
    default: 1
    link: null
    usage: "#default"
    code: >
      <vs-pagination v-model="page" :length="20" />
  - name: length
    type: Number
    values: Number
    description: It is the total number of pages that the component has.
    default: null
    link: null
    usage: "#default"
    code: >
      <vs-pagination v-model="page" :length="20" />
  - name: color
    type: Vuesax colors, RGB, HEX
    values: String
    description: Change the base color of the component.
    default: primary
    link: null
    usage: "#color"
    code: >
      <vs-pagination color="danger" v-model="page" :length="20" />
  - name: disabled
    type: Boolean
    values: true, false
    description: Determine if the entire component is in the disabled state.
    default: false
    link: null
    usage: "#disabled"
    code: >
      <vs-pagination disabled v-model="page" :length="20" />
  - name: not-arrows
    type: Boolean
    values: true, false
    description: Remove the arrows (next and back) of the component.
    default: false
    link: null
    usage: "#not-arrows"
    code: >
      <vs-pagination not-arrows v-model="page" :length="20" />
  - name: only-arrows
    type: Boolean
    values: true, false
    description: Remove the items leaving only the arrows (next and back).
    default: false
    link: null
    usage: "#only-arrows"
    code: >
      <vs-pagination only-arrows v-model="page" :length="20" />
  - name: circle
    type: Boolean
    values: true, false
    description: Change the style of the buttons making them completely round.
    default: false
    link: null
    usage: "#circle"
    code: >
      <vs-pagination circle v-model="page" :length="20" />
  - name: square
    type: Boolean
    values: true, false
    description: Change the style of the buttons making them totally square.
    default: false
    link: null
    usage: "#square"
    code: >
      <vs-pagination square v-model="page" :length="20" />
  - name: buttons-dotted
    type: Boolean
    values: true, false
    description: Makes the buttons not have the internal number and changes its size.
    default: false
    link: null
    usage: "#buttons-dotted"
    code: >
      <vs-pagination buttons-dotted v-model="page" :length="20" />
  - name: disabled-items
    type: Boolean
    values: true, false
    description: Determine which items are in the disabled state.
    default: false
    link: null
    usage: "#disabled-items"
    code: >
      <vs-pagination :disabled-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
  - name: loading-items
    type: Boolean
    values: true, false
    description: Determine which items are in the charging state.
    default: false
    link: null
    usage: "#loading-items"
    code: >
      <vs-pagination :loading-items="[3,4,9,10,11,12,19]" v-model="page" :length="20" />
  - name: not-margin
    type: Boolean
    values: true, false
    description: Change the margin between the items causing them to be fully glued and the radius is removed making them square.
    default: false
    link: null
    usage: "#not-margin"
    code: >
      <vs-pagination not-margin v-model="page" :length="20" />
  - name: progress
    type: Boolean
    values: true, false
    description: Add a progress bar to the component determined by the current page and the total (length) of pages.
    default: false
    link: null
    usage: "#progress"
    code: >
      <vs-pagination progress v-model="page" :length="20" />
  - name: dotted-number
    type: Number
    values: Number
    description: Change the total pages to be added or subtracted by clicking on the points.
    default: false
    link: null
    usage: "#dotted-number"
    code: >
      <vs-pagination :dotted-number="10" v-model="page" :length="100" />
  - name: infinite
    type: Boolean
    values: true,false
    description: Determine if the pagination is infinite.
    default: false
    link: null
    usage: "#infinite"
    code: >
      <vs-pagination infinite v-model="page" :length="100" />

SLOTS:
  - name: default
    type: slot
    values: null
    description: Space between the two arrows (next and back).
    default: null
    link: null
    usage: "#slot"
    code: >
      <vs-pagination v-model="page" :length="20">
        <vs-select v-model="page">
          <vs-option
            v-for="numberPage in 20"
            :label="numberPage"
            :value="numberPage"
          >
            {{ numberPage }}
          </vs-option>
        </vs-select>
      </vs-pagination>

---

# Pagination

<card>

## Default

<docs-warn />

Easily add a pagination with the `vs-pagination` component, the required properties are `length` and `v-model`

<template #example>
  <pagination-default />
</template>

<template #template>

@[code{1-5} html{3}](../.vuepress/components/pagination/default.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/default.vue)

</template>

</card>

<card>

## Color

<coloren />

<template #example>
  <pagination-color />
</template>

<template #template>

@[code{1-15} html{4}](../.vuepress/components/pagination/color.vue)

</template>

<template #script>

@[code{17-22}](../.vuepress/components/pagination/color.vue)

</template>

<template #style>

@[code{24-39}](../.vuepress/components/pagination/color.vue)

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

## Not Arrows

You can remove the back and next arrows with the `not-arrows` property

<template #example>
  <pagination-not-arrows />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/not-arrows.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/not-arrow.vue)

</template>

</card>

<card>

## Only Arrows

You may need in small spaces to remove the buttons and leave only the arrows for it we have the property `only-arrows`

<template #example>
  <pagination-only-arrow />
</template>

<template #template>

@[code{1-8} vue{3}](../.vuepress/components/pagination/only-arrow.vue)

</template>

<template #script>

@[code{10-14}](../.vuepress/components/pagination/only-arrow.vue)

</template>

</card>

<card>

## Circle

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

## Square

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

@[code{1-8} vue{3}](../.vuepress/components/pagination/buttons-dotted.vue)

</template>

<template #script>

@[code{11-14}](../.vuepress/components/pagination/buttons-dotted.vue)

</template>

</card>

<card>

## Disabled Items

You can put disabled buttons specific to the pagination component with the `disabled-items` property, this property is an array with the number of the button you want to put in disabled status

::: tip
The buttons that are in disabled will skip when changing the value for example on the next or back buttons
:::

<template #example>
  <pagination-disabledItems />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/disabledItems.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/disabledItems.vue)

</template>

</card>

<card>

## Loading Items

You can make a button inside the pagination be in the state of loading with the `loading-items` property, this property is an array with the number of the button that you want to put in the disabled state

::: tip
The buttons that are in loading will skip when changing the value for example in the next or back buttons
:::

<template #example>
  <pagination-loadingItems />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/loadingItems.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/loadingItems.vue)

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

## Slot

You may need to customize your pagination and for this you can use the `default` slot between the arrows and replace the items on the pages

<template #example>
  <pagination-slot />
</template>

<template #template>

@[code{1-15} vue{3}](../.vuepress/components/pagination/slot.vue)

</template>

<template #script>

@[code{17-21}](../.vuepress/components/pagination/slot.vue)

</template>

<template #style>

@[code{23-33}](../.vuepress/components/pagination/slot.vue)

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

## Dotted Number

You can change the number of pages that are added when the user clicks on the points to advance more pages quickly, this can be done with the `dotted-number` property and the value would be the number of pages that are added or subtracted ( default is **5**)

<template #example>
  <pagination-dotted-number />
</template>

<template #template>

@[code{1-5} vue{3}](../.vuepress/components/pagination/dotted-number.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/pagination/dotted-number.vue)

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
