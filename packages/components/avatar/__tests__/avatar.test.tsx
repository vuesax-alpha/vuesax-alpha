import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { VsAvatar as Avatar, VsAvatarGroup as AvatarGroup } from '..'

const AXIOM = 'Rem is the best girl'

describe('Avatar.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Avatar>{AXIOM}</Avatar>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})

describe('AvatarGroup.vue', () => {
  test('[Prop](float)', () => {
    const wrapper = mount(() => (
      <AvatarGroup float>
        <Avatar></Avatar>
        <Avatar></Avatar>
      </AvatarGroup>
    ))

    expect(wrapper.classes('float')).toEqual(true)
  })

  test('[Prop](max)', () => {
    mount(() => (
      <AvatarGroup>
        <Avatar>1</Avatar>
        <Avatar>2</Avatar>
        <Avatar>3</Avatar>
      </AvatarGroup>
    ))
  })
})
