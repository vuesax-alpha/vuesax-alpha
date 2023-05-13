---
PROPS:
  - name: v-model
    type: String, Number
    values: String, Number
    description: binding value
    default: null
    link: null
    usage: '#default'

  - name: placeholder
    type: String
    values: String
    description: placeholder of Input
    default: null
    link: null
    usage: '#default'

  - name: label
    type: String
    values: String
    description: a label above the component.
    default: null
    link: null
    usage: '#label'
    code: >
      <template>
        <vs-input
          label="Name"
          placeholder="Evan You"
        />
      </template>
  - name: label-float
    type: String
    values: String
    description: Add a placeholder converts to focus on a label.
    default: null
    link: null
    usage: '#label-float'
    code: >
      <template>
        <vs-input
          label="Country"
          label-float
          v-model="value"
        />
      </template>
  - name: color
    type: String
    values: vuesax colors, RGB, HEX
    description: Change component color.
    default: null
    link: null
    usage: '#color'
    code: >
      <template>
        <vs-input
          color="primary"
          placeholder="Primary"
        />

        <vs-input
          color="success"
          placeholder="Success" 
        />

        <vs-input
          color="danger"
          placeholder="Danger" 
        />

        <vs-input
          color="warn"
          placeholder="Warn" 
        />

        <vs-input
          color="dark"
          placeholder="Dark"
        />

        <vs-input
          color="#7d33ff"
          placeholder="HEX"
        />

        <vs-input
          color="rgb(59,222,200)"
          placeholder="HEX" 
        />
      </template>

  - name: state
    type: String
    values: vuesax colors,RGB,HEX
    description: Change the background color of the component by changing its status.
    default: null
    link: null
    usage: '#state'

  - name: progress
    type: Number
    values: 0 - 100
    description: progress bar starting in red and ending in green.
    default: null
    link: null
    usage: '#progress'
    code: null
  - name: loading
    type: Boolean
    values: Boolean
    description: Add a loading animation to the input.
    default: null
    link: null
    usage: '#loading'
    code: >
      <template>
        <div class="center content-inputs">
          <vs-input loading v-model="value" placeholder="Name" />
        </div>
      </template>

  - name: type
    type: string
    values: html type
    description: Change the type of input (html values).
    default: null
    link: null
    usage: '#input-types'
    code: null

  - name: border
    type: Boolean
    values: Boolean
    description: Change the style of the component.
    default: false
    link: null
    usage: '#border'

  - name: shadow
    type: Boolean
    values: Boolean
    description: Change the style of the component.
    default: false
    link: null
    usage: '#shadow'

  - name: icon-after
    type: Boolean
    values: Boolean
    description: suffix icon component
    default: false
    link: null
    usage: '#icon'

  - name: show-password
    type: boolean
    values: boolean
    description: If the input is of the password type, it is modified to show the password.
    default: false
    link: null
    usage: '#progress'

SLOTS:
  - name: icon
    type: Slot
    values: null
    description: Add an icon to the input.
    default: null
    link: null
    usage: '#icon'

  - name: message
    type: Slot
    values: message-success, message-danger, message-warn
    description: Add an informative text below the input.
    default: null
    link: null
    usage: '#message'
---

# Input

<card>

## Default

<docs-warn />

Add an elements input facilitate with the component `input`

<template #example>
<input-default />
</template>

<template #template>

@[code{1-5} html{3}](../.vuepress/components/input/default.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/input/default.vue)

</template>

</card>

<card>

## Label

Add a label to the input with the property `label`

<template #example>
<input-label />
</template>

<template #template>

@[code{1-9} html{4}](../.vuepress/components/input/label.vue)

</template>

<template #script>

@[code{10-14}](../.vuepress/components/input/label.vue)

</template>

</card>

<card>

## Label Float <badge type="warn" text="Update" />

You can have a placeholder with a great animation when being or in focus or with a value becoming a label above the input with the property `label-float`

<template #example>
<input-label-float />
</template>

<template #template>

@[code{1-5} html{3}](../.vuepress/components/input/label-float.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/input/label-float.vue)

</template>

</card>

<card>

## Color

Change the color of the component and add a border below with the `color` property, the allowed values ​​are the main colors of vuesax and the colors (**RGB** y **HEX**)

<template #example>
<input-color />
</template>

<template #template>

@[code{1-39} html{3,5,13,24,36}](../.vuepress/components/input/color.vue)

</template>

<template #script>

@[code{40-50}](../.vuepress/components/input/color.vue)

</template>

</card>

<card>

## Icon

Add an icon to the input easily with the slot icon if you want the icon to be before the input you can do it with the property `icon-before`

<utils-icon />

<template #example>
<input-icon />
</template>

<template #template>

@[code{1-20} html{4,15}](../.vuepress/components/input/icon.vue)

</template>

<template #script>

@[code{21-26}](../.vuepress/components/input/icon.vue)

</template>

</card>

<card>

## Message

You can add a message below the input with the `#message-{vuesax color}` to report that a field is missing or the value is wrong

<template #example>
<input-message />
</template>

<template #template>

@[code{1-26} html{4,8,12,20-21}](../.vuepress/components/input/message.vue)

</template>

<template #script>

@[code{28-39}](../.vuepress/components/input/message.vue)

</template>

</card>

<card>

## State

Change the color of the input for some state, the allowed states are (primary, success, danger, warn, dark)

<template #example>
<input-state />
</template>

<template #template>

@[code{1-31} html{12}](../.vuepress/components/input/state.vue)

</template>

<template #script>

@[code{33-41}](../.vuepress/components/input/state.vue)

</template>

</card>

<card>

## Progress

Add a validation progress bar, the most common is its use to validate passwords and correct data within the input, its value is (0 - 100).

:::tip
The example validates that the password has at least

- A special character
- More than 6 digits
- One lower case letter
- An uppercase letter
- A number
  :::

<template #example>
<input-progress />
</template>

<template #template>

@[code{1-22} html{7}](../.vuepress/components/input/progress.vue)

</template>

<template #script>

@[code{23-57}](../.vuepress/components/input/progress.vue)

</template>

</card>

<card>

## Loading

Add a loading animation to the input with the `loading` property, the property is a `Boolean`, so you can add it without any value.

<template #example>
<input-loading />
</template>

<template #template>

@[code{1-5} html{3}](../.vuepress/components/input/loading.vue)

</template>

<template #script>

@[code{7-11}](../.vuepress/components/input/loading.vue)

</template>

</card>

<card>

## Input types

Change the type of input with the `type` property as a native html input, the default value is `text`

<template #example>
<input-types />
</template>

<template #template>

@[code{1-11} html{4}](../.vuepress/components/input/types.vue)

</template>

<template #script>

@[code{12-22}](../.vuepress/components/input/types.vue)

</template>

</card>

<card>

## Border - Shadow

Change everything is style of the component with the `input-style` property, the property is a `String` with values `border` . `shadow` . `transparent`

<template #example>
<input-style />
</template>

<template #template>

@[code{1-43} html{8,21}](../.vuepress/components/input/style.vue)

</template>

<template #script>

@[code{45-51}](../.vuepress/components/input/style.vue)

</template>

</card>

<card>

## API

</card>
