<template>
  <div ref="$el" class="config">
    <button class="config-btn">
      <i class="bx bx-cog" />
      <svg
        class="effect1config"
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="160"
        viewBox="0 0 160 160"
      >
        <path
          id="Trazado_200"
          data-name="Trazado 200"
          d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
          transform="translate(0 10)"
        />
      </svg>

      <ul class="options">
        <svg
          class="effect1config"
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          viewBox="0 0 160 160"
        >
          <path
            id="Trazado_200"
            data-name="Trazado 200"
            d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
            transform="translate(0 10)"
          />
        </svg>
        <li @click="reloadConfig">
          <i title="reload config" class="bx bx-rotate-left" />
        </li>
        <li @click="changeSidebar">
          <i
            title="Hidden Sidebar"
            class="bx bx-left-indent hidden-sidebar-hidden"
          />
          <i
            title="Open Sidebar"
            class="bx bx-right-indent visible-sidebar-hidden"
          />
        </li>
        <li
          :title="`${
            !$vsTheme.sidebarCollapseOpen ? 'Open' : 'Close'
          } sidebar items`"
          :class="{ active: !$vsTheme.sidebarCollapseOpen }"
          @click="changeMenu"
        >
          <i v-if="$vsTheme.sidebarCollapseOpen" class="bx bx-list-minus" />
          <i v-else class="bx bx-list-plus" />
        </li>
        <li
          :title="`${!$vsTheme?.openCode ? 'Open' : 'Close'} all Code`"
          :class="{ active: $vsTheme?.openCode }"
          @click="changeOpenCode"
        >
          <i class="bx bx-code-block" />
        </li>
        <li class="theme-color-layout" title="Theme Color Layout">
          <i class="bx bx-paint-roll" />
          <input
            type="color"
            value="#2564ff"
            @change="
              changeColorLayout(($event.target as HTMLInputElement).value)
            "
          />
        </li>
        <li class="theme-color-primary" title="Theme Primary Color">
          <i class="bx bxs-color-fill" />
          <input type="color" value="#2564ff" @change="changeColor" />
        </li>

        <svg
          class="effect1config invert"
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          viewBox="0 0 160 160"
        >
          <path
            id="Trazado_200"
            data-name="Trazado 200"
            d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
            transform="translate(0 10)"
          />
        </svg>
      </ul>
    </button>

    <button class="btn-lang theme-translate">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
        />
      </svg>

      <ul class="lang">
        <li
          v-for="(item, index) in lang[0]?.items"
          v-show="item.link !== pageData.path"
          :key="index"
        >
          <router-link :to="item.link">
            {{ item.text }}
          </router-link>
        </li>
      </ul>
    </button>

    <button
      :class="{ active: isDark }"
      :title="`Theme ${!isDark ? 'Dark' : 'Light'}`"
      class="li-darken switch-dark"
      @click="changeTheme"
    >
      <div class="switch-con">
        <span class="circle">
          <i v-if="isDark" class="bx bxs-sun" />
          <i v-else class="bx bxs-moon" />
        </span>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  usePageData,
  usePageLang,
  useRouteLocale,
  useSiteData,
} from '@vuepress/client'
// @ts-ignore
import { useThemeData } from '@vuepress/plugin-theme-data/client'
import { isDark, toggleDark } from '../composables'
import { vsThemeKey } from '../type'
import type { vsThemeContext } from '../type'

const router = useRouter()
const themeData = useThemeData()
const pageData = usePageData()
const siteData = useSiteData()
const pageLang = usePageLang()
const siteLocale = useRouteLocale()
const $vsTheme = inject<vsThemeContext>(vsThemeKey, {} as vsThemeContext)!
const $el = ref<HTMLElement>()

const lang = computed(() => {
  const locales = siteData.value.locales
  if (locales && Object.keys(locales).length > 1) {
    const currentLink = pageData.value.path
    const routes = router.options.routes

    const languageDropdown = {
      text:
        (themeData.value.locales?.[siteLocale.value] as any)
          ?.selectLanguageText || // undefined
        'Languages',
      items: Object.keys(locales).map((path) => {
        const locale = locales[path]
        const text = (themeData.value.locales?.[path] as any)
          ?.selectLanguageName
        let link: string
        // Stay on the current page
        if (locale.lang === pageLang.value) {
          link = currentLink
        } else {
          // Try to stay on the same page
          link = currentLink.replace(pageData.value.path, path)
          // fallback to homepage
          if (!routes.some((route) => route.path === link)) {
            link = path
          }
        }
        return { text, link }
      }),
    }
    // console.log(languageDropdown)
    return [languageDropdown]
  }
  return []
})

const reloadConfig = () => {
  const sidebar = document.querySelector(
    '.theme-container > .sidebar'
  ) as HTMLElement
  const navbar = document.querySelector(
    '.theme-container > .navbar'
  ) as HTMLElement
  const config = document.querySelector(
    '.theme-container > .config'
  ) as HTMLElement
  // const effect1 = document.querySelector(
  //   '.header-page > .effect1'
  // ) as HTMLElement

  sidebar?.style.removeProperty(`--vsd-theme-layout`)
  navbar?.style.removeProperty(`--vsd-theme-layout`)
  navbar?.style.removeProperty(`--vsd-theme-bg2`)
  config?.style.removeProperty(`--vsd-theme-layout`)
  sidebar?.style.removeProperty(`--vsd-theme-color`)
  navbar?.style.removeProperty(`--vsd-theme-color`)
  config?.style.removeProperty(`--vsd-theme-color`)
  document.body.classList.remove('hidden-sidebar')
  document.body.style.setProperty(`--vsd-primary`, '26, 92, 255')
  $vsTheme.mobileActive = false
  localStorage.mobile = false

  $vsTheme.sidebarCollapseOpen = true
  localStorage.sidebarCollapseOpen = true

  $vsTheme.openCode = false

  toggleDark(true)
}
const changeSidebar = () => {
  if (document.body.classList.contains('hidden-sidebar')) {
    document.body.classList.remove('hidden-sidebar')
  } else {
    document.body.classList.add('hidden-sidebar')
  }
}
const hexToRgb = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null
}
const contrastColor = (element: string) => {
  const c = `rgb(${element})`

  const rgb = c
    .replace(/^(rgb|rgba)\(/, '')
    .replace(/\)$/, '')
    .replace(/\s/g, '')
    .split(',')
  // console.log({ rgb })
  const yiq =
    (Number(rgb[0]) * 299 + Number(rgb[1]) * 587 + Number(rgb[2]) * 114) / 1000
  if (yiq >= 128) {
    return true
  } else {
    return false
  }
}
const changeColorLayout = (colorBase: string) => {
  let colour: string = colorBase
  if (/[#]/g.test(colour)) {
    const rgb = hexToRgb(colour)
    colour = `${rgb?.r}, ${rgb?.g}, ${rgb?.b}`
  }
  document.body.classList.add('all-transition')
  $el.value!.focus()

  const sidebar = document.querySelector(
    '.theme-container > .sidebar'
  )! as HTMLElement
  const navbar = document.querySelector(
    '.theme-container > .navbar'
  )! as HTMLElement
  const config = document.querySelector(
    '.theme-container > .config'
  )! as HTMLElement
  // const effect1 = document.querySelector(
  //   '.header-page > .effect1'
  // )! as HTMLElement

  sidebar.style.setProperty(`--vsd-theme-layout`, colour)
  navbar.style.setProperty(`--vsd-theme-layout`, colour)
  navbar.style.setProperty(`--vsd-theme-bg2`, colour)
  config.style.setProperty(`--vsd-theme-layout`, colour)

  if (contrastColor(colour)) {
    sidebar.style.setProperty(`--vsd-theme-color`, '44, 62, 80')
    navbar.style.setProperty(`--vsd-theme-color`, '44, 62, 80')
    config.style.setProperty(`--vsd-theme-color`, '44, 62, 80')
  } else {
    sidebar.style.setProperty(`--vsd-theme-color`, '0, 0, 0')
    navbar.style.setProperty(`--vsd-theme-color`, '0, 0, 0')
    config.style.setProperty(`--vsd-theme-color`, '0, 0, 0')
  }

  setTimeout(() => {
    document.body.classList.remove('all-transition')
  }, 100)
}
const changeColor = (evt: Event) => {
  // @ts-ignore
  evt.target.closest('button').focus()
  // @ts-ignore
  const rgb = hexToRgb(evt.target.value)
  const color = `${rgb?.r},${rgb?.g},${rgb?.b}`
  document.body.style.setProperty(`--vsd-primary`, color)
}
const changeMenu = () => {
  $vsTheme.sidebarCollapseOpen = !$vsTheme?.sidebarCollapseOpen
  localStorage.sidebarCollapseOpen = !$vsTheme?.sidebarCollapseOpen
}
// const changeMobile = () => {
//   $vsTheme.mobileActive = !$vsTheme.mobileActive
//   localStorage.mobile = !$vsTheme.mobileActive
// }
const changeOpenCode = () => {
  $vsTheme.openCode = !$vsTheme.openCode
}
const changeTheme = () => {
  toggleDark()
}
</script>

<style lang="scss">
@import '../styles/use';

.switch-dark {
  position: relative;
  width: auto !important;
  &:hover {
    .switch-con {
      background: -color('theme-bg2');
    }
    .circle {
      i {
        opacity: 1;
      }
    }
  }
  &:active {
    .circle {
      width: 28px;
      border-radius: 15px;
      i {
        transform: translate(24px);
        font-size: 0.85rem !important;
      }
    }
  }
  &.active {
    .switch-con {
      background: -color('theme-bg2') !important;
    }
    &:active {
      .circle {
        width: 28px;
        border-radius: 15px;
        transform: translate(21px);
        box-shadow: 0px 5px 15px 0px #000;
        i {
          transform: translate(-24px);
        }
      }
    }
    .circle {
      transform: translate(27px);
      i {
        transform: translate(-27px);
      }
    }
  }
  .switch-con {
    width: 60px;
    height: 32px;
    background: -color('theme-bg');
    border-radius: 20px;
    box-shadow: inset 0px 0px 4px 0px rgba(0, 0, 0, 0.05);
  }
  .circle {
    width: 23px;
    height: 23px;
    background: -color('theme-layout');
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 5px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
    transition: transform 0.25s ease, width 0.25s ease !important;
    transform: translate(0px);
    i {
      transform: translate(27px);
      transition: transform 0.25s ease, font-size 0.25s ease, opacity 0.25s ease !important;
      font-size: 1rem !important;
      z-index: -1;
    }
  }
}
.darken {
  .theme-translate {
    .lang {
      li {
        a {
          box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}
.theme-translate {
  position: relative;
  z-index: 100;
  &:hover {
    .lang {
      opacity: 1;
      visibility: visible;
      transform: translate(0, -54px);
    }
  }
  svg {
    width: 18px;
    fill: -color('theme-color');
  }
  .lang {
    transition: all 0.25s ease;
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate(0, -90%);
    padding: 0px;
    opacity: 0;
    visibility: hidden;
    li {
      text-align: center;
      font-weight: bold;
      padding: 0px 0px !important;
      display: block;
      a {
        padding: 7px 15px;
        font-weight: bold;
        background: -color('theme-layout');
        border-radius: 20px;
        transition: all 0.25s ease;
        margin-bottom: 10px;
        font-size: 0.75rem;
        display: block;
        box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.08);
        &:hover {
          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.08) !important;
          transform: translate(0, 3px);
        }
      }
    }
  }
}
.theme-color-layout {
  position: relative;
  input {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
.theme-color-primary {
  position: relative;
  input {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  i {
    &.bx {
      color: -color('primary');
    }
  }
}
.config {
  position: fixed;
  bottom: 0px;
  left: 260px;
  z-index: 18000;
  border: 0px;
  border-radius: 0px 20px 0px 0px;
  transition: all 0.25s ease;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 32px;
    height: 45px;
    border-radius: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0px;
    background: -color('theme-layout');
    transition: all 0.25s ease;
    &.config-btn {
      width: 40px;
    }
    &:last-child {
      border-radius: 0px 20px 0px 0px;
    }
    li {
      list-style: none;
    }
  }
  .effect1config {
    width: 40px;
    height: 40px;
    top: -36px;
    left: -3px;
    position: absolute;
    transform: rotate(179deg);
    fill: -color('theme-layout');
    stroke: -color('theme-layout');
    &.invert {
      transform: rotate(-90deg);
      bottom: -36px;
      top: auto;
    }
  }
  i {
    &.bx {
      font-size: 1.2rem;
      transition: all 0.25s ease;
      color: -color('theme-color');
      &.bxs-moon {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  ul {
    &.options {
      position: absolute;
      top: 0px;
      left: 0px;
      transform: translate(-15px, calc(-100% - 25px));
      background: -color('theme-layout');
      list-style: none;
      padding-left: 0px;
      margin: 0px;
      border-radius: 0px 20px 20px 0px;
      opacity: 0;
      visibility: hidden;
      transition: all 0.25s ease;
      box-shadow: 20px 0px 40px 0px rgba(0, 0, 0, 0.03);
      li {
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px 12px 12px 12px;
        margin: 4px;
        border: 2px solid transparent;
        position: relative;
        &.active {
          background: rgba(0, 0, 0, 0.05);
          border: 2px solid -color('theme-bg2');
        }
        .visible-sidebar-hidden {
          display: none;
        }
      }
    }
  }
}
.config .config-btn:focus > i.bx,
.config .config-btn:hover > i.bx {
  transform: rotate(60deg);
}
.config .config-btn:focus ul.options,
.config .config-btn:hover ul.options {
  opacity: 1;
  visibility: visible;
  transform: translate(0px, calc(-100% - 25px));
}

@media (max-width: 1080px) {
  .config {
    left: 0px;
  }
}
@media (max-width: 600px) {
  .config {
    left: 0px;
    bottom: 0px;
    z-index: 2000;
    .config-btn {
      .effect1config {
        display: none;
      }
      ul {
        &.options {
          transform: translate(-100%, calc(-100% - 45px));
          li {
            padding: 6px;
          }
        }
      }
      &:hover {
        ul {
          &.options {
            transform: translate(0px, calc(-100% - 45px));
          }
        }
      }
      & > .effect1config {
        left: 37px;
      }
    }
  }
}
</style>
