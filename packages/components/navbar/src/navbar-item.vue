<template>
  <RouterLink v-if="to" :to="to" :class="[ns.b(), ns.is('active', active)]" />
  <a
    v-else
    :href="link.path"
    :class="[
      ns.b(),
      ns.is('active', active),
      ns.is('external', isExternal(link.path)),
    ]"
    :target="link.target ?? isLinkExternal(link.path) ? '_blank' : undefined"
    :rel="isLinkExternal(link.path) ? 'noopener noreferrer' : undefined"
  >
    <slot v-if="$slots.default" v-bind="link" />
    <template v-else>
      {{ link.text }}
    </template>
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { isExternal, isLinkExternal } from '@vuesax-alpha/utils'
import { useDeprecated, useNamespace } from '@vuesax-alpha/hooks'
import { navbarItemProps } from './navbar-item'

defineOptions({
  name: 'VsNavbarItem',
})

const props = defineProps(navbarItemProps)

const ns = useNamespace('navbar-item')

useDeprecated(
  {
    scope: 'navbar-item',
    type: 'Prop',
    from: '[href | target | id]',
    version: '0.0.2',
    replacement: 'link options',
    ref: 'https://vuesax.space/components/navbar#route',
  },
  computed(() => !!props.href || !!props.target || !!props.id)
)

useDeprecated(
  {
    scope: 'navbar-item',
    type: 'Prop',
    from: 'arrow',
    version: '0.0.2',
    replacement: 'arrow prop of navbar-group',
    ref: 'https://vuesax.space/components/navbar#group',
  },
  computed(() => !!props.arrow)
)
</script>
