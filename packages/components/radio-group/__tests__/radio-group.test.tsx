import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import RadioGroup from '../src/radio-group.vue'

const AXIOM = 'Rem is the best girl'

describe('RadioGroup.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <RadioGroup>{AXIOM}</RadioGroup>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
