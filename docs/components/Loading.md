---
PROPS:
  #__________________________________
  - name: type
    type: String
    values: waves, corners, border, points, square, gradient, rectangle, circles, square-rotate, scale
    description: Change the animation of the loading.
    default: default
    link: null
    usage: '#type'
    code: >
      <script lang="ts" setup>
        const openLoading = () => {
          const loadingInstance = loading({
            type: 'waves'
          });
          setTimeout(() => {
            loadingInstance.close();
          }, 3000);
        };
      </script>
    #__________________________________
  - name: color
    type: String
    values: All colors of vuesax (RGB y HEX)
    description: Change the color of the loading animation.
    default: primary
    link: /theme/
    usage: '#color'
    code: >
      <script lang="ts" setup>
        const openLoading = () => {
          const loadingInstance = loading({
            color: '#000'
          });
          setTimeout(() => {
            loadingInstance.close();
          }, 3000);
        };
      </script>
    #__________________________________
  - name: background
    type: String
    values: All colors of vuesax (RGB y HEX)
    description: Change the background color of the loading.
    default: '#fff'
    link: /theme/
    usage: '#background'
    code: >
      <script lang="ts" setup>
        const openLoading = () => {
          const loadingInstance = loading({
            color: '#fff',
            background: 'danger',
          });
          setTimeout(() => {
            loadingInstance.close();
          }, 3000);
        };
      </script>
    #__________________________________
  - name: text
    type: String
    values: String
    description: Add a text below the loading animation.
    default: null
    link: null
    usage: '#text'
    code: >
      <script lang="ts" setup>
        const openLoading = () => {
          const loadingInstance = loading({
            text: 'Loading...',
          });
          setTimeout(() => {
            loadingInstance.close();
          }, 3000);
        };
      </script>
    #__________________________________
  - name: percent
    type: String | Number
    values: 0% - 100%
    description: Add a percentage text inside the loading.
    default: null
    link: null
    usage: '#percent'
    code: >
      <script lang="ts" setup>
        const openLoading = () => {
          const loadingInstance = loading({
            percent: '67%'
          });
          setTimeout(() => {
            loadingInstance.close();
          }, 3000);
        };
      </script>
    #__________________________________
  - name: progress
    type: String | Number
    values: 0 - 100
    description: Add a progress bar to the loading and the progress would be the value.
    default: null
    link: null
    usage: '#progress'
    code: >
      <script lang="ts" setup>
        const openLoading = () => {
          const loadingInstance = loading({
            progress: 20
          });
          setTimeout(() => {
            loadingInstance.close();
          }, 3000);
        };
      </script>
    #__________________________________
  - name: target
    type: String | HTMLElement | Ref<HTMLElement>
    values: 'String: Element Selector, HTMLElement: Selector element, Ref HTMLElement'
    description: Determine the parent of the loading where it will be instantiated.
    default: null
    link: null
    usage: '#target'
    code: >
      <template>
        <div class="center">
          <div class="con-btns">
            <vs-button dark flat @click="openLoading">Open Loading <b>Target</b></vs-button>
          </div>

          <div ref="$content" class="content-div">
            Container of the <b>loading</b>
          </div>
        </div>
      </template>

      <script lang="ts" setup>
        import { ref } from "vue";

        const $content = ref<HTMLElement>();

        const openLoading = () => {
          const loadingInstance = loading({
            targer: $content
          });
          setTimeout(() => {
            loadingInstance.close();
          }, 3000);
        };
      </script>
    #__________________________________
  - name: opacity
    type: String | Number
    values: 0 - 1
    description: Change the opacity of the background.
    default: '0.6'
    link: null
    usage: '#target'
    code: >
      <script lang="ts" setup>
        const openLoading = () => {
          const loadingInstance = loading({
            color: 'dark',
            opacity: 1,
          });
          setTimeout(() => {
            loadingInstance.close();
          }, 3000);
        };
      </script>
    #__________________________________
  - name: scale
    type: String | Number
    values: 0 - 1
    description: Change the size of the loading animation.
    default: '1'
    link: null
    usage: '#target'
    code: >
      <script lang="ts" setup>
        const openLoading = () => {
          const loadingInstance = loading({
            color: 'dark',
            scale: '0.4'
          });
          setTimeout(() => {
            loadingInstance.close();
          }, 3000);
        };
      </script>
  #__________________________________
  - name: setPercent
    type: Function
    values: '(percent: String | Number) => void'
    description: Change the value of the percent after instantiating the loading.
    default: null
    link: null
    usage: '#percent'
    code: >
      <script lang="ts" setup>
        import { ref } from "vue";

        const percent = ref<number | string>(0);

        const openLoading = () => {
          const loadingInstance = loading({
            percent: percent.value,
          });
          const interval = setInterval(() => {
            if (percent.value <= 100) {
              percent.value = Number(percent.value) + 1;
              loadingInstance.setPercent(percent.value);
            }
          }, 40);
          setTimeout(() => {
            loadingInstance.close();
            clearInterval(interval);
            percent.value = 0
          }, 4800);
        };
      </script>
  #__________________________________
  - name: setProgress
    type: Function
    values: '(progress: String | Number) => void'
    description: Change the value of the progress after instantiating the loading.
    default: null
    link: null
    usage: '#progress'
    code: >
      <script lang="ts" setup>
        import { ref } from "vue";

        const progress = ref<number | string>(0);

        const openLoading = () => {
          const loadingInstance = loading({
            progress: progress.value,
          });
          const interval = setInterval(() => {
            if (progress.value <= 100) {
              progress.value = Number(progress.value) + 1;
              loadingInstance.setPercent(progress.value);
            }
          }, 40);
          setTimeout(() => {
            loadingInstance.close();
            clearInterval(interval);
            percent.value = 0
          }, 4100);
        };
      </script>
  #__________________________________
  - name: setText
    type: Function
    values: '(text: String) => void'
    description: Change the value of the text property after instantiating the loading.
    default: null
    link: null
    usage: '#text'
    code: >
      <script lang="ts" setup>
        const openLoading = () => {
          const loadingInstance = loading();

          loadingInstance.setText('Loading...');

          setTimeout(() => {
            loadingInstance.close();
          }, 4100);
        };
      </script>

UPDATES:
  - type
---

# Loading

<card>

## Default

<docs-warn />

Generate a loading with the vuesax function

<Command>

```ts
import { loading } from 'vuesax-alpha'

loading(options)
```

</Command>

<template #example>
<loading-default />
</template>

<template #template>

@[code{1-5} html{3}](../.vuepress/components/loading/default.vue)

</template>

<template #script>

@[code{7-16} html{5,7}](../.vuepress/components/loading/default.vue)

</template>

</card>

<card>

## Type <Badge text="Update" type="warn" />

Change the type of loading with the option `type`

Tipos de loading:

- waves
- corners
- border
- points
- square
- gradient
- rectangle
- circles
- square-rotate
- scale

::: tip
Click on the example loading to open it in the whole page
:::

<template #example>
<loading-type />
</template>

<template #template>

@[code{1-10} html](../.vuepress/components/loading/type.vue)

</template>

<template #script>

@[code{12-60} html{24,28,34-36}](../.vuepress/components/loading/type.vue)

</template>

</card>

<card>

## Color

Change the color of the loading animation with the property `color`, the colors can be the main ones of vuesax or (**RGB**, **HEX**)

<template #example>
<loading-color />
</template>

<template #template>

@[code{1-16} html](../.vuepress/components/loading/color.vue)

</template>

<template #script>

@[code{18-81} html](../.vuepress/components/loading/color.vue)

</template>

</card>

<card>

## Background

You can change the loading background with the property `loading`

<template #example>
<loading-background />
</template>

<template #template>

@[code{1-9} html](../.vuepress/components/loading/background.vue)

</template>

<template #script>

@[code{11-27} html](../.vuepress/components/loading/background.vue)

</template>

</card>

<card>

## Text

Add a descriptive text of the loading or informing the user that it is loading or that it is missing to load with the property `text`

<template #example>
<loading-text />
</template>

<template #template>

@[code{1-5} html](../.vuepress/components/loading/text.vue)

</template>

<template #script>

@[code{7-18} html](../.vuepress/components/loading/text.vue)

</template>

</card>

<card>

## Percent

You can add a string of the percentage of load with the `percent` property, if you need to change that value use the `setPercent` function in the loading instance.

<template #example>
<loading-percent />
</template>

<template #template>

@[code{1-5} html](../.vuepress/components/loading/percent.vue)

</template>

<template #script>

@[code{7-30} html](../.vuepress/components/loading/percent.vue)

</template>

</card>

<card>

## Progress

Add a progress bar at the top to indicate the loading progress of the loading with the `progress` property, the value is a number that determines the percentage and the allowed value is (0 - 100)

<template #example>
<loading-progress />
</template>

<template #template>

@[code{1-5} html](../.vuepress/components/loading/progress.vue)

</template>

<template #script>

@[code{7-30} html](../.vuepress/components/loading/progress.vue)

</template>

</card>

<card>

## Target

Use the loading on a specific dom element using the `target` property and the value can be a string with the `id` or the `class` only if it is unique for the element, you can also use the element itself as per example using `$refs`

<template #example>
<loading-target />
</template>

<template #template>

@[code{1-13} html](../.vuepress/components/loading/target.vue)

</template>

<template #script>

@[code{15-45} html](../.vuepress/components/loading/target.vue)

</template>

</card>

<card>

## API

</card>
