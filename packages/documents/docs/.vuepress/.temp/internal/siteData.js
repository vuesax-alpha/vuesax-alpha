export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/logos/logo-vuesax-logotipo-vuesax-png-8.png\",\"media\":\"(prefers-color-scheme:dark)\",\"type\":\"image/png\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/logos/logo-vuesax-logotipo-vuesax-png-7.png\",\"media\":\"(prefers-color-scheme:light)\",\"type\":\"image/png\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no\"}],[\"meta\",{\"name\":\"author\",\"content\":\"Lusaxweb\"}],[\"meta\",{\"name\":\"google\",\"content\":\"nositelinkssearchbox\"}],[\"meta\",{\"hid\":\"description\",\"name\":\"description\",\"content\":\"Vuesax Framework Components for Vuejs\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuesax.com/vuesax_components.png\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vuesax Framework Components for Vuejs\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Vuesax - Framework for Vuejs\"}],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuesax.com/\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"English\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
