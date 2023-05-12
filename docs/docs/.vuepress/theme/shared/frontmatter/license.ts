export interface ThemeLicenseHeader {
  /**
   * Header title - accept raw html
   */
  title: string
  /**
   * Header description - accept raw html
   */
  description: string

  buttonText: string
}

export interface ThemeLicenseCard {
  /**
   * Card title - accept raw html
   */
  title: string
  /**
   * Car description - accept raw html
   */
  description: string
  /**
   * open contact mail?
   */
  contact?: boolean | false
  /**
   * button name
   */
  buttonText?: string | 'Start'
}

export type ThemeLicenseTableTr = (string | boolean)[]

export interface ThemeLicenseTable {
  title: string

  thead: string[]

  tbody: ThemeLicenseTableTr[]
}

export interface ThemeLicenseFaq {
  title: string

  /**
   * Accept raw html
   */
  text: string
}

export interface ThemeLicenseCards {
  title: string

  cards: ThemeLicenseCard[]
}

export type ThemeLicenseFrontmatter = {
  header: ThemeLicenseHeader

  cards: ThemeLicenseCards

  table: ThemeLicenseTable

  faqs: ThemeLicenseFaq[]
}
