<template>
  <div :class="ns.b('wrapper')">
    <div v-if="$slots.header" :class="ns.be('wrapper', 'header')">
      <slot name="header" />
    </div>

    <div :class="tableKls">
      <table>
        <thead ref="theadRef" :class="ns.e('thead')">
          <slot name="thead" />
        </thead>
        <tbody :class="ns.e('tbody')">
          <slot name="tbody" />
        </tbody>

        <tbody :class="ns.e('not-found')">
          <tr>
            <td :colspan="colspan">
              <slot name="notFound">{{ t('vs.table.noMatch') }}</slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'
import { useLocale, useNamespace } from '@vuesax-alpha/hooks'
import { tableContextKey } from '@vuesax-alpha/tokens'
import { tableEmits, tableProps } from './table'
import { useTable } from './composables'

defineOptions({
  name: 'VsTable',
})

const ns = useNamespace('table')
const { t } = useLocale()

const props = defineProps(tableProps)

const emit = defineEmits(tableEmits)

const { tableKls, colspan, selected, theadRef } = useTable(props, emit)

provide(tableContextKey, {
  selected,
  colspan,
  multiple: computed(() => props.multiple),
  modelValue: computed(() => props.modelValue),
})
</script>
