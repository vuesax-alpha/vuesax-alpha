---
PROPS:
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: Change the color of the component and some of its sub components.
    default: primary
    link: /api/color
    usage: '#color'
    code: >
      <vs-button color="success"> Success </vs-button>
  # _______________________________________
  - name: style button
    type: Prop
    values: flat, border, gradient, transparent, dashed, shadow, relief, floating
    description: Change the style of the component and its states.
    default: null
    link: null
    usage: '#flat'
    code: >
      <vs-button flat> Flat </vs-button>
  # _______________________________________
  - name: active
    type: Boolean
    values: true, false
    description: Determine if the component is active and change its style to that state.
    default: false
    link: null
    usage: '#default'
    code: >
      <vs-button active> Default </vs-button>
  # _______________________________________
  - name: upload
    type: Boolean
    values: true, false
    description: Determine if the component has the upload status active by changing the style and adding the animation.
    default: false
    link: null
    usage: '#upload'
    code: >
      <vs-button upload >
        <i class='bx bxs-wallet'></i> Wallet
      </vs-button>
  # _______________________________________
  - name: to
    type: String
    values: url - vue-router
    description: Add the functionality of vue-router to the button, clicking it will redirect to the last route.
    default: false
    link: null
    usage: '#to-href'
    code: >
      <vs-button to="/">
        Example prop - to
      </vs-button>
  # _______________________________________
  - name: href
    type: String
    values: href - link
    description: Add an href of an external link to add the functionality by clicking on the component.
    default: false
    link: null
    usage: '#to-href'
    code: >
      <vs-button href="https://tranthinh-coding.github.io/vuesax-alpha/">
        Example prop - url
      </vs-button>
  # _______________________________________
  - name: blank
    type: Boolean
    values: true, false
    description: as in an html element `a` determines whether a new window is opened or the current one is replaced.
    default: false
    link: null
    usage: '#to-href'
    code: >
      <vs-button blank href="https://tranthinh-coding.github.io/vuesax-alpha/">
        Example prop - url
      </vs-button>
  # _______________________________________
  - name: icon
    type: Boolean
    values: true, false
    description: Determine if the component contains only one icon, by adding this property the component has an equal width and height.
    default: false
    link: null
    usage: '#icon'
    code: >
      <vs-button icon >
        <i class='bx bx-home-alt'></i>
      </vs-button>
  # _______________________________________
  - name: circle
    type: Boolean
    values: true, false
    description: Change the border radius to give a circle style.
    default: false
    link: null
    usage: '#circle'
    code: >
      <vs-button icon circle>
        <i class='bx bx-home-alt'></i>
      </vs-button>
  # _______________________________________
  - name: square
    type: Boolean
    values: true, false
    description: Change the border radius to give a rectangle style.
    default: false
    link: null
    usage: '#square'
    code: >
      <vs-button icon square> // <------
        <i class='bx bx-home-alt'></i>
      </vs-button>
  # _______________________________________
  - name: block
    type: Boolean
    values: true, false
    description: Change the width of the component to the possible total determined by the parent element.
    default: false
    link: null
    usage: '#block'
    code: >
      <vs-button block>
        <i class='bx bxs-paint-roll'></i> Edit Theme
      </vs-button>
  # _______________________________________
  - name: animationType
    type: Boolean
    values: true, false
    description: Change the type of animation, this property only works if you have the <code> slot </code> animate.
    default: false
    link: null
    usage: '#animate'
    code: >
      <vs-button flat color="success" animation-type="vertical">
        Message
        <template #animate>
          <i class='bx bx-mail-send'></i> Send
        </template>
      </vs-button>
  # _______________________________________
  - name: animateInactive
    type: Boolean
    values: true, false
    description: Determine if the animation is active for the user when hovering.
    default: false
    link: null
    usage: '#toggle'
    code: >
      <vs-button :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
        <i class='bx bxl-facebook-square'></i>
        {{ successFace ? 'Logout' : 'Facebook' }}
        <template #animate >
          <i class='bx bx-user'></i> Login
        </template>
      </vs-button>
  # _______________________________________
  - name: Ripple
    type: String
    values: reverse, cut
    description: Change ripple style of a button with the `ripple` property
    default: undefined
    usage: '#ripple'
    code: >
      <template>
        <vs-button ripple="reverse"> Reverse </vs-button>
        <vs-button ripple="cut"> Cut </vs-button>
      </template>
SLOTS:
  - name: animate
    type: slot
    values: null
    description: Slot To add the element that will be displayed in the animation.
    default: null
    link: null
    code: >
      <vs-button>
        Home
        <template #animate>
          <i class='bx bx-home-alt'></i>
        </template>
      </vs-button>
    usage: '#animated'
  # _______________________________________
NEWS:
  - ripple
---

# Button

<card codesandbox="https://codesandbox.io/embed/reverent-shape-pmyk2?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue">

## Default

<docs-warn />

The buttons are a fundamental part of any project, with vuesax you can add a great button with a single line of code

the buttons have all the states as active, focus, hover, to make its implementation simpler and speed up the work

<template #example>
<button-default />
</template>

<template #template>

@[code{1-7} html](../.vuepress/components/button/default.vue)

</template>

<template #script>

@[code{9-13} html](../.vuepress/components/button/default.vue)

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/charming-maxwell-ms0xf?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark">

## Flat

You can change the full style towards _flat_ of a button with the `flat` property that its value is a` boolean`, so just adding it will change the styles

<template #example>
<button-flat />
</template>

<template #template>

@[code{1-24} html{4}](../.vuepress/components/button/flat.vue)

</template>

<template #script>

@[code{26-30} html](../.vuepress/components/button/flat.vue)

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-border-zc0td?fontsize=14&hidenavigation=1&theme=dark">

## Border

You can change the full style towards _border_ of a button with the `border` property that its value is a` boolean` so just adding it will change the styles

<template #example>
<button-border />
</template>

<template #template>

@[code{1-24} html{4}](../.vuepress/components/button/border.vue)

</template>

<template #script>

@[code{26-30} html](../.vuepress/components/button/border.vue)

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-gradient-7en0i?fontsize=14&hidenavigation=1&theme=dark">

## Gradient

You can change the full style towards _Gradient_ of a button with the `gradient` property that its value is a` boolean`, so just adding it will change the styles

:::tip Gradient Auto Color
Gradient colors are automatically generated by the `color` property which in this example is the` primary` color
:::

<template #example>
<button-gradient />
</template>

<template #template>

@[code{1-24} html{4}](../.vuepress/components/button/gradient.vue)

</template>

<template #script>

@[code{26-30} html](../.vuepress/components/button/gradient.vue)

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-relief-7dfh7?fontsize=14&hidenavigation=1&theme=dark">

## Relief

Change the style of the button to a relief aspect with the `relief` property, the property is a` boolean` so you can add it without any value.

<template #example>
<button-relief />
</template>

<template #template>

@[code{1-24} html{4}](../.vuepress/components/button/relief.vue)

</template>

<template #script>

@[code{26-30} html](../.vuepress/components/button/relief.vue)

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-transparent-4t6d6?fontsize=14&hidenavigation=1&theme=dark">

## Transparent

Change the style of the button with the `transparent` property, the property is a` boolean` so you can add it without any value.

<template #example>
<button-transparent />
</template>

<template #template>

@[code{1-24} html{4}](../.vuepress/components/button/transparent.vue)

</template>

<template #script>

@[code{26-30} html](../.vuepress/components/button/transparent.vue)

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-shadow-ufx6y?fontsize=14&hidenavigation=1&theme=dark">

## Shadow

Change the style of the button with the `shadow` property, the property is a` boolean` so you can add it without any value.

<template #example>
<button-shadow />
</template>

<template #template>

@[code{1-24} html{4}](../.vuepress/components/button/shadow.vue)

</template>

<template #script>

@[code{26-30} html](../.vuepress/components/button/shadow.vue)

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-colors-gje98?fontsize=14&hidenavigation=1&theme=dark">

## Color

Change the color of the Button component with the `color` property and the color value for example (**#fff**, **rgba (100,10,5)** or the **main colors of vuesax**), this will only affect the component and its value can be dynamic

<utils-color />

<template #example>
<button-color />
</template>

<template #template>

@[code{1-58} html{10,18,26,34,42,50}](../.vuepress/components/button/color.vue)

</template>

<template #script>

@[code{60-64} html](../.vuepress/components/button/color.vue)

</template>

</card>

<card>

## Icon

If you need an icon-only button use the `icon` property, the property is a` boolean` so you can add it without any value.

This property makes the button have a specific size making it the same width and height, do not use when it is icon and text

<utils-icon />

<template #example>
<button-icon />
</template>

<template #template>

@[code{1-60} html{4}](../.vuepress/components/button/icon.vue)

</template>

<template #script>

@[code{62-66} html](../.vuepress/components/button/icon.vue)

</template>

</card>

<card>

## Icon - Text

If you need a button with text and icon you can do them by adding them in the `slot` default.

<template #example>
<button-iconText />
</template>

<template #template>

@[code{1-55} html{7}](../.vuepress/components/button/iconText.vue)

</template>

<template #script>

@[code{57-61} html](../.vuepress/components/button/iconText.vue)

</template>

</card>

<card>

## Circle

You can completely round the corners with the `circle` property, the property is a` boolean` so you can add it without any value.

<template #example>
<button-circle />
</template>

<template #template>

@[code{1-64} html{4}](../.vuepress/components/button/circle.vue)

</template>

<template #script>

@[code{66-70} html](../.vuepress/components/button/circle.vue)

</template>

</card>

<card>

## Square

You can make all the corners completely straight with the `Square` property, the property is a` boolean` so you can add it without any value.

<template #example>
<button-square />
</template>

<template #template>

@[code{1-61} html{4}](../.vuepress/components/button/square.vue)

</template>

<template #script>

@[code{63-67} html](../.vuepress/components/button/square.vue)

</template>

</card>

<card>

## Size

Change the size of the entire button including padding, font-size and border with the `size` property

values:

- xl
- l
- default
- small
- mini

<template #example>
<button-size />
</template>

<template #template>

@[code{1-38} html{4}](../.vuepress/components/button/size.vue)

</template>

<template #script>

@[code{40-44} html](../.vuepress/components/button/size.vue)

</template>

</card>

<card>

## Loading

Now you can add a loading status with the `loading` property, the property is a` boolean` so you can add it without any value.

<template #example>
<button-loading />
</template>

<template #template>

@[code{1-63} html{4}](../.vuepress/components/button/loading.vue)

</template>

<template #script>

@[code{65-69} html](../.vuepress/components/button/loading.vue)

</template>

</card>

<card>

## Upload

Now you can add a status of sending or uploading data to the server with the `upload` property, the property is a` boolean` so you can add it without any value.

<template #example>
<button-upload />
</template>

<template #template>

@[code{1-74} html{4}](../.vuepress/components/button/upload.vue)

</template>

<template #script>

@[code{76-80} html](../.vuepress/components/button/upload.vue)

</template>

</card>

<card>

## Block

You can make the button have the full width allowed with the `block` property, the property is a` boolean` so you can add it without any value.

<template #example>
<button-block />
</template>

<template #template>

@[code{1-9} html{4}](../.vuepress/components/button/block.vue)

</template>

</card>

<card>

## Animate

You can create an animation to the component by adding template ``#animate `and the content will be the one that appears when the component is animated

You can also change the type of animation with the `animation-type` property and the allowed values ​​are (` vertical`, `scale`,` rotate`)

<template #example>
<button-animate />
</template>

<template #template>

@[code{1-45} html{5,6,7}](../.vuepress/components/button/animate.vue)

</template>

</card>

<card>

## Social

Using the colors of social networks is very common in a project either a login button or a share button so Vuesax makes it easy for you to search for each color and just by putting the name of the network you already change the whole style of the component

Supported colors: (`facebook`, `twitter`, `youtube`, `pinterest`, `linkedin`, `snapchat`, `whatsapp`, `tumblr`, `reddit`, `spotify`, `amazon`, `medium`, `vimeo`, `skype`, `dribbble`, `slack`, `yahoo`, `twitch`, `discord`, `telegram`, `google-plus`, `messenger`)

<template #example>
<button-social />
</template>

<template #template>

@[code{1-136} html{5}](../.vuepress/components/button/social.vue)

</template>

</card>

<card>

## Floating

You can make a float style button easily with the `Floating` property, the property is a` boolean` so you can add it without any value.

these buttons usually do an important action in specific and go with a fixed position in the lower corner

<template #example>
<button-floating />
</template>

<template #template>

@[code{1-38} html{6}](../.vuepress/components/button/floating.vue)

</template>

</card>

<card>

## Group

If you need to make a group of buttons you can use the **sub-component** `<vs-button-group> </vs-button-group>` and inside the default slot put the buttons you want to group

<template #example>
<button-group />
</template>

<template #template>

@[code{1-53} html{3,16}](../.vuepress/components/button/group.vue)

</template>

</card>

<card>

## Toggle

This is an example of what you can achieve with simple logic and few lines of code.

<template #example>
<button-toggle />
</template>

<template #template>

@[code{1-28} html](../.vuepress/components/button/toggle.vue)

</template>

<template #script>

@[code{30-54} html](../.vuepress/components/button/toggle.vue)

</template>

<template #style>

@[code{56-66} html](../.vuepress/components/button/toggle.vue)

</template>

</card>

<card>

## To - href

If you need to use a button such as a vue-router link or an external link you can do it with the properties (`to`: vue-router link) or (` href`: html external link, `blank`: Open the linked document in a new window or tab)

<template #example>
<button-toHref />
</template>

<template #template>

@[code html](../.vuepress/components/button/toHref.vue)

</template>

</card>

<card>

## Ripple <Badge text="New" />

You can change ripple style of a button with the `ripple` property and the allowed values are

- `reverse`
- `cut`

<template #example>
<button-ripple />
</template>

<template #template>

@[code html](../.vuepress/components/button/ripple.vue)

</template>

</card>

<card>

## API

</card>
