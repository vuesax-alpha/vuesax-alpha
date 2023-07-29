---
PROPS:
  - name: v-model
    type: Object, Array
    values: Object, Array
    description: Determines the table values ​​that are selected.
    default: null
    link: null
    usage: '#single-selected'
    code: null
  - name: striped
    type: Boolean
    values: true, false
    description: Add stripes to the gray tr.
    default: null
    link: null
    usage: '#striped'
    code: null
  - name: vs-tr:data
    type: Object
    values: Object
    description: when the functionality of selected is needed this property is needed since it is the object that is passed to the v-model.
    default: null
    link: null
    usage: '#single-selected'
    code: null
  - name: vs-tr:is-selected
    type: Boolean
    values: true, false
    description: Determines if the component is in the selected state, for optimize perf
    default: false
    link: null
    usage: '#single-selected'
    code: null
  - name: vs-td:edit
    type: Boolean
    values: true, false
    description: Determine if the element is editable by adding underline and the pointer cursor.
    default: false
    link: null
    usage: '#edit-data'
    code: null
  - name: vs-th:sort
    type: Boolean
    values: true, false
    description: Add the sort arrows to the corresponding th.
    default: false
    link: null
    usage: '#sort'
    code: null
  - name: vs-tr:color
    type: String, Vuesax colors
    values: color, vuesax colors
    description: Change the color of the tr.
    default: null
    link: null
    usage: '#color'
    code: null

SLOTS:
  - name: header
    type: slot
    values: null
    description: Space to put an element at the top of the table such as the input search.
    default: null
    link: null
    usage: '#sort'
    code: >
      <template #header>
        ...
      </template>
  - name: thead
    type: slot
    values: null
    description: Space representing thead element of the table where the `vs-th` components will be placed.
    default: null
    link: null
    usage: '#default'
    code: >
      <template #thead>
        <vs-tr>
          <vs-th> Name </vs-th>
          <vs-th> Email </vs-th>
          <vs-th> Id </vs-th>
        </vs-tr>
      </template>
  - name: tbody
    type: slot
    values: null
    description: Represents the tbody element in the table and here we will put the `vs-tr` components.
    default: null
    link: null
    usage: '#default'
    code: >
      <template #tbody>
        <vs-tr
          v-for="tr in users"
          :data="tr"
        >
          <vs-td> {{ tr.name }} </vs-td>
          <vs-td> {{ tr.email }} </vs-td>
          <vs-td> {{ tr.id }} </vs-td>
        </vs-tr>
      </template>
  - name: vs-tr:#expand
    type: slot
    values: null
    description: Represents the interior of the tr when it is expanded.
    default: null
    link: null
    usage: '#expand'
    code: null
  - name: notFound
    type: slot
    values: null
    description: Change the item to display when there are no items in the table.
    default: null
    link: null
    usage: '#miscellaneous'
    code: >
      <template #notFound> Not Found </template>
---

# Table

<card>

## Default

<docs-warn />

Create a table simply with the `vs-table` component and its`vs-tr`, `vs-td`,`vs-th` components.

This component has a different logic for better data management and freer customization according to needs.

<template #example>
<table-default />
</template>

<template #template>

@[code{1-26} html{3}](../.vuepress/components/table/default.vue)

</template>

<template #script>

@[code{28-109}](../.vuepress/components/table/default.vue)

</template>

</card>

<card>

## Striped

You can easily strip the table with the `striped` property

<template #example>
<table-striped />
</template>

<template #template>

@[code{1-26} html{1}](../.vuepress/components/table/striped.vue)

</template>

<template #script>

@[code{28-109}](../.vuepress/components/table/default.vue)

</template>

</card>

<card>

## Color

Change the color of a tr by adding the color property to the component `vs-tr`

<template #example>
<table-color />
</template>

<template #template>

@[code{1-26} vue{14-17}](../.vuepress/components/table/color.vue)

</template>

<template #script>

@[code{28-125}](../.vuepress/components/table/color.vue)

</template>

</card>

<card>

## Pagination

You can add the pagination functionality for the table using the `#footer` slot and the vs-pagination component

To make the development easier you can use the vuesax function that generates the items (`getPage`) based on the page and also the one that generates the total number of pages in the pagination component (`getLength`)

This way of handling data is to improve the freedom of customization without losing the ease of implementation

See the example

<template #example>
<table-pagination />
</template>

<template #template>

@[code{1-38} vue{12,25}](../.vuepress/components/table/pagination.vue)

</template>

<template #script>

@[code{40-126}](../.vuepress/components/table/pagination.vue)

</template>

</card>

<card>

## Single Selected

You can add the select functionality with a v-model in the table and the `is-selected` property

::: tip TIP
Using the `data` property in the `tr` is important as that is the data to be added to the v-model
:::

<template #example>
<table-selected />
</template>

<template #template>

@[code{1-32} vue{3,15}](../.vuepress/components/table/selected.vue)

</template>

<template #script>

@[code{34-119}](../.vuepress/components/table/selected.vue)

</template>

</card>

<card>

## Multiple Selected

You can do multiple select functionality in the table with the `v-model` property with its value being an array

for this functionality you can use for example the vuesax checkboxes and the function `toggleSelectAll` in the checkbox of th

<template #example>
<table-multiple />
</template>

<template #template>

@[code{1-50} vue{3}](../.vuepress/components/table/multiple.vue)

</template>

<template #script>

@[code{52-144}](../.vuepress/components/table/multiple.vue)

</template>

</card>

<card>

## Expandable data

To add a `tr` that can display expanded data use the`#expand` slot inside the `vs-tr` component.

<template #example>
<table-expand />
</template>

<template #template>

@[code{1-48} vue{23-43}](../.vuepress/components/table/expand.vue)

</template>

<template #script>

@[code{50-131}](../.vuepress/components/table/expand.vue)

</template>

</card>

<card>

## Edit data

You can edit the data inside the table easily using the `vs-dialog` component and the magic of vuejs

<template #example>
<table-edit />
</template>

<template #template>

@[code{1-61} vue{15,21,32}](../.vuepress/components/table/edit.vue)

</template>

<template #script>

@[code{63-150} vue{23-41}](../.vuepress/components/table/edit.vue)

</template>

</card>

<card>

## Sort

Sort functionality is independent and you can use the global function `sortData`

::: tip TIP
The `sortData` function needs 4 parameters: the event, the data of the table, the number of items to be ordered, and the sort type
:::

<command>

```ts
/**
 * return array was sorted
 */
declare function sortData<T extends Record<string, unknown>>(
  event: Event,
  arr: T[],
  sortKey: keyof T,
  sortType?: 'desc' | 'esc'
): T[]
```

</command>

<template #example>
<table-sort />
</template>

<template #template>

@[code{1-35} vue{5,21}](../.vuepress/components/table/sort.vue)

</template>

<template #script>

@[code{37-122} vue{15,21,32}](../.vuepress/components/table/sort.vue)

</template>

</card>

<card>

## Miscellaneous

This is a sample of everything united and its functionality together

<template #example>
<table-miscellaneous />
</template>

<template #template>

@[code{1-121}](../.vuepress/components/table/miscellaneous.vue)

</template>

<template #script>

@[code{123-221}](../.vuepress/components/table/miscellaneous.vue)

</template>

<template #style>

@[code{223-238}](../.vuepress/components/table/miscellaneous.vue)

</template>

</card>

<card>

## Functions

We create this component with a different logic and maybe something not very common as a first point we want development to be more free and for the programmer to have many options and customization based on what he needs and wants to create, for example a very important theme it is the queries of the data in the server and that now they are not manipulated by the component until you yourself using a vuesax function impose it

So now we use functions that you can use if you need them such as:

#### toggleSelectAll

See the [Example](#miscellaneous):
<command>

```ts
/**
 * return empty array if all items are in selected, otherwise return originalData
 *
 * @param selected Array
 * @param originalData Array
 *
 * @returns Array
 */
declare function toggleSelectAll<T = any>(selected: T[], originalData: T[]): T[]
```

</command>

#### sortData

See the [Example](#sort):
<command>

```ts
/**
 * return array was sorted
 */
declare function sortData<T extends Record<string, unknown>>(
  event: Event,
  arr: T[],
  sortKey: keyof T,
  sortType?: 'desc' | 'esc'
): T[]
```

</command>

## API

</card>
