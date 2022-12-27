---
PROPS:
  - name: title
    type: String
    values: String
    description: Add a title to the notification.
    default: null
    link: null
    usage: "#default"
    code: >
      this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: text
    type: String
    values: String
    description: Add the text to the notification.
    default: null
    link: null
    usage: "#default"
    code: >
      this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: position
    type: String
    values: bottom-right,top-right,top-center,top-left,bottom-left,bottom-center
    description: Change the position of the component.
    default: bottom-right
    link: null
    usage: "#position"
    code: >
      const noti = this.$vs.notification({
        position: 'top-right',
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: color
    type: String
    values: vuesax colors, rgb, hex
    description: Change the base color of the entire component.
    default: null
    link: null
    usage: "#color"
    code: >
      const noti = this.$vs.notification({
        color: 'primary',
        title: 'Documentation Vuesax 4.0+',
        text: 'These documents refer to the latest version of vuesax (4.0+), to see the
        documents of the previous versions you can do it here 👉 Vuesax 3.x'
      })
  - name: border
    type: String
    values: vuesax colors, rgb, hex
    description: Add a color border to the notification.
    default: null
    link: null
    usage: "#border"
    code: >
      const noti = this.$vs.notification({
        border: 'success',
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: icon
    type: String
    values: String
    description: Add an icon to the notification.
    default: null
    link: null
    usage: "#icons"
    code: >
      const noti = this.$vs.notification({
        icon: `<i class='bx bxs-time'></i>`,
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`
      })
  - name: duration
    type: Number, String
    values: Number, none
    description: Determine the time until the notification is hidden (none determines not to hide).
    default: 4000 (4s)
    link: null
    usage: "#duration"
    code: >
      const noti = this.$vs.notification({
        duration: 10000,
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
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
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
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
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        buttonClose: false
      })
  - name: flat
    type: Boolean
    values: true,false
    description: Change the notification style to flat.
    default: false
    link: null
    usage: "#flat"
    code: >
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        flat: true
      })
  - name: onDestroy
    type: function
    values: function
    description: Function that is executed when the notification is destroyed.
    default: null
    link: null
    usage: null
    code: >
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        onDestroy: () => {
          console.log('destroy notification')
        }
      })
  - name: sticky
    type: boolean
    values: true,false
    description: Change the position of the notification attached to the nearest corner.
    default: false
    link: null
    usage: "#sticky"
    code: >
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        sticky: true
      })
  - name: square
    type: boolean
    values: true,false
    description: Determine if the notification is square and remove the border-radius.
    default: false
    link: null
    usage: "#square"
    code: >
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        square: true
      })
  - name: width
    type: String
    values: 100%, auto
    description: Determine the width of the notification.
    default: 340px
    link: null
    usage: "#width"
    code: >
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        width: 100%
      })
  - name: loading
    type: boolean
    values: true,false
    description: Determine if the notification has a loading animation.
    default: false
    link: null
    usage: "#loading"
    code: >
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        loading: true
      })
  - name: progress
    type: Number, String
    values: 0 - 100, auto
    description: Add a progress bar to the notification.
    default: null
    link: null
    usage: "#progress"
    code: >
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        progress: 'auto'
      })
  - name: notPadding
    type: Boolean
    values: true,false
    description: Remove padding from notification.
    default: 20px
    link: null
    usage: "#example"
    code: >
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        notPadding: true
      })
  - name: clickClose
    type: Boolean
    values: true,false
    description: Determine if clicking on the notification closes.
    default: false
    link: null
    usage: null
    code: >
      const noti = this.$vs.notification({
        title: 'Documentation Vuesax 4.0+',
        text: `These documents refer to the latest version of vuesax (4.0+),
        to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
        clickClose: true
      })
  - name: content
    type: Vue Component
    values: Vnode
    description: Change the content of the notification to the one provided as a value (something similar to a vue slot).
    default: null
    link: null
    usage: "#example"
    code: >
      <script>
        import user from './user.vue'
        export default {
          methods: {
            openNotificationUser() {
              const noti = this.$vs.notification({
                duration: 'none',
                width: 'auto',
                content: user,
              })
            }
          }
        }
      </script>
  - name: instance.close()
    type: function
    values: null
    description: Close the notificationn.
    default: null
    link: null
    usage: null
    code: >
      <script>
        export default {
          methods: {
            openNotification() {
              const noti = this.$vs.notification({
                duration: 'none',
                loading: true
              })

              setTimeout(() => {
                noti.close()
              }, 5000)
            }
          }
        }
      </script>
  - name: instance.changeProgress(value)
    type: function
    values: 0 - 100
    description: Change the notification progress value after instantiation.
    default: null
    link: null
    usage: null
    code: >
      <script>
        export default {
          methods: {
            openNotification() {
              const noti = this.$vs.notification({
                title: 'Documentation Vuesax 4.0+',
                text: `These documents refer to the latest version of vuesax (4.0+),
                to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
                progress: 0
              })

              setTimeout(() => {
                noti.changeProgress(50)
              }, 5000)
            }
          }
        }
      </script>
  - name: instance.setLoading(boolean)
    type: function
    values: true,false
    description: Change the status of loading after instantiating.
    default: null
    link: null
    usage: null
    code: >
      <script>
        export default {
          methods: {
            openNotification() {
              const noti = this.$vs.notification({
                title: 'Documentation Vuesax 4.0+',
                text: `These documents refer to the latest version of vuesax (4.0+),
                to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              })

              setTimeout(() => {
                noti.setLoading(true)
              }, 5000)
            }
          }
        }
      </script>
  - name: instance.toggleClass(String)
    type: function
    values: String
    description: Add or remove the last class as a parameter to the notification.
    default: null
    link: null
    usage: null
    code: >
      <script>
        export default {
          methods: {
            openNotification() {
              const noti = this.$vs.notification({
                classNotification: 'my-class'
                title: 'Documentation Vuesax 4.0+',
                text: `These documents refer to the latest version of vuesax (4.0+),
                to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              })

              setTimeout(() => {
                noti.toggleClass('new-class')
              }, 5000)
            }
          }
        }
      </script>

  - name: classNotification
    type: String
    values: String
    description: Add a custom class to the notification.
    default: null
    link: null
    usage: null
    code: >
      <script>
        export default {
          methods: {
            openNotification() {
              const noti = this.$vs.notification({
                classNotification: 'my-class'
                title: 'Documentation Vuesax 4.0+',
                text: `These documents refer to the latest version of vuesax (4.0+),
                to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,
              })

              setTimeout(() => {
                noti.toggleClass('new-class')
              }, 5000)
            }
          }
        }
      </script>
---

# Notification

<card>

## Default

<docs-warn />

It generates a notification with the vuesax function (`notification`), to use the instance of the notification it is necessary to save it in a variable, for example if you need to close the notification manually or do other functionalities with the instance

<command>

```js
import { notification } from "vuesax-alpha"

notification({ ...options })
```

</command>

::: tip
The necessary properties are the `title` and the` text` or failing the `content` property
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

@[code{1-48} html{6,13}](../.vuepress/components/notification/color.vue)

</template>

<template #script>

@[code{50-61} html{6}](../.vuepress/components/notification/color.vue)

</template>

</card>

<card>

## Icons

Add the icon provided as the value of the `icon` property to the notification

<template #example>
  <notification-icons />
</template>

<template #template>

@[code{1-88} html{6,26}](../.vuepress/components/notification/icons.vue)

</template>

<template #script>

@[code{90-102} html{4,6}](../.vuepress/components/notification/icons.vue)

</template>

<template #style>

@[code{104-125}](../.vuepress/components/notification/icons.vue)

</template>

</card>

<card>

## Progress

Add a progress bar to the notification, if the value of the `progress` property is `auto` be determined by the `duration` property to reach 100%, if you want the value to be manual you can add a number of the (0 - 100) being 100 100% and use the function in the `changeProgress` instance and change the value to the one provided as the first parameter

<template #example>
  <notification-progress />
</template>

<template #template>

@[code{1-36}](../.vuepress/components/notification/progress.vue)

</template>

<template #script>

@[code{38-50} html{6}](../.vuepress/components/notification/progress.vue)

</template>

<template #style>

@[code{52-73}](../.vuepress/components/notification/progress.vue)

</template>

</card>

<card>

## Duration

Change the duration of the notification with the `duration` property, the value is numerical and determine the seconds before the bone component is hidden that **10s** equals **10000** as the value

if you need the notification to never be hidden, the duration value would be `none`

<template #example>
  <notification-duration />
</template>

<template #template>

@[code{1-8}](../.vuepress/components/notification/duration.vue)

</template>

<template #script>

@[code{10-21} html{6}](../.vuepress/components/notification/duration.vue)

</template>

<template #style>

@[code{22-43}](../.vuepress/components/notification/duration.vue)

</template>

</card>

<card>

## Square

Change the style of the notification with the `square` property so as not to have `border-radius` making it a rectangle

<template #example>
  <notification-square />
</template>

<template #template>

@[code{1-64}](../.vuepress/components/notification/square.vue)

</template>

<template #script>

@[code{65-77} vue{6}](../.vuepress/components/notification/square.vue)

</template>

<template #style>

@[code{78-99}](../.vuepress/components/notification/square.vue)

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

Change the style of the notification with the `flat` property, having this property changes to lighter colors and the text of the color of the `color` property, this property is a boolean so you can only use the value `true`

<template #example>
  <notification-flat />
</template>

<template #template>

@[code{1-46}](../.vuepress/components/notification/flat.vue)

</template>

<template #script>

@[code{48-61} vue{6}](../.vuepress/components/notification/flat.vue)

</template>

<template #style>

@[code{63-84}](../.vuepress/components/notification/flat.vue)

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

Change the size of the notification to the total screen with the property `width` and giving it a value of `100%`

If you need the notification to have an automatic size to your content you can do it with the value `auto`

<template #example>
  <notification-allWidth />
</template>

<template #template>

@[code{1-14}](../.vuepress/components/notification/allWidth.vue)

</template>

<template #script>

@[code{16-27} vue{4,6}](../.vuepress/components/notification/allWidth.vue)

</template>

<template #style>

@[code{28-39  }](../.vuepress/components/notification/allWidth.vue)

</template>

</card>

<card>

## Sticky

You can add a style to the paste component to the nearest corner with the `sticky` property, this property is a `boolean` po which can only have the value `true`

<template #example>
  <notification-sticky />
</template>

<template #template>

@[code{1-48}](../.vuepress/components/notification/sticky.vue)

</template>

<template #script>

@[code{50-63} vue{6}](../.vuepress/components/notification/sticky.vue)

</template>

<template #style>

@[code{65-86}](../.vuepress/components/notification/sticky.vue)

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
