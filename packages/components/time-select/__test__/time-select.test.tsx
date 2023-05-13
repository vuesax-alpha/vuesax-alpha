import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import TimeSelect from '../src/time-select.vue'

dayjs.extend(customParseFormat)

afterEach(() => {
  document.documentElement.innerHTML = ''
})

describe('TimeSelect', () => {
  it('set default value', async () => {
    const value = ref('14:30')
    const wrapper = mount(() => <TimeSelect v-model={value.value} />)

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(document.querySelector('.is-active')).toBeDefined()
    expect(document.querySelector('.is-active')?.textContent).toBe('14:30')
  })

  it('set minTime', async () => {
    const wrapper = mount(() => <TimeSelect minTime="14:30" />)

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const elms = document.querySelectorAll('.is-disabled')
    const elm = elms[elms.length - 1]
    expect(elm.textContent).toBe('14:30')
  })

  it('set maxTime', async () => {
    const wrapper = mount(() => <TimeSelect maxTime="14:30" />)

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const elm = document.querySelector('.is-disabled')
    expect(elm?.textContent).toBe('14:30')
  })

  it('set disabled', async () => {
    const value = ref('10:00')
    const disabled = ref(false)
    const wrapper = mount(() => (
      <TimeSelect v-model={value.value} disabled={disabled.value} />
    ))

    const select = wrapper.findComponent({ name: 'VsSelect' })
    expect(select.props().disabled).toBe(false)

    disabled.value = true
    await nextTick()
    expect(select.props().disabled).toBe(true)
  })

  it('set editable', async () => {
    const value = ref('10:00')
    const editable = ref(false)
    const wrapper = mount(() => (
      <TimeSelect v-model={value.value} editable={editable.value} />
    ))

    const select = wrapper.findComponent({ name: 'VsSelect' })
    expect(select.props().filter).toBe(false)

    editable.value = true
    await nextTick()
    expect(select.props().filter).toBe(true)
  })

  it('ref focus', async () => {
    const wrapper = mount(() => <TimeSelect />, {
      attachTo: document.body,
    })

    wrapper.vm.$.exposeProxy?.focus()
    await nextTick()

    const options = document.querySelector('.vs-popper.vs-select__options')
    const attr = options?.getAttribute('aria-hidden')
    expect(attr)
  })

  it('ref blur', async () => {
    const wrapper = mount(() => <TimeSelect />, {
      attachTo: document.body,
    })

    wrapper.vm.$.exposeProxy?.focus()
    await nextTick()
    wrapper.vm.$.exposeProxy?.blur()
    await nextTick()

    const options = document.querySelector('.vs-select__options')
    const attr = options?.getAttribute('aria-hidden')
    expect(attr).toEqual('true')
  })

  it('set format', async () => {
    const value = ref('')
    const wrapper = mount(() => (
      <TimeSelect
        v-model={value.value}
        start="13:00"
        step="00:30"
        end="13:30"
        format="hh:mm A"
      />
    ))

    const input = wrapper.find('.vs-select__input')
    await input.trigger('click')
    await nextTick()
    const option = document.querySelector('.vs-select__option')
    expect(option?.textContent).toBe('01:00 PM')
  })
})
