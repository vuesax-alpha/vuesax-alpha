---
PROPS:
  - name: color
    type: String
    values: Main colors of vuesax, RGB, HEX
    description: Change the color of the component.
    default: primary
    link: null
    usage: "#color"
    code: >
      <template>
        <vs-select
          v-model="color.value"
          v-for="color in colors"
          :color="color.color"
          placeholder="Select"
        >
          <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
          <vs-option label="Vue" value="2"> Vue </vs-option>
          <vs-option label="Javascript" value="3"> Javascript </vs-option>
          <vs-option label="Sass" value="4"> Sass </vs-option>
          <vs-option label="Typescript" value="5"> Typescript </vs-option>
          <vs-option label="Webpack" value="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
        </vs-select>
      </template>

      <script lang="ts" setup>
        const colors = [
          {
            color: "danger",
            value: "1",
          },
          {
            color: "success",
            value: "2",
          },
          {
            color: "warn",
            value: "3",
          },
          {
            color: "dark",
            value: "4",
          },
          {
            color: "#7d33ff",
            value: "5",
          },
          {
            color: "rgb(59,222,200)",
            value: "6",
          },
        ];
      </script>
  - name: loading
    type: Boolean
    values: true, false
    description: Determine if the component is in the loading state and add an animation.
    default: false
    link: null
    usage: "#loading"
    code: >
      <vs-select placeholder="Success" loading>
        <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
        <vs-option label="Vue" value="2"> Vue </vs-option>
        <vs-option label="Javascript" value="3"> Javascript </vs-option>
        <vs-option label="Sass" value="4"> Sass </vs-option>
        <vs-option label="Typescript" value="5"> Typescript </vs-option>
        <vs-option label="Webpack" value="6"> Webpack </vs-option>
        <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
      </vs-select>
  - name: placeholder
    type: String
    values: String
    description: Add a placeholder to the component.
    default: null
    link: null
    usage: "#default"
    code: >
      <vs-select placeholder="Select" v-model="value">
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option disabled label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>

  - name: label
    type: String
    values: String
    description: Add a label to the composite select.
    default: null
    link: null
    usage: "#label"
    code: >
      <vs-select
        label="Label"
        v-model="value"
      >
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>
  - name: label-placeholder
    type: String
    values: String
    description: Add a placeholder that when in focus or with value becomes a label.
    default: null
    link: null
    usage: "#label"
    code: >
      <vs-select
        label-placeholder="Label-placeholder"
        v-model="value"
      >
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>

  - name: filter
    type: Boolean
    values: true, false
    description: Add the functionality to filter the select options.
    default: false
    link: null
    usage: "#filter"
    code: >
      <vs-select
        filter
        placeholder="Filter"
        v-model="value"
      >
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>

  - name: multiple
    type: Boolean
    values: true, false
    description: Add the functionality of being able to select several options from a select.
    default: false
    link: null
    usage: "#multiple"
    code: >
      <vs-select
        label="Multiple"
        multiple
        placeholder="Filter"
        v-model="value"
      >
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>

  - name: state
    type: String
    values: Vuesax main colors
    description: Change the state of the component to the color provided.
    default: false
    link: null
    usage: "#state"
    code: >
      <vs-select
        v-model="color.value"
        v-for="color in colors"
        :state="color.color"
        :label="color.color"
        placeholder="Select"
        >
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
          </vs-select>
        </div>
      </template>

      <script lang="ts" setup>
        const colors = [
          {
            color: "primary",
            value: "1",
          },
          {
            color: "danger",
            value: "1",
          },
          {
            color: "success",
            value: "2",
          },
          {
            color: "warn",
            value: "3",
          },
          {
            color: "dark",
            value: "4",
          },
        ];
      </script>

  - name: disabled
    type: Boolean
    values: true, false
    description: Determine if the component is in the disabled state.
    default: false
    link: null
    usage: null
    code: >
      <vs-select
        disabled
        placeholder="Success"
        v-model="value"
      >
        <template #message-success>
          Option Valid
        </template>
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>
  - name: collapse-chips
    type: Boolean
    values: true, false
    description: Determine if the chips in multiple are reduced to 2 elements.
    default: false
    link: null
    usage: "#multiple"
    code: >
      <vs-select
        label="Multiple collapse chips"
        filter
        multiple
        collapse-chips
        placeholder="Collapse chips"
        v-model="value"
      >
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>

  - name: title
    state:
      text: New
    type: String
    values: String
    description: Set title for select group (required)
    default: null
    link: null
    usage: "#group"
    code: >
      <vs-select label="Group" placeholder="Group" v-model="value">
        <vs-option-group title="Vuejs"> <!-- PROP: title is required -->
          <vs-option label="Vuesax" value="1"> Vuesax </vs-option>
          <vs-option label="Vue" value="2"> Vue </vs-option>
          <vs-option label="Javascript" value="3"> Javascript </vs-option>
        </vs-option-group>
        <vs-option-group title="Others">
          <vs-option label="Sass" value="4"> Sass </vs-option>
          <vs-option label="Typescript" value="5"> Typescript </vs-option>
          <vs-option label="Webpack" value="6"> Webpack </vs-option>
          <vs-option label="Nodejs" value="7"> Nodejs </vs-option>
        </vs-option-group>
      </vs-select>

SLOTS:
  - name: message-{color}
    type: slot
    values: warn, danger, success
    description: Add a message below the select.
    default: null
    link: null
    usage: "#message"
    code: >
      <vs-select
        placeholder="Success"
        v-model="value"
      >
        <template #message-success>
          Option Valid
        </template>
        <vs-option label="Vuesax" value="1">
          Vuesax
        </vs-option>
        <vs-option label="Vue" value="2">
          Vue
        </vs-option>
        <vs-option label="Javascript" value="3">
          Javascript
        </vs-option>
        <vs-option label="Sass" value="4">
          Sass
        </vs-option>
        <vs-option label="Typescript" value="5">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="6">
          Webpack
        </vs-option>
        <vs-option label="Nodejs" value="7">
          Nodejs
        </vs-option>
      </vs-select>
  - name: title
    state: 
      text: Removed
      type: warn
    type: slot
    values: null
    description: The vs-option-group component adds a title to the option group.
    default: null
    link: null
    usage: "#group"
    code: >
      <vs-select
        label="Group"
        placeholder="Group"
        v-model="value"
      >
        <vs-option-group>
          <template #title>
            Vuejs
          </div>
          <vs-option label="Vuesax" value="1">
            Vuesax
          </vs-option>
          <vs-option label="Vue" value="2">
            Vue
          </vs-option>
          <vs-option label="Javascript" value="3">
            Javascript
          </vs-option>
        </vs-option-group>
        <vs-option-group>
          <template #title>
            Others
          </template>
          <vs-option label="Sass" value="4">
            Sass
          </vs-option>
          <vs-option label="Typescript" value="5">
            Typescript
          </vs-option>
          <vs-option label="Webpack" value="6">
            Webpack
          </vs-option>
          <vs-option label="Nodejs" value="7">
            Nodejs
          </vs-option>
        </vs-option-group>
      </vs-select>

---

# Select

<card>

## Default

<docs-warn />

Add a select element with the `vs-select` component and the `vs-option` sub component

<template #example>
  <select-default />
</template>

<template #template>

@[code{1-13} html{3}](../.vuepress/components/select/default.vue)

</template>

<template #script>

@[code{15-19}](../.vuepress/components/select/default.vue)

</template>

</card>

<card>

## Color

Change the color of the component with the `color` property, the allowed values ​​are the main colors of vuesax and the colors (**RGB** and **HEX**)

<template #example>
  <select-color />
</template>

<template #template>

@[code{1-18} html{6}](../.vuepress/components/select/color.vue)

</template>

<template #script>

@[code{20-47}](../.vuepress/components/select/color.vue)

</template>

</card>

<card>

## Label

Add a label to the select easily with the `label` property, you can also add a `label-placeholder` which as its name says is a placeholder that encourages label, and finally the placeholder with the `placeholder` property

<template #example>
  <select-label />
</template>

<template #template>

@[code{1-33} html{3,13,23}](../.vuepress/components/select/label.vue)

</template>

<template #script>

@[code{34-40}](../.vuepress/components/select/label.vue)

</template>

</card>

<card>

## Group

Group options within the select with the sub-component `vs-option-group`, as the required prop is the `title` to add a title to the item group

<template #example>
  <select-group />
</template>

<template #template>

@[code{1-56} html{4,9}](../.vuepress/components/select/group.vue)

</template>

<template #script>

@[code{64-70}](../.vuepress/components/select/group.vue)

</template>

</card>

<card>

## Filter

You can add the functionality of filtering options with the `filter` property, this property is a `boolean` so you can add it without any value

<template #example>
  <select-filter />
</template>

<template #template>

@[code{1-22} html{3,12}](../.vuepress/components/select/filter.vue)

</template>

<template #script>

@[code{24-29}](../.vuepress/components/select/filter.vue)

</template>

</card>

<card>

## Multiple

Add the functionality of multiple selection of options with the `multiple` property, this property is a `boolean` so you can add it without any value

::: tip
The value of the select must be an array
:::

<template #example>
  <select-multiple />
</template>

<template #template>

@[code{1-51} html{5,21,37}](../.vuepress/components/select/multiple.vue)

</template>

<template #script>

@[code{53-59}](../.vuepress/components/select/multiple.vue)

</template>

</card>

<card>

## Loading

Add a loading animation to the select with the `loading` property, this property is a `boolean` so you can add it without any value

<template #example>
  <select-loading />
</template>

<template #template>

@[code{1-23} html{3}](../.vuepress/components/select/loading.vue)

</template>

<template #script>

@[code{25-30}](../.vuepress/components/select/loading.vue)

</template>

</card>

<card>

## State

Change the style of the component to the color passed in the `state` property, the allowed colors are only the main ones of vuesax

::: tip
This property can be used to indicate a missing field to the user or when something is ready.
:::

<template #example>
  <select-state />
</template>

<template #template>

@[code{1-19} html{6}](../.vuepress/components/select/state.vue)

</template>

<template #script>

@[code{21-44}](../.vuepress/components/select/state.vue)

</template>

</card>

<card>

## Message

Add an item below the select showing a message to the user

<template #example>
  <select-message />
</template>

<template #template>

@[code{1-38} html{4,15,26-28}](../.vuepress/components/select/message.vue)

</template>

<template #script>

@[code{39-45}](../.vuepress/components/select/message.vue)

</template>

</card>

<card>

## API

</card>
