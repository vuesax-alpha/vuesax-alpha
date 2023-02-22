---
PROPS:
  - name: v-model
    type: Boolean
    values: true,false
    description: Determine if the dialogue is visible or hidden.
    default: false
    link: null
    usage: "#default"
    code: >
      <vs-dialog v-model="active">
        ...
      </vs-dialog>
  - name: not-center
    type: Boolean
    values: true, false
    description: By default the header centers the elements, with this property the centering is eliminated.
    default: false
    link: null
    usage: "#type"
    code: >
      <vs-dialog not-center v-model="active">
        ...
      </vs-dialog>
  - name: width
    type: String
    values: px
    description: Determine the width of the dialog.
    default: null
    link: null
    usage: "#type"
    code: >
      <vs-dialog width="550px" v-model="active">
        ...
      </vs-dialog>
  - name: loading
    type: Boolean
    values: true, false
    description: Add a loading animation to the dialog.
    default: false
    link: null
    usage: "#loading"
    code: >
      <vs-dialog loading v-model="active">
        ...
      </vs-dialog>
  - name: not-close
    type: Boolean
    values: true, false
    description: Remove the close button from the dialog.
    default: false
    link: null
    usage: "#not-close"
    code: >
      <vs-dialog not-close v-model="active">
        ...
      </vs-dialog>
  - name: scroll
    type: Boolean
    values: true, false
    description: Makes the content a maximum high and gives the possibility to overflow the content add scroll.
    default: false
    link: null
    usage: "#scroll"
    code: >
      <vs-dialog scroll v-model="active">
        ...
      </vs-dialog>
  - name: overflow-hidden
    type: Boolean
    values: true, false
    description: When the dialog is opened, the page scroll is deleted.
    default: false
    link: null
    usage: "#overflow-hidden-body"
    code: >
      <vs-dialog overflow-hidden v-model="active">
        ...
      </vs-dialog>
  - name: auto-width
    type: Boolean
    values: true, false
    description: It makes the dialog have an automatic width to its content.
    default: false
    link: null
    usage: "#scroll"
    code: >
      <vs-dialog auto-width v-model="active">
        ...
      </vs-dialog>
  - name: not-padding
    type: Boolean
    values: true, false
    description: Eliminates the padding of the base elements of the dialog.
    default: false
    link: null
    usage: "#not-padding"
    code: >
      <vs-dialog not-padding v-model="active">
        ...
      </vs-dialog>
  - name: full-screen
    type: Boolean
    values: true, false
    description: Makes the dialog the size of the window.
    default: false
    link: null
    usage: "#full-screen"
    code: >
      <vs-dialog full-screen v-model="active">
        ...
      </vs-dialog>
  - name: blur
    type: Boolean
    values: true, false
    description: Makes all elements blur when the dialog opens.
    default: false
    link: null
    usage: "#blur"
    code: >
      <vs-dialog blur v-model="active">
        ...
      </vs-dialog>
  - name: square
    type: Boolean
    values: true, false
    description: Remove the border radius from the dialog.
    default: false
    link: null
    usage: "#square"
    code: >
      <vs-dialog square v-model="active">
        ...
      </vs-dialog>
  - name: prevent-close
    type: Boolean
    values: true, false
    description: It makes the dialog cannot be closed by clicking outside or by pressing the esc key.
    default: false
    link: null
    usage: null
    code: >
      <vs-dialog prevent-close v-model="active">
        ...
      </vs-dialog>
      
EVENTS:
  - name: close
    type: Function
    values: null
    description:	triggers when the Dialog closes
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
    usage: "#default"
    code: >
      <vs-dialog>
        ...
      </vs-dialog>
  - name: header
    type: slot
    values: null
    description: slot header of Dialog
    default: null
    link: null
    usage: "#default"
    code: >
      <vs-dialog>
        <template #header>
          <h1>Welcome to <b>Vuesax</b></h1>
        </template>
      </vs-dialog>
  - name: footer
    type: slot
    values: null
    description: slot footer of Dialog
    default: null
    link: null
    usage: "#default"
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

@[code{1-70} vue{6,27,51}](../.vuepress/components/dialog/type.vue)

</template>

<template #script>

@[code{71-78}](../.vuepress/components/dialog/type.vue)

</template>

<template #style>

@[code{80-147}](../.vuepress/components/dialog/type.vue)

</template>

</card>

<card>

## loading

Add a loading animation to the dialog with the `loading` property

<template #example>
  <dialog-loading />
</template>

<template #template>

@[code{1-43} vue{6}](../.vuepress/components/dialog/loading.vue)

</template>

<template #script>

@[code{44-51}](../.vuepress/components/dialog/loading.vue)

</template>

<template #style>

@[code{53-110}](../.vuepress/components/dialog/loading.vue)

</template>

</card>

<card>

## Not close

You can remove the close button with the `not-close` property

<template #example>
  <dialog-notClose />
</template>

<template #template>

@[code{1-33} vue{4}](../.vuepress/components/dialog/notClose.vue)

</template>

<template #script>

@[code{34-41}](../.vuepress/components/dialog/notClose.vue)

</template>

<template #style>

@[code{42-99}](../.vuepress/components/dialog/notClose.vue)

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

## Overflow Hidden Body

If you need to remove the page scroll when opening the dialog you can do it with the `overflow-hidden` property

<template #example>
  <dialog-overflowHidden />
</template>

<template #template>

@[code{1-33} vue{4}](../.vuepress/components/dialog/overflowHidden.vue)

</template>

<template #script>

@[code{34-41}](../.vuepress/components/dialog/overflowHidden.vue)

</template>

<template #style>

@[code{42-99}](../.vuepress/components/dialog/overflowHidden.vue)

</template>

</card>

<card>

## Not Padding

If you need to remove the padding from the dialog to make a more personalized interface you can do it with the `not-padding` property

<template #example>
  <dialog-notPadding />
</template>

<template #template>

@[code{1-12}](../.vuepress/components/dialog/notPadding.vue)

</template>

<template #script>

@[code{14-18}](../.vuepress/components/dialog/notPadding.vue)

</template>

<template #style>

@[code{20-30}](../.vuepress/components/dialog/notPadding.vue)

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

@[code{52-121}](../.vuepress/components/dialog/nested.vue)

</template>

</card>

<card>

## full Screen

If you need the dialog to be the total window size you can do it with the `full-screen` property

<template #example>
  <dialog-fullScreen />
</template>

<template #template>

@[code{1-33} vue{4}](../.vuepress/components/dialog/fullScreen.vue)

</template>

<template #script>

@[code{34-41}](../.vuepress/components/dialog/fullScreen.vue)

</template>

<template #style>

@[code{42-99}](../.vuepress/components/dialog/fullScreen.vue)

</template>

</card>

<card>

## blur

You can add a blur style to all the elements behind the dialog with the `blur` property, this functionality depends on the css property [backdrop-filter](https://caniuse.com/#feat=css-backdrop-filter)

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

## Square

Change the dialog style by removing the border radius and making it rectangular

<template #example>
  <dialog-square />
</template>

<template #template>

@[code{1-35} vue{4}](../.vuepress/components/dialog/square.vue)

</template>

<template #script>

@[code{37-44}](../.vuepress/components/dialog/square.vue)

</template>

<template #style>

@[code{46-103}](../.vuepress/components/dialog/square.vue)

</template>

</card>

<card>

## Prevent Close

With the `prevent-close` property you do not close the dialog by clicking outside or pressing the **esc** key

<template #example>
  <dialog-preventClose />
</template>

<template #template>

@[code{1-33} vue{4}](../.vuepress/components/dialog/preventClose.vue)

</template>

<template #script>

@[code{35-42}](../.vuepress/components/dialog/preventClose.vue)

</template>

<template #style>

@[code{44-101}](../.vuepress/components/dialog/preventClose.vue)

</template>

</card>

<card>

## API

</card>
