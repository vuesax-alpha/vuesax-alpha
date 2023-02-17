import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Popper from '../src/popper.vue'

const AXIOM = 'Rem is the best girl'

describe('Popper.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Popper>{AXIOM}</Popper>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
