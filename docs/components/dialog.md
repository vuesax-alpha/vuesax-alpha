---
PROPS:
  - name: v-model
    type: Boolean
    values: true,false
    description: Determine if the dialogue is visible or hidden.
    default: false
    link: null
    usage: '#default'
    code: null

  - name: not-center
    type: Boolean
    values: true, false
    description: By default the header centers the elements, with this property the centering is eliminated.
    default: false
    link: null
    usage: '#type'
    code: null

  - name: width
    type: String
    values: px
    description: Determine the width of the dialog.
    default: null
    link: null
    usage: '#type'
    code: null

  - name: loading
    type: Boolean
    values: true, false
    description: Add a loading animation to the dialog.
    default: false
    link: null
    usage: '#loading'
    code: null

  - name: not-close
    type: Boolean
    values: true, false
    description: Remove the close button from the dialog.
    default: false
    link: null
    usage: '#not-close'
    code: null

  - name: scroll
    type: Boolean
    values: true, false
    description: Makes the content a maximum high and gives the possibility to overflow the content add scroll.
    default: false
    link: null
    usage: '#scroll'
    code: null

  - name: lock-scroll
    type: Boolean
    values: true, false
    description: When the dialog is opened, the page scroll is deleted.
    default: false
    link: null
    usage: '#lock-scroll'
    code: null

  - name: auto-width
    type: Boolean
    values: true, false
    description: It makes the dialog have an automatic width to its content.
    default: false
    link: null
    usage: '#scroll'
    code: null

  - name: not-padding
    type: Boolean
    values: true, false
    description: Eliminates the padding of the base elements of the dialog.
    default: false
    link: null
    usage: '#not-padding'
    code: null

  - name: full-screen
    type: Boolean
    values: true, false
    description: Makes the dialog the size of the window.
    default: false
    link: null
    usage: '#full-screen'
    code: null

  - name: overlay-blur
    type: Boolean
    values: true, false
    description: Makes all elements blur when the dialog opens.
    default: false
    link: null
    usage: '#overlay-blur'
    code: null

  - name: shape
    type: String
    values: square
    description: Remove the border radius from the dialog.
    default: false
    link: null
    usage: '#shape'
    code: null

  - name: prevent-close
    type: Boolean
    values: true, false
    description: It makes the dialog cannot be closed by clicking outside or by pressing the esc key.
    default: false
    link: null
    usage: null
    code: null

EVENTS:
  - name: close
    type: Function
    values: null
    description: triggers when the Dialog closes
    default: null
    link: null
    usage: null
    code: >
      <vs-dialog @close="handleClose" v-model="active">
        ...
      </vs-dialog>

SLOTS:
  - name: default
    type: slot
    values: null
    description: slot default of Dialog
    default: null
    link: null
    usage: '#default'
    code: null

  - name: header
    type: slot
    values: null
    description: slot header of Dialog
    default: null
    link: null
    usage: '#default'
    code: null

  - name: footer
    type: slot
    values: null
    description: slot footer of Dialog
    default: null
    link: null
    usage: '#default'
    code: >
      <vs-dialog>
        <template #footer>
          <h1>This is slot footer</h1>
        </template>
      </vs-dialog>
---

# Dialog

<card>

## Default

<docs-warn />

It generates a Dialog with the `vs-dialog` component, this component is very customizable since it provides a slot to put and make any type of interface to the user's need

<template #example>
<dialog-default />
</template>

<template #template>

@[code{1-35} html{4-33}](../.vuepress/components/dialog/default.vue)

</template>

<template #script>

@[code{36-43}](../.vuepress/components/dialog/default.vue)

</template>

<template #style>

@[code{44-101}](../.vuepress/components/dialog/default.vue)

</template>

</card>

<card>

## Type

You can easily create the most common types of dialogs such as **Alert**, **Confirm** or **Prompt** using the different slots for the structure of the `header`,`default`, `footer` dialog

<template #example>
<dialog-type />
</template>

<template #template>

@[code{1-74} html{6}](../.vuepress/components/dialog/type.vue)

</template>

<template #script>

@[code{75-82}](../.vuepress/components/dialog/type.vue)

</template>

<template #style>

@[code{84-140}](../.vuepress/components/dialog/type.vue)

</template>

</card>

<card>

## Loading

Add a loading animation to the dialog with the `loading` property

<template #example>
<dialog-loading />
</template>

<template #template>

@[code{1-35} vue{6}](../.vuepress/components/dialog/loading.vue)

</template>

<template #script>

@[code{36-43}](../.vuepress/components/dialog/loading.vue)

</template>

<template #style>

@[code{45-102}](../.vuepress/components/dialog/loading.vue)

</template>

</card>

<card>

## Not close

You can remove the close button with the `not-close` property

<template #example>
<dialog-not-close />
</template>

<template #template>

@[code{1-35} vue{4}](../.vuepress/components/dialog/not-close.vue)

</template>

<template #script>

@[code{36-43}](../.vuepress/components/dialog/not-close.vue)

</template>

<template #style>

@[code{44-101}](../.vuepress/components/dialog/not-close.vue)

</template>

</card>

<card>

## Scroll

There are cases where you need a scroll because there is a lot of information within the dialog for this you can use the `scroll` property

<template #example>
<dialog-scroll />
</template>

<template #template>

@[code{1-79} vue{4}](../.vuepress/components/dialog/scroll.vue)

</template>

<template #script>

@[code{81-85}](../.vuepress/components/dialog/scroll.vue)

</template>

<template #style>

@[code{87-97}](../.vuepress/components/dialog/scroll.vue)

</template>

</card>

<card>

## Lock scroll Body

If you need to remove the page scroll when opening the dialog you can do it with the `lock-scroll` property

<template #example>
<dialog-lock-scroll />
</template>

<template #template>

@[code{1-35} vue{4}](../.vuepress/components/dialog/lock-scroll.vue)

</template>

<template #script>

@[code{36-43}](../.vuepress/components/dialog/lock-scroll.vue)

</template>

<template #style>

@[code{44-101}](../.vuepress/components/dialog/lock-scroll.vue)

</template>

</card>

<card>

## Not Padding

If you need to remove the padding from the dialog to make a more personalized interface you can do it with the `not-padding` property

<template #example>
<dialog-not-padding />
</template>

<template #template>

@[code{1-12}](../.vuepress/components/dialog/not-padding.vue)

</template>

<template #script>

@[code{14-18}](../.vuepress/components/dialog/not-padding.vue)

</template>

<template #style>

@[code{20-30}](../.vuepress/components/dialog/not-padding.vue)

</template>

</card>

<card>

## Nested Dialogs

You can nest as many `vs-dialog` as you need without problem

<template #example>
<dialog-nested />
</template>

<template #template>

@[code{1-41}](../.vuepress/components/dialog/nested.vue)

</template>

<template #script>

@[code{42-50}](../.vuepress/components/dialog/nested.vue)

</template>

<template #style>

@[code{52-109}](../.vuepress/components/dialog/nested.vue)

</template>

</card>

<card>

## Full Screen

If you need the dialog to be the total window size you can do it with the `full-screen` property

<template #example>
<dialog-full-screen />
</template>

<template #template>

@[code{1-35} vue{4}](../.vuepress/components/dialog/full-screen.vue)

</template>

<template #script>

@[code{36-43}](../.vuepress/components/dialog/full-screen.vue)

</template>

<template #style>

@[code{44-101}](../.vuepress/components/dialog/full-screen.vue)

</template>

</card>

<card>

## Overlay blur

You can add a blur style to all the elements behind the dialog with the `overlay-blur` property, this functionality depends on the css property [backdrop-filter](https://caniuse.com/#feat=css-backdrop-filter)

<template #example>
<dialog-blur />
</template>

<template #template>

@[code{1-33} vue{4}](../.vuepress/components/dialog/blur.vue)

</template>

<template #script>

@[code{35-42}](../.vuepress/components/dialog/blur.vue)

</template>

<template #style>

@[code{44-101}](../.vuepress/components/dialog/blur.vue)

</template>

</card>

<card>

## Shape

### Square

Change the dialog style by removing the border radius and making it rectangular

<template #example>
<dialog-square />
</template>

<template #template>

@[code{1-40} vue{4}](../.vuepress/components/dialog/square.vue)

</template>

<template #script>

@[code{42-49}](../.vuepress/components/dialog/square.vue)

</template>

<template #style>

@[code{51-108}](../.vuepress/components/dialog/square.vue)

</template>

</card>

<card>

## Prevent Close

With the `prevent-close` property you do not close the dialog by clicking outside or pressing the **esc** key

<template #example>
<dialog-prevent-close />
</template>

<template #template>

@[code{1-35} vue{4}](../.vuepress/components/dialog/prevent-close.vue)

</template>

<template #script>

@[code{37-44}](../.vuepress/components/dialog/prevent-close.vue)

</template>

<template #style>

@[code{46-103}](../.vuepress/components/dialog/prevent-close.vue)

</template>

</card>

<card>

## API

</card>
