import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import FocusTrap from '../src/focus-trap.vue'

const AXIOM = 'Rem is the best girl'

describe('FocusTrap.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <FocusTrap>{AXIOM}</FocusTrap>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
