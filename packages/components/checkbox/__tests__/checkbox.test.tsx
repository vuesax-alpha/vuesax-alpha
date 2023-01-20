import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Checkbox from '../src/checkbox.vue'

const AXIOM = 'Rem is the best girl'

describe('Checkbox.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Checkbox>{AXIOM}</Checkbox>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
