import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { VsAlert } from '..'

const AXIOM = 'Rem is the best girl'

describe('Alert.vue', () => {
  test('[Prop] (color)', () => {
    const wrapper = mount(() => <VsAlert color="danger">{AXIOM}</VsAlert>)

    expect(wrapper.classes('vs-component--danger')).toEqual(true)
  })
})
