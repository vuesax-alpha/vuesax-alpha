---
PROPS:
  - name: v-model
    type: Object, Array
    values: Object, Array
    description: Determines the table values ​​that are selected.
    default: null
    link: null
    usage: "#single-selected"
    code: null
  - name: striped
    type: Boolean
    values: true, false
    description: Add stripes to the gray tr.
    default: null
    link: null
    usage: "#striped"
    code: null
  - name: vs-tr:data
    type: Object
    values: Object
    description: when the functionality of selected is needed this property is needed since it is the object that is passed to the v-model.
    default: null
    link: null
    usage: "#single-selected"
    code: >
      <vs-tr
        v-for="tr in users"
        :data="tr"
        :is-selected="selected == tr"
      >
        ...
      </vs-tr>
  - name: vs-tr:is-selected
    type: Boolean
    values: true, false
    description: Determines if the component is in the selected state.
    default: false
    link: null
    usage: "#single-selected"
    code: >
      <vs-tr
        v-for="tr in users"
        :data="tr"
        :is-selected="selected == tr"
      >
        ...
      </vs-tr>
  - name: vs-td:edit
    type: Boolean
    values: true, false
    description: Determine if the element is editable by adding underline and the pointer cursor.
    default: false
    link: null
    usage: "#edit-data"
    code: >
      <vs-td edit @click="edit = tr, editProp = 'name', editActive = true">
        {{ tr.name }}
      </vs-td>
  - name: vs-th:sort
    type: Boolean
    values: true, false
    description: Add the sort arrows to the corresponding th.
    default: false
    link: null
    usage: "#search-and-sort"
    code: >
      <vs-th sort @click="users = sortData($event, users, 'name')">
        Name
      </vs-th>
  - name: vs-tr:color
    type: String, Vuesax colors
    values: color, vuesax colors
    description: Change the color of the tr.
    default: null
    link: null
    usage: "#state"
    code: >
      <vs-tr
        v-for="tr in users"
        :data="tr"
        :danger="tr.id == 3"
        :success="tr.id == 5"
        :primary="tr.id == 8"
        :warn="tr.id == 9"
      >
        ...
      </vs-tr>

SLOTS:
  - name: header
    type: slot
    values: null
    description: Space to put an element at the top of the table such as the input search.
    default: null
    link: null
    usage: "#search-and-sort"
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
    usage: "#default"
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
    usage: "#default"
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
    usage: "#expand"
    code: >
      <template #expand>
        <div class="con-content">
          <div>
            <vs-avatar>
              <img :src="`/avatars/avatar-${i + 1}.png`" alt="">
            </vs-avatar>
            <p> {{ tr.name }} </p>
          </div>
          <div>
            <vs-button flat icon> <i class='bx bx-lock-open-alt' ></i> </vs-button>
            <vs-button flat icon> Send Email </vs-button>
            <vs-button border danger> Remove User </vs-button>
          </div>
        </div>
      </template>
  - name: notFound
    type: slot
    values: null
    description: Change the item to display when there are no items in the table.
    default: null
    link: null
    usage: "#search"
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

@[code{3-24} html{1}](../.vuepress/components/table/default.vue)

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

@[code{3-24} html{1}](../.vuepress/components/table/striped.vue)

</template>

<template #script>

@[code{28-109}](../.vuepress/components/table/default.vue)

</template>

</card>

<card>

## State

Change the state of a tr by adding the color property to the component `vs-tr`

<template #example>
<table-state />
</template>

<template #template>

@[code{3-32} vue{14-17}](../.vuepress/components/table/state.vue)

</template>

<template #script>

@[code{36-117}](../.vuepress/components/table/state.vue)

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

@[code{1-29} vue{12,25}](../.vuepress/components/table/pagination.vue)

</template>

<template #script>

@[code{31-117}](../.vuepress/components/table/pagination.vue)

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

@[code{1-37} vue{3,15}](../.vuepress/components/table/selected.vue)

</template>

<template #script>

@[code{39-124}](../.vuepress/components/table/selected.vue)

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

@[code{1-44} vue{3}](../.vuepress/components/table/multiple.vue)

</template>

<template #script>

@[code{46-150}](../.vuepress/components/table/multiple.vue)

</template>

</card>

<card>

## Expandable data

To add a `tr` that can display expanded data use the`#expand` slot inside the `vs-tr` component.

<template #example>
<table-expand />
</template>

<template #template>

@[code{1-46} vue{23-41}](../.vuepress/components/table/expand.vue)

</template>

<template #script>

@[code{48-129}](../.vuepress/components/table/expand.vue)

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

## Search and sort

The search functionality is now independent and you can use the global function `getSearch`

::: tip TIP
The `getSearch` function needs two parameters: the data of the table to filter and the text to search
:::

#### sort

Sort functionality is independent and you can use the global function `sortData`

::: tip TIP
The `sortData` function needs 3 parameters: the event, the data of the table and the item to be ordered.
:::

<template #example>
<table-search />
</template>

<template #template>

@[code{1-35} vue{5,21}](../.vuepress/components/table/search.vue)

</template>

<template #script>

@[code{37-122} vue{15,21,32}](../.vuepress/components/table/search.vue)

</template>

</card>

<card>

## Miscellaneous

This is a sample of everything united and its functionality together

::: tip
This component is created for much freer customization regarding data handling, for example if you need server-side pagination you just don't use the global function `getSearch`.
:::

<template #example>
<table-miscellaneous />
</template>

<template #template>

@[code{1-115}](../.vuepress/components/table/miscellaneous.vue)

</template>

<template #script>

@[code{117-215}](../.vuepress/components/table/miscellaneous.vue)

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
 * return [] if all items are in selected, otherwise return originalData
 * 
 * @param selected Array
 * @param originalData Array
 * 
 * @returns Array
 */
export declare function toggleSelectAll<Source>(
  selected: Source[],
  originalData: Source[]
): Source[] | []
```

</command>

#### sortData

See the [Example](#search-and-sort):
<command>

```ts
type SortDataOptions<Source> = {
  target: Ref<Element> | Element;
  source: Source[];
  key: keyof Source;
  sortType?: "desc" | "esc";
}
/**
 * return array was sorted
 * 
 * @param options SortDataOptions
 * 
 * @returns Array
 */
export declare function sortData<Source>(
  options?: SortDataOptions<Source>
): Source[];
```
</command>

#### getSearch

See the [Example](#search-and-sort)
<command>

```ts
/**
 * return the items that match the `search` in the entire array
 * 
 * @param source Array
 * @param search String
 * 
 * @returns Array
 */
export declare function getSearch<Source>(
  source: Source[], 
  search: string
): Source[]
```

</command>

#### getPage

See the [Example](#pagination)
<command>

```ts
/**
 * Pagination array - the elements of the page
 * 
 * @param source Array
 * @param page Number
 * @param maxItems Number maximum number of elements in a page
 * 
 * @returns Array
 */
export declare function getPage<Source>(
  source: Source[], 
  page: number,
  maxItems: number
): Source[]
```
</command>

#### getLength

See the [Example](#pagination)
<command>

```ts
/**
 * Pagination array - return the maximum length for pagination
 * 
 * @param source Array
 * @param maxItems Number
 * 
 * @returns Number
 */
export declare function getLength<Source>(
  source: Source[],
  maxItems: number
): number
```
</command>
</card>

<card>

## API

</card>
