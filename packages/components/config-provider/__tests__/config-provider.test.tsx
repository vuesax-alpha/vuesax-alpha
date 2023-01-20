// import { defineComponent, nextTick, reactive, ref } from 'vue'
// import { mount } from '@vue/test-utils'
// import { afterEach, beforeEach, describe, expect, it } from 'vitest'
// import { useGlobalConfig } from '@vuesax-alpha/hooks'
// import { VsButton } from '@vuesax-alpha/components'
// import { rAF } from '@vuesax-alpha/test-utils/tick'
// import ConfigProvider from '../src/config-provider'

// import type { PropType } from 'vue'
// import type { ConfigProviderProps } from '../src/config-provider'

// describe('config-provider', () => {
//   describe('button-config', () => {
//     it('autoInsertSpace', async () => {
//       const config = reactive({
//         autoInsertSpace: true,
//       })

//       const wrapper = mount(() => (
//         <>
//           <ConfigProvider button={config}>
//             <VsButton>中文</VsButton>
//           </ConfigProvider>
//           <button
//             class="toggle"
//             onClick={() => (config.autoInsertSpace = !config.autoInsertSpace)}
//           >
//             toggle
//           </button>
//         </>
//       ))

//       await nextTick()
//       expect(
//         wrapper.find('.vs-button .vs-button__text--expand').exists()
//       ).toBeTruthy()
//       await wrapper.find('.toggle').trigger('click')
//       expect(
//         wrapper.find('.vs-button .vs-button__text--expand').exists()
//       ).toBeFalsy()
//     })
//   })

//   describe('namespace-config', () => {
//     it('reactive namespace', async () => {
//       const namespace = ref()

//       const wrapper = mount(() => (
//         <ConfigProvider namespace={namespace.value}>
//           <ElButton>test str</ElButton>
//         </ConfigProvider>
//       ))

//       await nextTick()
//       expect(wrapper.find('button').classes().join('')).toBe('vs-button')
//       namespace.value = 'ep'
//       await nextTick()
//       expect(wrapper.find('button').classes().join('')).toBe('ep-button')
//     })
//   })

//   describe('message-config', () => {
//     afterEach(() => {
//       ElMessage.closeAll()
//     })

//     it('limit the number of messages displayed at the same time', async () => {
//       const config = reactive({
//         max: 3,
//       })
//       const open = () => {
//         ElMessage('this is a message.')
//       }

//       const wrapper = mount(() => (
//         <ConfigProvider message={config}>
//           <ElButton onClick={open}>open</ElButton>
//         </ConfigProvider>
//       ))

//       await nextTick()
//       wrapper.find('.vs-button').trigger('click')
//       wrapper.find('.vs-button').trigger('click')
//       wrapper.find('.vs-button').trigger('click')
//       wrapper.find('.vs-button').trigger('click')
//       await nextTick()
//       expect(document.querySelectorAll('.vs-message').length).toBe(3)

//       config.max = 10
//       await nextTick()
//       wrapper.find('.vs-button').trigger('click')
//       wrapper.find('.vs-button').trigger('click')
//       wrapper.find('.vs-button').trigger('click')
//       wrapper.find('.vs-button').trigger('click')
//       await nextTick()
//       expect(document.querySelectorAll('.vs-message').length).toBe(7)
//     })

//     it('multiple config-provider config override', async () => {
//       const config = reactive({
//         max: 3,
//       })
//       const overrideConfig = reactive({
//         max: 1,
//       })
//       const open = () => {
//         ElMessage('this is a message.')
//       }

//       const wrapper = mount(() => (
//         <ConfigProvider message={config}>
//           <ConfigProvider message={overrideConfig}>
//             <ElButton onClick={open}>open</ElButton>
//           </ConfigProvider>
//         </ConfigProvider>
//       ))

//       await rAF()
//       await wrapper.find('.vs-button').trigger('click')
//       await wrapper.find('.vs-button').trigger('click')
//       await wrapper.find('.vs-button').trigger('click')
//       await nextTick()
//       expect(document.querySelectorAll('.vs-message').length).toBe(1)
//     })
//   })

//   describe('feature checking', () => {
//     const TestComponent = defineComponent({
//       props: {
//         configKey: {
//           type: String as PropType<keyof ConfigProviderProps>,
//           required: true,
//         },
//       },
//       setup(props) {
//         const features = useGlobalConfig(props.configKey)
//         return {
//           [props.configKey]: features,
//         }
//       },
//       render: () => <div />,
//     })

//     it.each([
//       { feature: 'a11y', config: false },
//       { feature: 'keyboardNavigation', config: false },
//       { feature: 'experimentalFeatures', config: { someFeature: true } },
//     ])(
//       'should inject config $feature to $config correctly',
//       ({ feature, config }: { feature: string; config: any }) => {
//         const props: Record<string, any> = {}
//         props[feature] = config

//         const wrapper = mount(() => (
//           <ConfigProvider {...props}>
//             <TestComponent configKey={feature as keyof ConfigProviderProps} />
//           </ConfigProvider>
//         ))

//         expect(wrapper.findComponent(TestComponent).vm[feature]).toEqual(config)
//       }
//     )
//   })
// })
