import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Radio from '../src/radio.vue'

const AXIOM = 'Rem is the best girl'

describe('Radio.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Radio>{AXIOM}</Radio>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
