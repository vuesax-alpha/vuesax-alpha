import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { VsIcon as Icon } from '..'

describe('Icon.vue', () => {
  test('render', () => {
    const wrapper = mount(() => <Icon color="#000" size={18} />)
    expect(
      wrapper.element.getAttribute('style')?.includes('--vs-color: 0, 0, 0')
    ).toEqual(true)
  })
})
