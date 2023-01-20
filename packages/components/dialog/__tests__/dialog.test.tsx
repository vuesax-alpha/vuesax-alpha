import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Dialog from '../src/dialog.vue'

const AXIOM = 'Rem is the best girl'

describe('Dialog.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Dialog>{AXIOM}</Dialog>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
