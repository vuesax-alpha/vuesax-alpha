---
PROPS:
  - name: v-model
    type: boolean
    values: boolean
    description: Determine if the component is visible.
    default: true
    link: null
    code: >
      <template>
        <vs-button type="flat" @click="active = !active">
          {{ active ? 'Close Alert' : 'Open Alert' }}
        </vs-button>

        <vs-alert closable v-model="active">
          <template #title>
            Vuesax Framework
          </template>
          Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
          created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
          Unique and pleasant style, Vuesax is created from scratch and designed for all types of
          developed from the frontend lover to the backend that wants to easily create
          your visual approach to the end user
        </vs-alert>
      </template>

      <script setup lang="ts">

      import { ref } from 'vue'

      const active = ref<boolean>(true)

      </script>
    usage: "#closable"
  - name: v-model:hidden-content
    type: boolean
    values: boolean
    description: With this property you can hide the content of the alert. You can bind this with v-model
    default: false
    link: null
    usage: "#hidden-content"
    code: >
      <template>
        <vs-alert hidden-content>
          <template #title>
            Vuesax Framework
          </template>
          Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
          created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
          Unique and pleasant style, Vuesax is created from scratch and designed for all types of
          developed from the frontend lover to the backend that wants to easily create
          your visual approach to the end user
        </vs-alert>
      </template>
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: Change the color of the component and some of its sub components.
    default: primary
    link: null
    usage: "#color"
    code: >
      <vs-alert color="success">
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
        created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
      </vs-alert>
  - name: type
    type: boolean
    values: solid, border, shadow, gradient, relief
    description: Change the style of all the alert.
    default: default
    link: null
    usage: "#solid"
    code: >
      <vs-alert solid>
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
        created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
      </vs-alert>
  - name: page
    type: Number
    values: Number
    description: Determine the page that is active (this property is linked to the slots="page-{n}").
    default: null
    link: null
    usage: "#pagination"
    code: >
      <template>
        <vs-alert :page="1" >
          <template #title>
            Vuesax Framework
          </template>
          <template #page-1>
            Page 1 - this page is a slot and here you can add either text, html elements or components
          </template>
        </vs-alert>
      </template>
  - name: progress
    type: Number
    values: 0 - 100
    description: Add a progress bar to the alert and the value is the percentage of width.
    default: null
    link: null
    usage: "#progress-bar"
    code: >
      <vs-alert progress="70">
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
        created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
      </vs-alert>
  - name: closable
    type: boolean
    values: boolean
    description: Add a button to close the alert (it is necessary to use v-model).
    default: false
    link: null
    usage: "#closable"
    code: >
      <template>
        <vs-button flat @click="active=!active">
          {{ active ? 'Close Alert' : 'Open Alert' }}
        </vs-button>

        <vs-alert closable v-model="active">
          <template #title>
            Vuesax Framework
          </template>
          Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
          created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
          Unique and pleasant style, Vuesax is created from scratch and designed for all types of
          developed from the frontend lover to the backend that wants to easily create
          your visual approach to the end user
        </vs-alert>
      </template>

      <script lang="ts" setup>
        import { ref } from 'vue';

        const active = ref<boolean>(true);
      </script>
SLOTS:
  - name: icon
    type: slot
    values: null
    description: Add an icon to the alert.
    default: null
    link: null
    usage: "#icon"
    code: >
      <template>
        <vs-alert>
          <template #icon>
            <i class='bx bxs-chat'></i>
          </template>
          <template #title>
            Vuesax Alert Icon
          </template>
          Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
          created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
          Unique and pleasant style, Vuesax is created from scratch and designed for all types of
          developed from the frontend lover to the backend that wants to easily create
          your visual approach to the end user
        </vs-alert>
      </template>
  - name: title
    type: slot
    values: null
    description: Add a title to the alert.
    default: null
    link: null
    usage: "#title"
    code: >
      <template>
        <div class="center">
          <vs-alert>
            <template #title>
              Vuesax Alert Title
            </template>
            Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
            created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
            Unique and pleasant style, Vuesax is created from scratch and designed for all types of
            developed from the frontend lover to the backend that wants to easily create
            your visual approach to the end user
          </vs-alert>
        </div>
      </template>
  - name: page-{n}
    type: slot
    values: (page-1 - page-{n})
    description: Add the pages to the alert component if it is page one would be (slot="page-1").
    default: null
    link: null
    usage: "#pagination"
    code: >
      <template>
        <vs-alert v-model:page="page" >
          <template #title>
            Vuesax Framework
          </template>

          <template #page-1>
            Page 1 - this page is a slot and here you can add either text,
            html elements or components
          </template>
        </vs-alert>
      </template>
  - name: footer
    type: slot
    values: null
    description: Add a footer to the alert component.
    default: null
    link: null
    usage: "#footer"
    code: >
      <vs-alert>
        <template #title>
          Vuesax Framework
        </template>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
        created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
        <template #footer>
          <vs-button flat>
            Cancel
          </vs-button>
          <vs-button>
            Accept
          </vs-button>
        </template>
      </vs-alert>

UPDATES:
  - hidden-content
---

# Alert

<card>

## Default

<docs-warn />

Easily generate an alert with this component apart from functionalities such as hiding it and showing it color change and title icons among other things

<template #example>
<alert-default />
</template>

<template #template>

@[code html](../.vuepress/components/alert/default.vue)

</template>

</card>

<card>

## Solid

You can change the style of the component by adding the `solid` property, the property is a` boolean` so you can add it without any value.

<template #example>
<alert-solid />
</template>

<template #template>

@[code html{3}](../.vuepress/components/alert/solid.vue)

</template>

</card>

<card>

## Border

You can change the style of the component by adding the `border` property, the property is a` boolean` so you can add it without any value.

<template #example>
<alert-border />
</template>

<template #template>

@[code html{3}](../.vuepress/components/alert/border.vue)

</template>

</card>

<card>

## Shadow

You can change the style of the component by adding the `shadow` property, the property is a` boolean` so you can add it without any value.

<template #example>
<alert-shadow />
</template>

<template #template>

@[code html{3}](../.vuepress/components/alert/shadow.vue)

</template>

</card>

<card>

## Gradient

You can change the style of the component by adding the `gradient` property, the property is a` boolean` so you can add it without any value.

<template #example>
<alert-gradient />
</template>

<template #template>

@[code html{3}](../.vuepress/components/alert/gradient.vue)

</template>

</card>

<card>

## Relief

You can change the style of the component by adding the `relief` property, the property is a` boolean` so you can add it without any value.

<template #example>
<alert-relief />
</template>

<template #template>

@[code html{3}](../.vuepress/components/alert/relief.vue)

</template>

</card>

<card>

## Animate

A beautiful and simple animation to show and hide the alert to the user

<template #example>
<alert-animate />
</template>

<template #template>

@[code{1-17} html](../.vuepress/components/alert/animate.vue)

</template>

<template #script>

@[code{18-23} html](../.vuepress/components/alert/animate.vue)

</template>

</card>

<card>

## Color

Change the color of the entire alert with the `color` property

In this example you can click on the buttons and dynamically change the color value to display it in the component `alert`

<template #example>
<alert-color />
</template>

<template #template>

@[code{1-69} html{3}](../.vuepress/components/alert/color.vue)

</template>

<template #script>

@[code{71-75} html](../.vuepress/components/alert/color.vue)

</template>

<template #style>

@[code{77-84} html](../.vuepress/components/alert/color.vue)

</template>

</card>

<card>

## Icon

Add an icon to the alert easily with the slot **icon**

<utils-icon />

<template #example>

<alert-icon />

</template>

<template #template>

@[code html{4-6}](../.vuepress/components/alert/icon.vue)

</template>

</card>

<card>

## Title

You can add a descriptive title to the alert with the `slot="title"`

<template #example>
<alert-title />
</template>

<template #template>

@[code html{4}](../.vuepress/components/alert/title.vue)

</template>

</card>

<card>

## Hidden Content <Badge text='Update' type="warn" />

You can hide the content of an alert and just leave the title to display the content dynamically.

This prop can bind with `v-model:hidden-content`

<template #example>
<alert-hidden-content />
</template>

<template #template>

@[code{1-13} html{3}](../.vuepress/components/alert/hidden-content.vue)

</template>

<template #script>

@[code{14-18} html{4}](../.vuepress/components/alert/hidden-content.vue)

</template>

</card>

<card>

## Pagination

There are times when we need to show a lot of content to the user but we don't want to extend the text and make the alert very large and tall

<template #example>
<alert-pagination />
</template>

<template #template>

@[code{1-21} html{3,6,11,16}](../.vuepress/components/alert/pagination.vue)

</template>

<template #script>

@[code{22-26} html{4}](../.vuepress/components/alert/pagination.vue)

</template>

</card>

<card>

## footer

Use the `footer` slot to add a footer to the alert where for example you can add interactions with the user such as a button or a checkbox.

<template #example>

<alert-footer />

</template>

<template #template>

@[code html{11-14}](../.vuepress/components/alert/footer.vue)

</template>

</card>

<card>

## Progress bar

You can add a progress bar to the alert with the progress property and a number of (`0 - 100`)

<template #example>
<alert-progress />
</template>

<template #template>

@[code html{3}](../.vuepress/components/alert/progress.vue)

</template>

</card>

<card>

## Closable

You can add a close alert icon with the `closable` property, the property is a` boolean` so you can add it without any value.

<template #example>
<alert-closable />
</template>

<template #template>

@[code{1-17} html{7}](../.vuepress/components/alert/closable.vue)

</template>

<template #script>

@[code{18-22} html{4}](../.vuepress/components/alert/closable.vue)

</template>

</card>

<card>

## Time Close

If you need an alert to have time to hide, you can do so by joining some properties and few lines of code

<template #example>
<alert-time />
</template>

<template #template>

@[code{1-14} html{4}](../.vuepress/components/alert/time.vue)

</template>

<template #script>

@[code{16-36} html{5-6}](../.vuepress/components/alert/time.vue)

</template>

</card>

<card>

## API

</card>
