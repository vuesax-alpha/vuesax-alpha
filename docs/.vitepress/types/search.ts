export declare type SearchData = {
  [keyword: string]: SearchDataOption[]
}

export declare type SearchDataOption = {
  title: string
  path: string
  headers?: SearchDataHeaderOption[]
}

export declare type SearchDataHeaderOption = {
  title: string
  slug: string
}
