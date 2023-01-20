import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Card from '../src/card.vue'

const AXIOM = 'Rem is the best girl'

describe('Card.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Card>{AXIOM}</Card>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
