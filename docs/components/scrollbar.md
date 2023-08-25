---
PROPS:
  - name: height
    type: String, Number
    values: number
    description: height of scrollbar
    default: 
    link: null
    usage: '#default'
    code: null  
    
  - name: max-height
    type: String, Number
    values: number
    description: max height of scrollbar
    default: null
    link: null
    usage: '#max-height'
    code: null

  - name: native
    type: Boolean
    values: true, false
    description: whether to use the native scrollbar
    default: false
    link: null
    usage: null
    code: null

  - name: wrap-style
    type: String, Object, Array
    values: CSSProperties, CSSProperties[], string[]
    description: style of wrap container
    default: null
    link: null
    usage: null
    code: null

  - name: wrap-class
    type: String
    values: string
    description: class of wrap container
    default: null
    link: null
    usage: null
    code: null

  - name: view-style
    type: String, Object, Array
    values: CSSProperties, CSSProperties[], string[]
    description: style of view container
    default: null
    link: null
    usage: null
    code: null

  - name: view-class
    type: String
    values: string
    description: class of view container
    default: null
    link: null
    usage: null
    code: null

  - name: noresize
    type: Boolean
    values: true, false
    description: do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance
    default: false
    link: null
    usage: null
    code: null

  - name: tag
    type: string
    values: HTML Tag
    description: element tag of the view
    default: div
    link: null
    usage: null
    code: null

  - name: always
    type: Boolean
    values: true, false
    description: always show scrollbar
    default: true
    link: null
    usage: null
    code: null

  - name: min-size
    type: Number
    values: 
    description: minimum size of scrollbar
    default: 20
    link: null
    usage: null
    code: null

  - name: thickness
    type: Number, String
    values: number
    description: thumb width
    default: 6
    link: null
    usage: null
    code: null

EVENTS:
  - name: scroll
    type: function
    values: '({ scrollLeft: number, scrollTop: number }) => void'
    description: triggers when scrolling, return distance of scrolling
    default: null
    link: null
    usage: null
    code: null

SLOTS:
  - name: default
    type: slot
    values:
    description: customize default content
    default: null
    example: null
    link: null
    usage: null
    code: null

EXPOSES:
  - name: handleScroll
    type: function
    values: '() => void'
    description: handle scroll event
    default: null
    example: null
    link: null
    usage: null
    code: null

  - name: scrollTo
    type: function
    values: '(options: ScrollToOptions | number, yCoord?: number) => void'
    description: scrolls to a particular set of coordinates
    default: null
    example: null
    link: null
    usage: null
    code: null

  - name: setScrollTop
    type: function
    values: '(scrollTop: number) => void'
    description: Set distance to scroll top
    default: null
    example: null
    link: null
    usage: null
    code: null

  - name: setScrollLeft
    type: function
    values: '(scrollLeft: number) => void'
    description: Set distance to scroll left
    default: null
    example: null
    link: null
    usage: null
    code: null

  - name: update
    type: function
    values: '() => void'
    description: update scrollbar state manually
    default: null
    example: null
    link: null
    usage: null
    code: null

  - name: wrapRef
    type: object
    values: 'Ref HTMLElement'
    description: scrollbar wrap ref
    default: null
    example: null
    link: null
    usage: null
    code: null
---

# Scrollbar

<card>


## Default

<docs-warn />

Used to replace the browser's native scrollbar.

Use `height` property to set the height of the scrollbar, or if not set, it adapts according to the parent container height.

<template #example>
<scrollbar-default />
</template>

<template #template>

@[code{1-5}](../.vuepress/components/scrollbar/default.vue)

</template>
<template #style>

@[code{7-19}](../.vuepress/components/scrollbar/default.vue)

</template>

</card>

<card>

## Horizontal scroll

When the element width is greater than the scrollbar width, the horizontal scrollbar is displayed.

<template #example>
<scrollbar-hirizontal />
</template>

<template #template>

@[code{1-9}](../.vuepress/components/scrollbar/hirizontal.vue)
</template>

<template #style>

@[code{11-28}](../.vuepress/components/scrollbar/hirizontal.vue)
</template>

</card>

<card>

## Max height

The scrollbar is displayed only when the element height exceeds the max height.

<template #example>
<scrollbar-max-height />
</template>

<template #template>

@[code{1-11}](../.vuepress/components/scrollbar/max-height.vue)
</template>

<template #script>

@[code{13-25}](../.vuepress/components/scrollbar/max-height.vue)
</template>

<template #style>

@[code{27-39}](../.vuepress/components/scrollbar/max-height.vue)
</template>

</card>

<card>

## Api

</card>
