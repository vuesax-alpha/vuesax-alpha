import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Navbar from '../src/navbar.vue'

const AXIOM = 'Rem is the best girl'

describe('Navbar.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Navbar>{AXIOM}</Navbar>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
