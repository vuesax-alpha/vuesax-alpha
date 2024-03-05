---
PROPS:
  - name: title
    type: String
    values: String
    description: Add a title to the notification.
    default: null
    link: null
    usage: '#default'
    code: >
      VsNotification({
        title: 'Documentation Vuesax 4.0+',
        content: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: content
    type: String, Component
    values: String, VNode
    description: Add the content to the notification.
    default: null
    link: null
    usage: '#default'
    code: >
      VsNotification({
        title: 'Documentation Vuesax 4.0+',
        content: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: position
    type: String
    values: bottom-right,top-right,top-center,top-left,bottom-left,bottom-center
    description: Change the position of the component.
    default: bottom-right
    link: null
    usage: '#position'
    code: >
      const { close } = VsNotification({
        position: 'top-right',
        title: 'Documentation Vuesax 4.0+',
        content: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: color
    type: String
    values: vuesax colors, rgb, hex
    description: Change the base color of the entire component.
    default: null
    link: null
    usage: '#color'
    code: >
      const { close } = VsNotification({
        color: 'primary',
        title: 'Documentation Vuesax 4.0+',
        content: 'These documents refer to the latest version of vuesax (4.0+), to see the
        documents of the previous versions you can do it here 👉 Vuesax 3.x'
      })
  - name: border
    type: String
    values: vuesax colors, rgb, hex
    description: Add a color border to the notification.
    default: null
    link: null
    usage: '#border'
    code: >
      const { close } = VsNotification({
        border: 'success',
        title: 'Documentation Vuesax 4.0+',
        content: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: icon
    type: String
    values: String
    description: Add an icon to the notification.
    default: null
    link: null
    usage: '#icons'
    code: >
      const { close } = VsNotification({
        icon: `<i class='bx bxs-time'></i>`,
        title: 'Documentation Vuesax 4.0+',
        content: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: duration
    type: Number, StringNumber
    values: Number, none
    description: Determine the time until the notification is hidden (none determines not to hide).
    default: 4500 (4.5s)
    link: null
    usage: '#duration'
    code: >
      const { close } = VsNotification({
        duration: 10000,
        title: 'Documentation Vuesax 4.0+',
        content: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: onClick
    type: function
    values: function
    description: function that is executed by clicking on the notification.
    default: null
    link: null
    usage: null
    code: >
      const { close } = this.$notification({
        title: 'Documentation Vuesax 4.0+',
        content: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        onClick: () => {
          console.log('click notification')
        }
      })
  - name: buttonClose
    type: Boolean
    values: true,false
    description: Determine if the notification has the close button.
    default: true
    link: null
    usage: null
    code: >
      const { close } = this.$notification({
        title: 'Documentation Vuesax 4.0+',
        content: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        buttonClose: false
      })
  - name: flat
    type: Boolean
    values: true,false
    description: Change the notification style to flat.
    default: false
    link: null
    usage: '#flat'
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
          flat: true,
        })
      </script>
  - name: onDestroy
    type: () => void
    values: Function
    description: Function that is executed when the notification is destroyed.
    default: null
    link: null
    usage: null
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
          sticky: true
        })
      </script>
  - name: sticky
    type: boolean
    values: true,false
    description: Change the position of the notification attached to the nearest corner.
    default: false
    link: null
    usage: '#sticky'
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
          sticky: true
        })
      </script>
  - name: square
    type: boolean
    values: true,false
    description: Determine if the notification is square and remove the border-radius.
    default: false
    link: null
    usage: '#square'
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
          shape: 'square',
        })
      </script>
  - name: width
    type: String
    values: 100%, auto
    description: Determine the width of the notification.
    default: 340px
    link: null
    usage: '#width'
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
          width: 'auto',
        })
      </script>
  - name: loading
    type: boolean
    values: true,false
    description: Determine if the notification has a loading animation.
    default: false
    link: null
    usage: '#loading'
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
          loading: true
        })
      </script>
  - name: progressAuto
    type: Boolean
    values: true,false
    description: Add a progress bar to the notification.
    default: null
    link: null
    usage: '#progress'
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
          progressAuto: true
        })
      </script>
  - name: notPadding
    type: Boolean
    values: true,false
    description: Remove padding from notification.
    default: 20px
    link: null
    usage: '#example'
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
          notPadding: true
        })
      </script>
  - name: clickClose
    type: Boolean
    values: true,false
    description: Determine if clicking on the notification closes.
    default: false
    link: null
    usage: null
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          duration: 0,
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        })
      </script>
  - name: content
    type: Vue Component
    values: Vnode,String,ComponentPublicInstance
    description: Change the content of the notification to the one provided as a value (something similar to a vue slot).
    default: null
    link: null
    usage: '#example'
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          duration: 0,
          width: 'auto',
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        })
      </script>
  - name: instance.close()
    type: function
    values: null
    description: Close the notificationn.
    default: null
    link: null
    usage: null
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          duration: 0,
          width: 'auto',
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        })

        close()
      </script>

  - name: custom-class
    type: String
    values: String
    description: Add a custom class to the notification.
    default: null
    link: null
    usage: null
    code: >
      <script setup lang="ts">
        import { VsNotification } from 'vuesax-alpha'

        const { close } = VsNotification({
          duration: 0,
          width: 'auto',
          customClass: 'my-class'
          title: 'Documentation Vuesax 4.0+',
          content: `These documents refer to the latest version of vuesax (4.0+),
          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        })
      </script>
---

# Notification

<card>

## Default

<docs-warn />

It generates a notification with the vuesax function (`VsNotification`), to use the instance of the notification it is necessary to save it in a variable, for example if you need to close the notification manually or do other functionalities with the instance

<command>

```js
import { VsNotification } from 'vuesax-alpha'

VsNotification({ ...options })
```

</command>

::: tip
The necessary properties are the `title` and the` content`
:::

<template #example>
<notification-default />
</template>

<template #template>

@[code{1-5} html{3}](../.vuepress/components/notification/default.vue)

</template>

<template #script>

@[code{7-16} vue{5}](../.vuepress/components/notification/default.vue)

</template>

</card>

<card>

## Position

Change the notification position with the position property

supported values

- `bottom-right` <Badge type=warn text=Default />
- `top-right`
- `top-center`
- `top-left`
- `bottom-left`
- `bottom-center`

<template #example>
<notification-position />
</template>

<template #template>

@[code{1-22} html{6,9}](../.vuepress/components/notification/position.vue)

</template>

<template #script>

@[code{24-34} vue{5}](../.vuepress/components/notification/position.vue)

</template>

<template #style>

@[code{35-56}](../.vuepress/components/notification/position.vue)

</template>

</card>

<card>

## Color

Use the color property to change the base color of the component and some of the child components, to better understand the handling of colors and themes you can see it [here](/theme/)

Allowed values ​​are:

- primary
- success
- danger
- warning
- dark
- RGB
- HEX

<template #example>
<notification-color />
</template>

<template #template>

@[code{1-58} html{6,13}](../.vuepress/components/notification/color.vue)

</template>

<template #script>

@[code{60-71} html{6}](../.vuepress/components/notification/color.vue)

</template>

</card>

<card>

## Icons

Add the icon provided as the value of the `icon` property to the notification

<template #example>
<notification-icons />
</template>

<template #template>

@[code{1-100} html{6,26}](../.vuepress/components/notification/icons.vue)

</template>

<template #script>

@[code{102-114} html{4,6}](../.vuepress/components/notification/icons.vue)

</template>

<template #style>

@[code{116-137}](../.vuepress/components/notification/icons.vue)

</template>

</card>

<card>

## Progress

Add a progress bar to the notification, if the value of the `progress` property is `auto` be determined by the `duration` property to reach 100%, if you want the value to be manual you can add a number of the (0 - 100) being 100 100% and use the function in the `changeProgress` instance and change the value to the one provided as the first parameter

<template #example>
<notification-progress />
</template>

<template #template>

@[code{1-52}](../.vuepress/components/notification/progress.vue)

</template>

<template #script>

@[code{54-66} ts{6}](../.vuepress/components/notification/progress.vue)

</template>

<template #style>

@[code{68-89}](../.vuepress/components/notification/progress.vue)

</template>

</card>

<card>

## Duration

Change the duration of the notification with the `duration` property, the value is numerical and determine the seconds before the bone component is hidden that **10s** equals **10000** as the value

if you need the notification to never be hidden, the duration value would be `0`

<template #example>
<notification-duration />
</template>

<template #template>

@[code{1-16}](../.vuepress/components/notification/duration.vue)

</template>

<template #script>

@[code{18-29} html{6}](../.vuepress/components/notification/duration.vue)

</template>

<template #style>

@[code{30-51}](../.vuepress/components/notification/duration.vue)

</template>

</card>

<card>

## Square

Change the style of the notification with the `square` property so as not to have `border-radius` making it a rectangle

<template #example>
<notification-square />
</template>

<template #template>

@[code{1-74}](../.vuepress/components/notification/square.vue)

</template>

<template #script>

@[code{75-87} vue{6}](../.vuepress/components/notification/square.vue)

</template>

<template #style>

@[code{88-109}](../.vuepress/components/notification/square.vue)

</template>

</card>

<card>

## Border

Change the notification style with the `border` property by adding a border of the color provided as the value

<template #example>
<notification-border />
</template>

<template #template>

@[code{1-55}](../.vuepress/components/notification/border.vue)

</template>

<template #script>

@[code{57-68} vue{6}](../.vuepress/components/notification/border.vue)

</template>

<template #style>

@[code{70-91}](../.vuepress/components/notification/border.vue)

</template>

</card>

<card>

## Flat

Change the style of the notification with the `flat` property, having this property changes to lighter colors and the text  of the `color` property, this property is a boolean so you can only use the value `true`

<template #example>
<notification-flat />
</template>

<template #template>

@[code{1-55}](../.vuepress/components/notification/flat.vue)

</template>

<template #script>

@[code{57-70} vue{6}](../.vuepress/components/notification/flat.vue)

</template>

<template #style>

@[code{72-93}](../.vuepress/components/notification/flat.vue)

</template>

</card>

<card>

## Loading

Add a loading animation to the notification, having this property will only show the animation and the content will be hidden

<template #example>
<notification-loading />
</template>

<template #template>

@[code{1-58}](../.vuepress/components/notification/loading.vue)

</template>

<template #script>

@[code{60-72} vue{6}](../.vuepress/components/notification/loading.vue)

</template>

<template #style>

@[code{74-95}](../.vuepress/components/notification/loading.vue)

</template>

</card>

<card>

## Width

Change the size of the notification to the total screen with the property `width` and giving it a value of `full`

If you need the notification to have an automatic size to your content you can do it with the value `auto`

<template #example>
<notification-all-width />
</template>

<template #template>

@[code{1-14}](../.vuepress/components/notification/all-width.vue)

</template>

<template #script>

@[code{16-28} vue{4,6}](../.vuepress/components/notification/all-width.vue)

</template>

<template #style>

@[code{29-40}](../.vuepress/components/notification/all-width.vue)

</template>

</card>

<card>

## Sticky

You can add a style to the paste component to the nearest corner with the `sticky` property, this property is a `boolean` po which can only have the value `true`

<template #example>
<notification-sticky />
</template>

<template #template>

@[code{1-58}](../.vuepress/components/notification/sticky.vue)

</template>

<template #script>

@[code{60-73} vue{6}](../.vuepress/components/notification/sticky.vue)

</template>

<template #style>

@[code{75-96}](../.vuepress/components/notification/sticky.vue)

</template>

</card>

<card>

## Example

You can do great things with this component and some others from vuesax, to add any element within the notification we have the property `content` this property can only receive an imported component and that is what it will generate within the notification

<template #example>
<notification-example />
</template>

<template #template>

@[code{1-13}](../.vuepress/components/notification/example.vue)

</template>

<template #script>

@[code{15-43}](../.vuepress/components/notification/example.vue)

</template>

</card>

<card>

## API

</card>
