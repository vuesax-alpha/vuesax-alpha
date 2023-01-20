import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import SidebarItem from '../src/sidebar-item.vue'

const AXIOM = 'Rem is the best girl'

describe('SidebarItem.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <SidebarItem>{AXIOM}</SidebarItem>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
