---
PROPS:
  - name: type
    type: String
    values: 1,2,3,4,5
    description: Change the style of the letter and the position of the internals.
    default: null
    link: null
    usage: "#type-5"
    code: >
      <vs-card type="5">
        <template #title>
          <h3>Sand to today's time</h3>
        </template>
        <template #img>
          <img src="/foto13.png" alt="" />
        </template>
        <template #text>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class="bx bx-heart"></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class="bx bx-chat"></i>
            <span class="span"> 54 </span>
          </vs-button>
        </template>
      </vs-card>

SLOTS:
  - name: text
    type: slot
    values: null
    description: Add text to the card in the section determined by the card type.
    default: null
    link: null
    usage: "#default"
    code: >
      <template #text>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
      </template>
  - name: title
    type: slot
    values: null
    description: Add the title to the card in the section determined by the type of card.
    default: null
    link: null
    usage: "#default"
    code: >
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
  - name: buttons
    type: slot
    values: null
    description: Add the buttons to the card in the section determined by the type of card.
    default: null
    link: null
    usage: "#default"
    code: >
      <template #buttons>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span"> 54 </span>
        </vs-button>
      </template>
  - name: interactions
    type: slot
    values: null
    description: Add the interactions to the card in the section determined by the card type.
    default: null
    link: null
    usage: "#default"
    code: >
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span"> 54 </span>
        </vs-button>
      </template>
  - name: img
    type: slot
    values: null
    description: Add the image or video to the card in the section determined by the type of card.
    default: null
    link: null
    usage: "#default"
    code: >
      <template #img>
        <img src="/foto5.png" alt="">
      </template>

NEWS:
  - name
---

# Card

<card>

<docs-warn />

## Default

Add a card with the `vs-card` component for the structure of this component we have several slots

- title
- text
- buttons
- interactions
- img

<template #example>
  <card-default />
</template>

<template #template>

@[code{1-24}](../.vuepress/components/card/default.vue)

</template>

</card>

<card>

## Type 2

Completely change the style of the letter with the property `type` and the value` 2`

<template #example>
  <card-type2 />
</template>

<template #template>

@[code{1-24} vue{3}](../.vuepress/components/card/type2.vue)

</template>

</card>

<card>

## Type 3

Completely change the style of the letter with the property `type` and the value` 3`

<template #example>
  <card-type3 />
</template>

<template #template>

@[code{1-24} vue{3}](../.vuepress/components/card/type3.vue)

</template>

</card>

<card>

## Type 4

Completely change the style of the letter with the `type` property and the value` 4`

<template #example>
  <card-type4 />
</template>

<template #template>

@[code{1-24} vue{3}](../.vuepress/components/card/type4.vue)

</template>

</card>

<card>

## Type 5

Change the style of the letter completely with the `type` property and the value` 5`

<template #example>
  <card-type5 />
</template>

<template #template>

@[code{1-24} vue{3}](../.vuepress/components/card/type5.vue)

</template>

</card>

<card>

## Group

To have a group of scrolling cards you can use the `vs-card-group` component

<template #example>
  <card-group />
</template>

<template #template>

@[code{1-26} vue{3}](../.vuepress/components/card/group.vue)

</template>

<template #script>

@[code{28-32}](../.vuepress/components/card/group.vue)

</template>

</card>

<card>

## API

</card>
