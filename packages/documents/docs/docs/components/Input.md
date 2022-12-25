---
PROPS:
  - name: v-model
    type: String, Number
    values: String, Number
    description: binding value
    default: null
    link: null
    usage: null
    code: >
      <template>
        <vs-input v-model="name" placeholder="Name" />
      </template>

      <script lang="ts" setup>
        import { ref } from "vue"

        const name = ref<string | number>('');
      </script>
  - name: placeholder
    type: String
    values: String
    description: placeholder of Input
    default: null
    link: null
    usage: "#default"
    code: >
      <template>
        <vs-input placeholder="Name" />
      </template>
  - name: label
    type: String
    values: String
    description: a label above the component.
    default: null
    link: null
    usage: "#label"
    code: >
      <template>
        <vs-input
          label="Name"
          placeholder="Evan You"
        />
      </template>
  - name: label-placeholder
    type: String
    values: String
    description: Add a placeholder converts to focus on a label.
    default: null
    link: null
    usage: "#label-placeholder"
    code: >
      <template>
        <vs-input
          label-placeholder="Country"
          v-model="value"
        />
      </template>
  - name: color
    type: String
    values: vuesax colors, RGB, HEX
    description: Change component color.
    default: null
    link: null
    usage: "#color"
    code: >
      <template>
        <vs-input
          primary
          placeholder="Primary" />

        <vs-input
          success
          placeholder="Success" />

        <vs-input
          danger
          placeholder="Danger" />

        <vs-input
          warn
          placeholder="Warn" />

        <vs-input
          dark
          placeholder="Dark" />

        <vs-input
          color="#7d33ff"
          placeholder="HEX" />

        <vs-input
          color="rgb(59,222,200)"
          placeholder="HEX" />
        </div>
      </template>

  - name: state
    type: String
    values: vuesax colors,RGB,HEX
    description: Change the background color of the component by changing its status.
    default: null
    link: null
    usage: "#state"
    code: >
      <template>
        <vs-input
          primary
          state="primary"
          placeholder="Primary" />

        <vs-input 
          state="success" 
          success 
          placeholder="Success Icon"
        >
          <template #icon>
            <i class='bx bx-user'></i>
          </template>
        </vs-input>

        <vs-input 
          state="danger" 
          danger 
          icon-after 
          placeholder="Danger icon after"
        >
          <template #icon>
            <i class='bx bx-mail-send' ></i>
          </template>
        </vs-input>

        <vs-input
          warn
          state="warn"
          v-model="value4"
          placeholder="Label Warn"
          label="Warn" />

        <vs-input
          dark
          state="dark"
          v-model="value5"
          label-placeholder="Dark" />
      </template>

  - name: progress
    type: Number
    values: 0 - 100
    description: progress bar starting in red and ending in green.
    default: null
    link: null
    usage: "#progress"
    code: >
      <template>
        <vs-input
          type="password"
          label-placeholder="Password"
          :progress="getProgress"
          :show-password="hasVisiblePassword"
          icon-after
          @click-icon="hasVisiblePassword = !hasVisiblePassword">

          <template #icon>
            <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
            <i v-else class='bx bx-hide'></i>
          </template>

          <template v-if="getProgress >= 100" #message-success>
            Secure password
          </template>

        </vs-input>
      </template>

      <script lang="ts" setup>
        import { ref, computed } from "vue";

        const hasVisiblePassword = ref(false);

        const getProgress = computed(() => {
          let progress = 0;
          // at least one number
          if (/\d/.test(value.value)) {
            progress += 20;
          }
          // at least one capital letter
          if (/(.*[A-Z].*)/.test(value.value)) {
            progress += 20;
          }
          // at menons a lowercase
          if (/(.*[a-z].*)/.test(value.value)) {
            progress += 20;
          }
          // more than 5 digits
          if (value.value.length >= 6) {
            progress += 20;
          }
          // at least one special character
          if (/[^A-Za-z0-9]/.test(value.value)) {
            progress += 20;
          }
          return progress;
        });
      </script>

  - name: loading
    type: Boolean
    values: Boolean
    description: Add a loading animation to the input.
    default: null
    link: null
    usage: "#loading"
    code: >
      <template>
        <div class="center content-inputs">
          <vs-input loading v-model="value" placeholder="Name" />
        </div>
      </template>

  - name: type
    type: string
    values: html type
    description: Change the type of input (html values).
    default: null
    link: null
    usage: "#input-types"
    code: >
      <template>
        <vs-input
          type="text"
          label="Text"
        />
        <vs-input
          type="password"
          label="Password"
        />
        <vs-input
          type="search"
          label="Search"
        />
        <vs-input
          type="number"
          label="Number"
        />
        <vs-input
          type="url"
          label="Url"
        />
        <vs-input
          type="time"
          label="time"
        />
        <vs-input
          type="date"
          label="Date"
        />
      </template>

  - name: border
    type: Boolean
    values: Boolean
    description: Change the style of the component.
    default: false
    link: null
    usage: "#border"
    code: >
      <template>
        <vs-input border v-model="value" placeholder="Name" />

        <vs-input 
          color="#7d33ff" 
          border 
          type="password" 
          placeholder="Password"
        >
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>

        <vs-input 
          border 
          warn 
          type="email" 
          icon-after
          label-placeholder="Address"
        >
          <template #icon>
            <i class='bx bxl-bitcoin'></i>
          </template>
        </vs-input>
      </template>

  - name: shadow
    type: Boolean
    values: Boolean
    description: Change the style of the component.
    default: false
    link: null
    usage: "#shadow"
    code: >
      <template>
        <vs-input 
          shadow 
          placeholder="Name" 
        />

        <vs-input 
          color="#7d33ff" 
          shadow 
          type="password" 
          placeholder="Password"
        >
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>

        <vs-input 
          shadow 
          warn 
          type="email" 
          icon-after 
          label-placeholder="Address"
        >
          <template #icon>
            <i class='bx bxl-bitcoin'></i>
          </template>
        </vs-input>
      </template>

  - name: icon-after
    type: Boolean 
    values: Boolean
    description: suffix icon component
    default: false
    link: null
    usage: "#icon"
    code: >
      <template>
        <vs-input 
          type="password" 
          icon-after  
          placeholder="Password"
        >
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>
      </template>

  - name: show-password
    type: boolean
    values: boolean
    description: If the input is of the password type, it is modified to show the password.
    default: false
    link: null
    usage: "#progress"
    code: >
      <template>
        <vs-input
          type="password"
          label-placeholder="Password"
          :progress="getProgress"
          :show-password="showPassword"
          icon-after
          @click-icon="showPassword = !showPassword"
        >
          <template #icon>
            <i v-if="!showPassword" class='bx bx-show-alt'></i>
            <i v-else class='bx bx-hide'></i>
          </template>

          <template v-if="getProgress >= 100" #message-success>
            Secure password
          </template>
        </vs-input>
      </template>

SLOTS:
  - name: icon
    type: Slot
    values: null
    description: Add an icon to the input.
    default: null
    link: null
    usage: "#icon"
    code: >
      <template>
        <vs-input placeholder="User name">
          <template #icon>
            <i class='bx bx-user'></i>
          </template>
        </vs-input>

        <vs-input type="password" icon-after placeholder="Password">
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>
      </template>

  - name: message
    type: Slot
    values: message-success, message-danger, message-warn
    description: Add an informative text below the input.
    default: null
    link: null
    usage: "#message"
    code: >
      <template>
        <vs-input placeholder="Email">
          <template #message-success>
            Email Valid
          </template>
        </vs-input>

        <vs-input placeholder="Name">
          <template #message-danger>
            Required
          </template>
        </vs-input>

        <vs-input type="password" placeholder="Password">
          <template #message-warn>
            Insecure password
          </template>
        </vs-input>

        <vs-input label="Example Regex Validation" placeholder="vuesax@gmail.com">
          <template v-if="validEmail" #message-success>
            Email Valid
          </template>
          <template v-if="!validEmail && value4 !== ''" #message-danger>
            Email Invalid
          </template>
        </vs-input>
      </template>

---

# Input

<card>

## Default

<docs-warn />

Add an elements input facilitate with the component `<vs-input>`

<template #example>
<input-default />
</template>

<template #template>

@[code{1-5} html{3}](../../.vuepress/components/input/default.vue)

</template>

<template #script>

@[code{7-11}](../../.vuepress/components/input/default.vue)

</template>

</card>

<card>

## Label

Add a label to the input with the property `label`

<template #example>
<input-label />
</template>

<template #template>

@[code{1-9} html{4}](../../.vuepress/components/input/label.vue)

</template>

<template #script>

@[code{10-14}](../../.vuepress/components/input/label.vue)

</template>

</card>

<card>

## Label Placeholder

You can have a placeholder with a great animation when being or in focus or with a value becoming a label above the input with the property `label-placeholder`

<template #example>
<input-labelPlaceholder />
</template>

<template #template>

@[code{1-5} html{3}](../../.vuepress/components/input/labelPlaceholder.vue)

</template>

<template #script>

@[code{7-11}](../../.vuepress/components/input/labelPlaceholder.vue)

</template>

</card>

<card>

## Color

Change the color of the component and add a border below with the `color` property, the allowed values ​​are the main colors of vuesax and the colors (**RGB** y **HEX**)

<template #example>
<input-color />
</template>

<template #template>

@[code{1-50} html{4,9,19,30,36,41,46}](../../.vuepress/components/input/color.vue)

</template>

<template #script>

@[code{51-61}](../../.vuepress/components/input/color.vue)

</template>

</card>

<card>

## Icon

Add an icon to the input easily with the slot icon if you want the icon to be before the input you can do it with the property `icon-before`

<utils-icon />

<template #example>
<input-icon />
</template>

<template #template>

@[code{1-20} html{4,15}](../../.vuepress/components/input/icon.vue)

</template>

<template #script>

@[code{21-26}](../../.vuepress/components/input/icon.vue)

</template>

</card>

<card>

## Message

You can add a message below the input with the `slot="message- {vuesax color}"` to report that a field is missing or the value is wrong

<template #example>
<input-message />
</template>

<template #template>

@[code{1-26} html{4,8,12,20-21}](../../.vuepress/components/input/message.vue)

</template>

<template #script>

@[code{28-39}](../../.vuepress/components/input/message.vue)

</template>

</card>

<card>

## State

Change the color of the input for some state, the allowed states are (primary, success, danger, warn, dark)

<template #example>
<input-state />
</template>

<template #template>

@[code{1-31} html{12}](../../.vuepress/components/input/state.vue)

</template>

<template #script>

@[code{33-43}](../../.vuepress/components/input/state.vue)

</template>

</card>

<card>

## Progress

Add a validation progress bar, the most common is its use to validate passwords and correct data within the input, its value is (0 - 100).

:::tip
The example validates that the password has at least

- A special character
    - More than 6 digits
    - One lower case letter
    - An uppercase letter
    - A number
  :::

<template #example>
<input-progress />
</template>

<template #template>

@[code{1-22} html{7}](../../.vuepress/components/input/progress.vue)

</template>

<template #script>

@[code{24-54}](../../.vuepress/components/input/progress.vue)

</template>

</card>

<card>

## Loading

Add a loading animation to the input with the `loading` property, the property is a `Boolean`, so you can add it without any value.

<template #example>
<input-loading />
</template>

<template #template>

@[code{1-5} html{3}](../../.vuepress/components/input/loading.vue)

</template>

<template #script>

@[code{7-11}](../../.vuepress/components/input/loading.vue)

</template>

</card>

<card>

## Input types

Change the type of input with the `type` property as a native html input, the default value is `text`

<template #example>
<input-types />
</template>

<template #template>
 
@[code{1-14} html{4}](../../.vuepress/components/input/types.vue)

</template>

<template #script>

@[code{15-25}](../../.vuepress/components/input/types.vue)

</template>

</card>

<card>

## Border

Change everything is style of the component with the `border` property, the property is a `Boolean`, so you can add it without any value.

<template #example>
<input-border />
</template>

<template #template>

@[code{1-30} html{7}](../../.vuepress/components/input/border.vue)

</template>

<template #script>

@[code{32-38}](../../.vuepress/components/input/border.vue)

</template>

</card>

<card>

## Shadow

Change everything is style of the component with the `shadow` property, the property is a `Boolean`, so you can add it without any value.

<template #example>
<input-shadow />
</template>

<template #template>

@[code{1-30} html{7}](../../.vuepress/components/input/shadow.vue)

</template>

<template #script>

@[code{31-37}](../../.vuepress/components/input/shadow.vue)

</template>

</card>

<card>

## API

</card>
