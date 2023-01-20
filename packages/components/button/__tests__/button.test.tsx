import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { VsButton as Button } from '..'

const AXIOM = 'Rem is the best girl'

describe('Button.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Button>{AXIOM}</Button>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
