import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Row from '../src/row.vue'

const AXIOM = 'Rem is the best girl'

describe('Row.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Row>{AXIOM}</Row>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
