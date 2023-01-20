import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import SidebarGroup from '../src/sidebar-group.vue'

const AXIOM = 'Rem is the best girl'

describe('SidebarGroup.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <SidebarGroup>{AXIOM}</SidebarGroup>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
