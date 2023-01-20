import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Col from '../src/col.vue'

const AXIOM = 'Rem is the best girl'

describe('Col.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Col>{AXIOM}</Col>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
