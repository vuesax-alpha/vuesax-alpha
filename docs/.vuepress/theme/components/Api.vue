<template>
  <div
    v-if="
      pageFrontmatter.PROPS || pageFrontmatter.SLOTS || pageFrontmatter.EVENTS
    "
    id="vs-api"
    class="con-api"
  >
    <div class="content-api">
      <div v-for="(table, key) in getTables" :key="key" class="content-table">
        <template v-if="table">
          <header>
            <h3>{{ key }}</h3>
          </header>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th class="val">Values</th>
                <th class="des">Description</th>
                <th>default</th>
                <th class="ex">Example</th>
                <th class="bugx">
                  <span> More </span>
                </th>
              </tr>
            </thead>
            <tbody
              v-for="(tr, trKey) in table"
              :id="`api-${tr.name}`"
              :key="trKey"
            >
              <tr>
                <td>
                  <router-link
                    v-if="tr.link && !isExternal(tr.link)"
                    :to="tr.link"
                  >
                    {{ tr.name }}<i class="bx bx-link" />
                  </router-link>

                  <a
                    v-else-if="tr.link && isExternal(tr.link)"
                    target="_blank"
                    :href="tr.link"
                  >
                    {{ tr.name }} <i class="bx bx-link-external" />
                  </a>

                  <span v-else>
                    {{ tr.name }}
                  </span>

                  <Badge
                    v-if="tr.state"
                    style="margin-left: 6px"
                    :text="tr.state.text"
                    :type="tr.state.type"
                  />
                </td>
                <td>{{ tr.type }}</td>
                <td class="val" v-html="getValues(tr.values)" />
                <td class="des" v-html="tr.description" />
                <td>{{ tr.default }}</td>
                <td class="ex">
                  <a v-if="tr.usage" :href="tr.usage" class="btn-usage">
                    Usage <i class="bx bx-code-block" />
                  </a>
                  <template v-else />
                  <a
                    v-if="tr.code"
                    :href="`#vs-api-${tr.name}`"
                    class="btn-toggle-code"
                    @click="toggleCode($event, tr)"
                  >
                    <span class="open">Open <i class="bx bx-code-alt" /></span>
                    <span class="close">Close <i class="bx bx-x" /></span>
                  </a>
                  <template v-else />
                </td>

                <td class="bugx">
                  <a
                    arget="_blank"
                    :href="`https://github.com/vuesax-alpha/vuesax-alpha/issues/new?title=[${pageData.title}] prop 
                    (${tr.name}) - Your Bug Name&amp;body=**Steps to Reproduce**%0A1. Do something%0A2. Do something else.%0A3. Do one last thing.%0A%0A**Expected**%0AThe ${tr.name} should do this%0A%0A**Result**%0AThe ${tr.name} does not do this%0A%0A**Testcase**%0A(fork this to get started)%0Ahttp://jsfiddle.net/example-bug/1/`"
                  >
                    <i class="bx bx-bug" />
                  </a>

                  <a
                    target="_blank"
                    :href="`https://github.com/vuesax-alpha/vuesax-alpha/`"
                  >
                    <i class="bx bx-terminal" />
                  </a>
                </td>
              </tr>
              <tr v-if="tr.code" class="tr-code">
                <td
                  :class="{ copied }"
                  colspan="7"
                  @click="copy(tr.code)"
                  v-html="getCode(tr.code)"
                />
              </tr>
              <template v-else />
            </tbody>
          </table>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { useRoute } from 'vue-router'
import prism from 'prismjs'
import { useClipboard } from '@vueuse/core'

import { isExternal } from '../util'
import Badge from '../global-components/Badge.vue'
import type {
  ThemeNormalApiFrontmatter,
  ThemeNormalPropsFrontmatter,
} from '../shared/frontmatter/normal'

type Tables = {
  PROPS?: ThemeNormalPropsFrontmatter
  SLOTS?: ThemeNormalPropsFrontmatter
  events?: ThemeNormalPropsFrontmatter
}

const route = useRoute()
const pageData = usePageData()
const pageFrontmatter = usePageFrontmatter<ThemeNormalApiFrontmatter>()

const { copied, copy } = useClipboard({ legacy: true })

const getTables = computed((): Tables => {
  return {
    PROPS: pageFrontmatter.value.PROPS,
    SLOTS: pageFrontmatter.value.SLOTS,
    events: pageFrontmatter.value.EVENTS,
  }
})

onMounted(() => {
  document.addEventListener('scroll', () => {
    const pageYOffset = Number(window.pageYOffset)
    const tables = document.querySelectorAll(
      '.content-api table'
    ) as unknown as HTMLElement[] | null
    tables?.forEach((table: HTMLElement, index: number) => {
      if (
        pageYOffset + 52 >= table.offsetTop &&
        pageYOffset + 100 < table.offsetTop + table.offsetHeight
      ) {
        const clone: Element = table.cloneNode(true) as unknown as Element
        const tbodys = clone.querySelectorAll('tbody')
        tbodys.forEach((tbody) => {
          clone.removeChild(tbody)
        })

        const ths = table.querySelectorAll('thead th') as unknown as
          | HTMLElement[]
          | null
        const thsNew = clone.querySelectorAll('thead th') as unknown as
          | HTMLElement[]
          | null

        ths?.forEach((th, index) => {
          thsNew && thsNew[index].setAttribute('width', `${th.offsetWidth}`)
        })

        clone.classList.add(`table-${index}`)

        if (!document.querySelector(`.header-page .table-${index}`)) {
          if (
            document.querySelector(`.header-page table:not(.table-${index})`)
          ) {
            const header = document.querySelector(
              '.header-page .header__content'
            )
            const tableRemove = document.querySelector(
              `.header-page table:not(.table-${index})`
            )
            tableRemove && header?.removeChild(tableRemove)
          }
          document
            .querySelector('.header-page .header__content')
            ?.appendChild(clone)
          document
            .querySelector('.header-page .header__content')
            ?.classList.add('con-table')
        }
      } else {
        const header = document.querySelector('.header-page .header__content')
        if (document.querySelector(`.header-page .table-${index}`)) {
          const tableRemove = header?.querySelector(`.table-${index}`)
          tableRemove && header?.removeChild(tableRemove)
          document
            .querySelector('.header-page .header__content')
            ?.classList.remove('con-table')
        }
      }

      const header = document.querySelector('.header-page .header__content')
      if (document.querySelector(`.con-header table`)) {
        const tableRemove = header?.querySelector(`.table-${index}`)
        tableRemove && header?.removeChild(tableRemove)
        document
          .querySelector('.header-page .header__content')
          ?.classList.remove('con-table')
      }
    })
    // window.pageYOffset
  })
})

watch(
  () => route.path,
  () => {
    const header = document.querySelector('.header-page .header__content')
    const _table = header?.querySelector('table')
    _table && header?.removeChild(_table)
    document
      .querySelector('.header-page .header__content')
      ?.classList.remove('con-table')
  }
)

const getValues = (values: string) => {
  if (!values) return
  const arrayValues = values.split(',')
  let spanValues = ''
  arrayValues.forEach((item) => {
    spanValues += `<span class='value-span'>${item}</span>`
  })
  return spanValues
}
const toggleCode = (evt: MouseEvent, tr: ThemeNormalPropsFrontmatter) => {
  const trParent = (evt.target as HTMLElement).closest('tr')
  const nextCode = trParent?.nextElementSibling

  if (!nextCode) return

  const preElement = nextCode.querySelector('pre')
  if (nextCode.classList.contains('open')) {
    ;(evt.target as HTMLElement).setAttribute(
      'href',
      `#vs-api-close-${tr.name}`
    )
    nextCode.classList.remove('open')
    ;(evt.target as HTMLElement).classList.remove('open-btn')

    if (preElement) {
      preElement.style.padding = '0px 20px'
      preElement.style.maxHeight = '0px'
    }
  } else {
    ;(evt.target as HTMLElement).setAttribute('href', `#vs-api-${tr.name}`)
    ;(evt.target as HTMLElement).classList.add('open-btn')
    nextCode.classList.add('open')
    // console.dir()
    if (preElement) {
      preElement.style.padding = '20px'
      preElement.style.maxHeight = `${preElement.scrollHeight + 40}px`
    }
  }
}
const wrap = (code: string, lang: string) => {
  return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`
}
const getCode = (str: string) => {
  const code = prism.highlight(str, prism.languages['html'], 'html')
  return wrap(code, 'html')
}
</script>

<style lang="scss">
@import '../styles/use';
.content-table {
  &:last-child {
    table {
      margin-bottom: 0px;
    }
  }
}
.bugx {
  font-size: 10px !important;
  padding: 5px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    margin-top: 3px;
    border: 1px dashed rgba(0, 0, 0, 0.04);
    border-radius: 50%;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: all 0s ease !important;
    width: 30px;
    height: 30px;
    &:first-child {
      margin-top: 0px;
      &:hover {
        background: rgba(255, 71, 87, 0.15) !important;
        border: 2px solid rgba(255, 71, 87, 0);
        box-icon {
          opacity: 1;
          fill: #ff4757 !important;
        }
      }
    }
    &:nth-child(2):hover {
      background: rgba(31, 116, 255, 0.15) !important;
      border: 2px solid rgba(31, 116, 255, 0);
      box-icon {
        fill: #1f74ff !important;
        opacity: 1;
      }
    }
    box-icon {
      margin: 0px !important;
      font-size: 0.8rem !important;
      opacity: 0.4;
    }
  }
}
.btn-usage {
  border: 0px;
  padding: 4px 9px;
  background: transparent;
  border: 1px dashed -color('theme-bg2');
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 0.7rem;
  color: inherit;
  margin: 3px 0px;
  box-icon {
    margin-left: 5px;
    pointer-events: none;
    opacity: 0.4;
  }
  &:hover {
    background: -color('theme-bg2');
    box-icon {
      opacity: 1;
    }
  }
}
.btn-toggle-code {
  border: 0px;
  padding: 4px 9px;
  background: transparent;
  border: 1px dashed -color('theme-bg2');
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: inherit;
  margin: 3px 0px;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  .open {
    position: relative;
    pointer-events: none;
  }
  .close {
    display: none;
    pointer-events: none;
  }
  box-icon {
    margin-left: 6px;
    pointer-events: none;
    font-size: 0.8rem;
    opacity: 0.4;
  }
  &.open-btn {
    color: -color('theme-text') !important;
    background: -color('theme-bg2');
    border: 1px solid -color('theme-bg2');
    .close {
      position: relative;
      display: flex;
    }
    .open {
      display: none;
    }
  }
  &:not(.open-btn):hover {
    background: -color('theme-bg2');
    box-icon {
      opacity: 1;
    }
  }
}
.tr-code {
  cursor: pointer;
  td {
    padding: 0px !important;
    border-bottom: 0px;
    border-left: 0px !important;
    transition: all 0.25s ease;
    overflow: hidden;
    border: 0px !important;
    margin: 0px !important;
    &:nth-child(1) {
      border-left: 0px !important;
    }
    pre {
      max-height: 0px;
      overflow: hidden;
      padding: 0px 20px;
      transition: all 0.25s ease;
    }
    &:after {
      content: 'Copied to Clipboard';
      top: 0px;
      left: 50%;
      transform: translate(-50%, -100%);
      position: absolute;
      padding: 6px;
      background: #46c93a;
      color: #fff;
      font-size: 0.65rem;
      font-weight: normal;
      transition: all 0.25s ease;
      border-radius: 0px 0px 10px 10px;
    }
    &.copied {
      background: rgba(70, 201, 58, 0.1);
      &:after {
        transform: translate(-50%, 0%);
      }
    }
    pre[class*='language-'] {
      margin: 0px;
    }
  }
  &:active {
    opacity: 0.7;
  }
  &:hover {
    code[class*='language-'] {
      background: -color('accent-color', 0.1);
    }
  }
  &.open {
    display: table-row;
  }
  tr {
    border: 0px !important;
  }
}
.tr-code td.copied code,
.tr-code td.copied pre {
  background: transparent !important;
}
.tr-code code,
.tr-code pre {
  pointer-events: none;
  font-size: 0.8rem;
}
.con-api {
  max-width: 900px;
  margin: auto;
  padding: 1rem 10px;
  padding-top: 0px;
  h2 {
    padding: 0px 20px;
    padding-top: 40px;
    padding-bottom: 20px;
    transition: all 0.25s ease;
    border-bottom: 0px;
    &:hover {
      padding-left: 40px;
      a {
        opacity: 1;
      }
    }
    a {
      font-size: 0.85em;
      float: left;
      margin-left: -0.87em;
      padding-right: 0.23em;
      margin-top: 0.125em;
      opacity: 0;
      transition: all 0.2s ease;
      outline: none;
      text-decoration: none;
      font-weight: 600;
      color: -color('theme-color');
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .content-api {
    padding: 10px;
    background: -color('theme-layout');
    border-radius: 20px;
    overflow: hidden;
    .content-table {
      overflow: auto;
    }
    box-icon {
      max-height: 16px;
      max-width: 16px;
    }
    h3 {
      text-transform: capitalize;
      margin-left: 20px;
      &:first-child {
        margin-top: 0px;
      }
    }
    table {
      border-radius: 15px;
      border-bottom: 0px;
      border-bottom: 1px solid -color('theme-bg2');
      height: auto;
      width: 100% !important;
      border-collapse: separate;
      border-spacing: 0;
      &.fixed-thead {
        thead {
          position: fixed;
          z-index: 8000;
          top: 0px;
        }
      }
      tbody {
        &:nth-child(2) {
          td {
            border-top: 0px !important;
          }
        }
      }
      tr {
        border: 0px;
      }
      td {
        padding: 10px;
        &:nth-child(1) {
          border-left: 1px solid -color('theme-bg2');
        }
        &:nth-child(2) {
          color: #e2777a;
        }
        &:nth-child(3) {
          padding: 4px;
        }
        &:nth-child(4) {
          font-size: 0.75rem;
        }
        &:nth-child(5) {
          color: #7ec699;
          border-right: 1px dashed -color('theme-bg2') !important;
        }
        &:nth-child(6) {
          padding: 4px;
          border-left: 0px dashed -color('theme-bg2') !important;
          border-right: 0px solid rgba(0, 0, 0, 0);
          border-top: 1px dashed -color('theme-bg2') !important;
        }
        &:nth-child(7) {
          border-left: 0px solid rgba(0, 0, 0, 0);
          border-top: 1px dashed -color('theme-bg2') !important;
          border-right: 1px solid -color('theme-bg2') !important;
        }
      }
      th {
        background: -color('theme-bg');
        border: 0px !important;
        font-weight: normal;
        &:nth-child(6) {
          font-size: 0.7rem !important;
          background: -color('theme-bg2');
        }
        &:nth-child(7) {
          font-size: 0.7rem !important;
          background: -color('theme-bg2');
        }
      }
    }
    .h2 {
      border: 0px;
      transition: all 0.25s ease;
      margin: 0px;
      a {
        opacity: 0;
      }
      &:hover {
        padding-left: 20px;
        a {
          opacity: 1;
        }
      }
    }
  }
}
.con-api .content-api table td,
.con-api .content-api table th {
  font-size: 0.8rem;
  border-left: 1px solid -color('theme-bg2');
  border-top: 1px solid -color('theme-bg2');
  border-right: 0px solid -color('theme-bg2');
  border-bottom: 0px solid -color('theme-bg2');
  position: relative;
}
.con-api .content-api table td:last-child,
.con-api .content-api table th:last-child {
  border-right: 0px;
}
.con-api .content-api table td > span.value-span,
.con-api .content-api table th > span.value-span {
  border: 1px solid -color('theme-bg2');
  margin: 2px;
  border-radius: 5px;
  padding: 1px 3px;
  display: block;
  float: left;
  font-size: 0.65rem;
}
.con-api .content-api table td > span.value-span:hover,
.con-api .content-api table th > span.value-span:hover {
  border: 1px solid -color('theme-bg2');
}
.con-api .content-api table td > a:not(.btn-toggle-code):not(.btn-usage),
.con-api .content-api table th > a:not(.btn-toggle-code):not(.btn-usage) {
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.25s ease;
}
.con-api .content-api table td > a:not(.btn-toggle-code):not(.btn-usage):hover,
.con-api .content-api table th > a:not(.btn-toggle-code):not(.btn-usage):hover {
  opacity: 0.7;
}
.con-api
  .content-api
  table
  td
  > a:not(.btn-toggle-code):not(.btn-usage)
  box-icon,
.con-api
  .content-api
  table
  th
  > a:not(.btn-toggle-code):not(.btn-usage)
  box-icon {
  transition: all 0.25s ease;
  font-size: 0.7rem;
}

// @media (max-width: 1180px)
//   .content-api
//     overflow hidden
//     position relative
//   .con-api
//     overflow hidden
//     position relative
//     table
//       pre
//         width 100%
//       .bugx,.val
//         display none
@media (max-width: 1080px) {
  .con-api {
    padding: 1rem 10px !important;
    .content-api {
      .content-table {
        overflow: auto;
      }
    }
    h2 {
      padding-bottom: 0px;
    }
  }
}

@media (max-width: 800px) {
  .con-api {
    table {
      .ex {
        display: none;
      }
    }
    .tr-code {
      display: none !important;
    }
  }
  .con-api table rd,
  .con-api table td,
  .con-api table th {
    font-size: 0.65rem !important;
    padding: 5px !important;
  }
}
</style>
