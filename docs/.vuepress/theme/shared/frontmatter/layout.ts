import type { PageFrontmatter } from 'vuepress-vite'

export interface LayoutFrontmatter extends PageFrontmatter {
  navbar?: boolean
  license?: boolean
  branding?: boolean
  docsHome?: boolean
}
