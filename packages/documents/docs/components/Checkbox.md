---
PROPS:
  - name: v-model
    type: Boolean, String, Array
    values: boolean, string, array
    description: determine the value of the checkbox and data anchor.
    default: false
    link: null
    usage: "#default"
    code: >
      <template>
        <vs-checkbox v-model="option">
          Option
        </vs-checkbox>
      </template>
  - name: color
    type: String
    values: vuesax colors, RGB, HEX
    description: Change the color of the component.
    default: false
    link: null
    usage: "#color"
    code: >
      <template>
        <vs-checkbox v-model="option1">
          Primary
        </vs-checkbox>
        <vs-checkbox success v-model="option2">
          Success
        </vs-checkbox>
        <vs-checkbox danger v-model="option3">
          Danger
        </vs-checkbox>
        <vs-checkbox warn v-model="option4">
          warning
        </vs-checkbox>
        <vs-checkbox dark v-model="option5">
          dark
        </vs-checkbox>
        <vs-checkbox color="#7d33ff" v-model="option6">
          dark
        </vs-checkbox>
        <vs-checkbox color="rgb(59,222,200)" v-model="option7">
          RGB
        </vs-checkbox>
      </template>
  - name: val
    type: String, Object
    values: String, Object
    description: Determine the value of the input when being checked.
    default: true
    link: null
    usage: "#string-value"
    code: >
      <template>
        <vs-checkbox val="automatically" v-model="option">
          Save data automatically
        </vs-checkbox>

        <span class="data">
          {{ option ? option : 'null'}}
        </span>
      </template>

  - name: loading
    type: Boolean
    values: true, false
    description: Add a loading animation and disable the input.
    default: false
    link: null
    usage: "#loading"
    code: >
      <template>
        <vs-checkbox loading v-model="option">
          Loading checked
        </vs-checkbox>
        <vs-checkbox loading v-model="option2">
          Loading unchecked
        </vs-checkbox>
      </template>

  - name: line-through
    type: Boolean
    values: true, false
    description: Add a line in the center of the label when checked.
    default: false
    link: null
    usage: "#linethrough"
    code: >
      <template>
        <vs-checkbox line-through v-model="option">
          Option
        </vs-checkbox>
      </template>

  - name: indeterminate
    type: Boolean
    values: true, false
    description: Change the default checkbox icon to a line that represents undetermined data.
    default: false
    link: null
    usage: "#Indeterminate"
    code: >
      <template>
        <vs-checkbox indeterminate v-model="option">
          Option
        </vs-checkbox>
      </template>

  - name: label-before
    type: Boolean
    values: true, false
    description: Change the position of the label.
    default: false
    link: null
    usage: "#label"
    code: >
      <template>
        <vs-checkbox label-before v-model="option2">
          Label Before
        </vs-checkbox>
      </template>

  - name: checked
    type: Boolean
    values: true, false
    description: Determine if the component is initially in check (this changes the property computed in v-model to true).
    default: false
    link: null
    usage: null
    code: >
      <template>
        <vs-checkbox label-before v-model="option2">
          Label Before
        </vs-checkbox>
      </template>

SLOTS:
  - name: icon
    type: slot
    values: null
    description: Change the component icon.
    default: null
    link: null
    usage: "#icon"
    code: >
      <template>
        <vs-checkbox v-model="option1">
          <template #icon>
            <i class='bx bx-check' ></i>
          </template>
        </vs-checkbox>
        <vs-checkbox success v-model="option2">
          <template #icon>
            <i class='bx bx-check-double'></i>
          </template>
        </vs-checkbox>
        <vs-checkbox danger v-model="option3">
          <template #icon>
            <i class='bx bx-x'></i>
          </template>
        </vs-checkbox>
        <vs-checkbox warn v-model="option4">
          <template #icon>
            <i class='bx bxs-shield'></i>
          </template>
        </vs-checkbox>
        <vs-checkbox dark v-model="option5">
          <template #icon>
            <i class='bx bxs-heart' ></i>
          </template>
        </vs-checkbox>
        <vs-checkbox color="#7d33ff" v-model="option6">
          <template #icon>
            <i class='bx bx-brightness' ></i>
          </template>
        </vs-checkbox>
        <vs-checkbox color="rgb(59,222,200)" v-model="option7">
          <template #icon>
            <i class='bx bxs-paint' ></i>
          </template>
        </vs-checkbox>
      </template>

  - name: default
    type: slot
    values: null
    description: Add a label to the component.
    default: null
    link: null
    usage: "#default"
    code: >
      <template>
        <vs-checkbox v-model="option">
          Option
        </vs-checkbox>
      </template>
---

# Checkbox

<card>

## Default

<docs-warn />

Add a checkbox type input easily and with a beautiful animation

<template #example>
  <checkbox-default />
</template>

<template #template>

@[code{1-7}](../.vuepress/components/checkbox/default.vue)

</template>

<template #script>

@[code{8-12}](../.vuepress/components/checkbox/default.vue)

</template>

</card>

<card>

## color

Change the color of the component with the `color` property, the allowed values ​​are (main colors of vuesax, RGB, HEX)

<template #example>
  <checkbox-color />
</template>

<template #template>

@[code{1-11}](../.vuepress/components/checkbox/color.vue)

</template>

<template #script>

@[code{12-22}](../.vuepress/components/checkbox/color.vue)

</template>

</card>

<card>

## Boolean Value

By default the component is used with a boolean value that when being checked returns `true` and when not being checked returns `false`

<template #example>
  <checkbox-boolean />
</template>

<template #template>

@[code{1-10}](../.vuepress/components/checkbox/boolean.vue)

</template>

<template #script>

@[code{11-16}](../.vuepress/components/checkbox/boolean.vue)

</template>

</card>

<card>

## String Value

You may need to return a string when the component is checked for it use the `val` property with the `string` you want to return

<template #example>
  <checkbox-string />
</template>

<template #template>

@[code{1-11}](../.vuepress/components/checkbox/string.vue)

</template>

<template #script>

@[code{13-17}](../.vuepress/components/checkbox/string.vue)

</template>

</card>

<card>

## Array Value

You may need to return a string when the component is checked for it use the `val` property with the `string` you want to return

<template #example>
  <checkbox-array />
</template>

<template #template>

@[code{1-13}](../.vuepress/components/checkbox/array.vue)

</template>

<template #script>

@[code{15-19}](../.vuepress/components/checkbox/array.vue)

</template>

</card>

<card>

## Array Object values

the `val` property of a checkbox component can be an `object`

<template #example>
  <checkbox-object />
</template>

<template #template>

@[code{1-31}](../.vuepress/components/checkbox/object.vue)

</template>

<template #script>

@[code{33-41}](../.vuepress/components/checkbox/object.vue)

</template>

</card>

<card>

## Icon

Change the icon inside the checkbox component with the`slot="icon"`

<utils-icon />

<template #example>
  <checkbox-icon />
</template>

<template #template>

@[code{1-39}](../.vuepress/components/checkbox/icon.vue)

</template>

<template #script>

@[code{41-51}](../.vuepress/components/checkbox/icon.vue)

</template>

</card>

<card>

## Label

Add a label to the checkbox with the default slot of the component

<template #example>
  <checkbox-label />
</template>

<template #template>

@[code{1-6}](../.vuepress/components/checkbox/label.vue)

</template>

<template #script>

@[code{7-12}](../.vuepress/components/checkbox/label.vue)

</template>

</card>

<card>

## Loading <Badge text="New"/>

Add a loading status to the component with the property `loading`

<template #example>
  <checkbox-loading />
</template>

<template #template>

@[code{1-10}](../.vuepress/components/checkbox/loading.vue)

</template>

<template #script>

@[code{12-17}](../.vuepress/components/checkbox/loading.vue)

</template>

</card>

<card>

## LineThrough <Badge text="New"/>

Add a line in the middle of the label when the checkbox is checked with the property `line-through`

<template #example>
  <checkbox-linethrough />
</template>

<template #template>

@[code{1-7}](../.vuepress/components/checkbox/linethrough.vue)

</template>

<template #script>

@[code{8-12}](../.vuepress/components/checkbox/linethrough.vue)

</template>

</card>

<card>

## Indeterminate <Badge text="New"/>

There are some cases where you have several checkboxes and you need one that manages all the others for this you can do it with the indeterminate property that adds a different style to the checkbox

<template #example>
  <checkbox-indeterminate />
</template>

<template #template>

@[code{1-7}](../.vuepress/components/checkbox/indeterminate.vue)

</template>

<template #script>

@[code{1-7}](../.vuepress/components/checkbox/indeterminate.vue)

</template>

</card>

<card>

## API

</card>
