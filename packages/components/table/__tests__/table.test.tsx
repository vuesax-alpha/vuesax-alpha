import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Table from '../src/table.vue'

const AXIOM = 'Rem is the best girl'

describe('Table.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Table>{AXIOM}</Table>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
