---
PROPS:
  - name: color
    type: String
    values: Vuesax Colors, RGB, HEX
    description: color of the component.
    default: --vs-gray-2
    link: null
    usage: '#color'
    code: null

  - name: size
    type: Number
    values: Number
    description: size of the avatar component.
    default: 44
    link: null
    usage: '#size'
    code: null
  - name: badge
    type: Boolean
    values: true, false
    description: Determine if the badge is active.
    default: false
    link: null
    usage: '#badge'
    code: null

  - name: badge-color
    type: String
    values: Vuesax colors,RGB,HEX
    description: Change the color of the badge inside the avatar.
    default: primary
    link: null
    usage: '#badge'
    code: null

  - name: shape
    type: String
    values: square, circle
    description: Change the style of the avatar by circulating it.
    default: false
    link: null
    usage: '#shape'
    code: null

  - name: writing
    type: Boolean
    values: true,false
    description: Add an animation to the writing badge.
    default: false
    link: null
    usage: '#badge'
    code: null

  - name: history
    type: Boolean
    values: true,false
    description: Add a border to the avatar.
    default: gray-2
    link: null
    usage: '#history'
    code: null

  - name: history-gradient
    type: Boolean
    values: true,false
    description: Change the color of the border to a gradient.
    default: false
    link: null
    usage: '#history'
    code: null

  - name: loading
    type: Boolean
    values: true,false
    description: Add a loading animation to the avatar.
    default: false
    link: null
    usage: '#loading'
    code: null

  - name: max
    type: number
    values: number
    description: (vs-avatar-group) determine how many avatars are visible.
    default: null
    link: null
    usage: '#group'
    code: null
  - name: float
    type: Boolean
    values: true,false
    description: (vs-avatar-group) change the way the avatar is composed by placing one next to the other.
    default: false
    link: null
    usage: '#group'
    code: null'

  - name: pointer
    type: Boolean
    values: true,false
    description: Determine if the avatar has a pointer cursor.
    default: false
    link: null
    usage: null
    code: null

SLOTS:
  - name: text
    type: slot
    values: null
    description: Add text within the avatar component.
    default: null
    link: null
    usage: '#default'
    code: >
      <vs-avatar>
        <template #text>
          Lily
        </template>
      </vs-avatar>

  - name: badge
    type: slot
    values: null
    description: Add to the badge everything that is inside the slot, commonly used for numbers and an icon.
    default: null
    link: null
    usage: '#badge'
    code: >
      <vs-avatar badge badge-color="success">
        <img src="/avatars/avatar-2.png" alt="">
        <template #badge>
          28
        </template>
      </vs-avatar>

  - name: icons
    type: slot
    values: null
    description: Add a space to put icons next to the avatar.
    default: null
    link: null
    usage: '#icons'
    code: >
      <vs-avatar>
        <img src="/avatars/avatar-1.png" alt="">
        <template #icons>
          <i class='bx bxl-facebook-square' ></i>
          <i class='bx bxl-github' ></i>
          <i class='bx bxl-twitter' ></i>
        </template>
      </vs-avatar>
---

# Avatar

<card>

## Default

<docs-warn />

Add an avatar easily and with functionality with the component `<vs-avatar>`

<template #example>
<avatar-default />
</template>

<template #template>

@[code{1-19} html{3-5}](../.vuepress/components/avatar/default.vue)

</template>

</card>

<card>

## Color

Change the color of the compound with the `color` property, the colors allowed are the main colors of vuesax and (`HEX`, `RGB`)

<template #example>
<avatar-color />
</template>

<template #template>

@[code html{3}](../.vuepress/components/avatar/color.vue)

</template>

</card>

<card>

## Size

Change the size of the component to the number provided if for example the size value is `60` equivalent to `60px` in height and width

<template #example>
<avatar-size />
</template>

<template #template>

@[code{1-19} html{3}](../.vuepress/components/avatar/size.vue)

</template>

</card>

<card>

## Badge

Add a badge to the component with the `badge` property or the slot

You can also change the color to represent a user status as disconnected or connected with colors such as `success` or `danger`, this you do with the `badge-color` property

There are times when you need to use the avatar in a chat environment and for this you can add the `writing` property that adds a writing animation

<template #example>
<avatar-badge />
</template>

<template #template>

@[code{1-30} html{3}](../.vuepress/components/avatar/badge.vue)

</template>

</card>

<card>

## Auto font and split

If the user has a short name, it is added as it is but if it is a very long text or has several spaces, the text to be displayed will be automatically generated so that it can be seen correctly

::: tip
The maximum length of characters is **5**. When that limit is exceeded, changes are made in the text
:::

<template #example>
<avatar-auto-font />
</template>

<template #template>

@[code{1-22}](../.vuepress/components/avatar/auto-font.vue)

</template>

</card>

<card>

## Shape

### Circle

Change the border-radius of the entire component to `50%` with the `circle` property making it fully circular

<template #example>
<avatar-circle />
</template>

<template #template>

@[code html{3}](../.vuepress/components/avatar/circle.vue)

</template>

</card>

<card>

### Square

Change the border-radius of the entire component to `0%` with the `square` property making it completely square

<template #example>
<avatar-square />
</template>

<template #template>

@[code html{3}](../.vuepress/components/avatar/square.vue)

</template>

</card>

<card>

## History

It generates a border around the avatar, this is usually used to represent that the user is doing an action or in many cases has a `History`

::: tip
You can make the border a gradient like instagram with the property `history-gradient`
:::

<template #example>
<avatar-history />
</template>

<template #template>

@[code{1-19} html{3}](../.vuepress/components/avatar/history.vue)

</template>

</card>

<card>

## Icon

You can put an icon inside an avatar when for example an image is not yet added or is a new user, for this you can simply use the default slot

<template #example>
<avatar-icon />
</template>

<template #template>

@[code{1-22} html{4}](../.vuepress/components/avatar/icon.vue)

</template>

</card>

<card>

## Loading

Add a loading animation to the component, this property is a `boolean` so you can add it without any value

<template #example>
<avatar-loading />
</template>

<template #template>

@[code html{3}](../.vuepress/components/avatar/square.vue)

</template>

</card>

<card>

## Icons

Add a space next to the avatar with the slot `icons` where you can put icons for some dynamic action of that user in specific

<template #example>
<avatar-icons />
</template>

<template #template>

@[code{1-27} html{5-9}](../.vuepress/components/avatar/icons.vue)

</template>

</card>

<card>

## Group

You can group several avatar with the parent component `vs-avatar-group`, this component has two interesting properties:

- **max**: determine the maximum number of avatars to show and the rest hides it generating the number in the last avatar shown

- **float**: causes the avatar components to be placed on each other and the grouping of one on top of the other is eliminated

<template #example>
<avatar-group />
</template>

<template #template>

@[code{1-69} html{3,36}](../.vuepress/components/avatar/group.vue)

</template>

</card>

<card>

## API

</card>
