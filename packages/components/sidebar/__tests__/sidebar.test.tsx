import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Sidebar from '../src/sidebar.vue'

const AXIOM = 'Rem is the best girl'

describe('Sidebar.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Sidebar>{AXIOM}</Sidebar>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
