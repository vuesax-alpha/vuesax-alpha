# Grid

<card>

## Default

<docs-warn />

In the grid system, we define the frame outside the information area according to the row and column, to ensure that each area can have a stable layout.

The following is a brief glimpse of how it works:

- Establish a set of columns in the horizontal space defined by row (_abreviada col_)
- Your content items should be placed directly in the column, and only the column should be placed directly in the row
- The column grid system has a value of **1** to **12** to represent its range intervals. For example, `w="4"` can create three columns of equal width (**33.3%**).
- If the sum of the cabbage segments in a row is greater than **12**, then the overflowing cabbage as a whole will start a new line layout.

With the `w` directive define the column width (vs-col) its value is **1-12**, an example of sizes would be:`12=100%`,`6=50%`,`4=33% `

<template #example>
  <grid-default />
</template>

<template #template>

@[code{1-27}](../.vuepress/components/grid/default.vue)

</template>

</card>

<card>

## Offset

To give a distance from the left we have the offset property that with the same measurements **1-12** we add the specific space, an example would be: `12=100%`,`6=50%`,`4=33%`.

<template #example>
  <grid-offset />
</template>

<template #template>

@[code{1-23}](../.vuepress/components/grid/offset.vue)

</template>

</card>

<card>

## Flex Justify

If we have to align the elements horizontally, use the `justify` directive that uses CSS attributes as parameters:` flex-start`, `center`,` flex-end`, `space-around`,` space-between`.

<template #example>
  <grid-flex-justify />
</template>

<template #template>

@[code{1-27}](../.vuepress/components/grid/flex-justify.vue)

</template>

</card>

<card>

## Align

If we have to align the elements in Vertical, use the `align` directive that uses CSS attributes as parameters: `top`, 

<template #example>
  <grid-flex-align />
</template>

<template #template>

@[code{1-15}](../.vuepress/components/grid/flex-align.vue)

</template>

</card>

<card>

## Responsive

Responsive system **Mobile first**.

There are some measures that can only be added in a specific device size, the directives are:

- **xxl**: 1536px
- **xl**: 1280px
- **lg**: 1024px
- **md**: 768px
- **smx**: 640px
- **sm**: is default

<template #example>
  <grid-responsive />
</template>

<template #template>

@[code{1-15}](../.vuepress/components/grid/responsive.vue)

</template>

<template #script>

@[code{17-40}](../.vuepress/components/grid/responsive.vue)

</template>

</card>
