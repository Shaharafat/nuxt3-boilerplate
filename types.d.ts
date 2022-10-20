declare module 'types' {
  interface PageContent {
    id: number
    meta: Meta
    title: string
    last_published_at: string
    opengraph_image: OpengraphImage
    additional_json_ld: any
    body: Body[]
    menu_image: MenuImage
    menu_description: string
  }

  interface Meta {
    type: string
    detail_url: string
    html_url: string
    slug: string
    show_in_menus: boolean
    seo_title: string
    search_description: string
    first_published_at: string
    alias_of: any
    parent: Parent
  }

  interface Parent {
    id: number
    meta: Meta2
    title: string
  }

  interface Meta2 {
    type: string
    detail_url: string
    html_url: string
  }

  interface OpengraphImage {
    facebook: Facebook
    twitter: Twitter
  }

  interface Facebook {
    src: string
    width: number
    height: number
    alt: string
  }

  interface Twitter {
    src: string
    width: number
    height: number
    alt: string
  }

  interface Body {
    type: string
    value: any
    id: string
  }

  interface MenuImage {
    original: Original
  }

  interface Original {
    src: string
    width: number
    height: number
    alt: string
  }
  // PageData composable return type
  interface PageDataReturnType {
    pageData: Ref<PageContent>
    pageType: string
  }

  d
}

export { PageContent, PageDataReturnType, Body, CompDataType }
