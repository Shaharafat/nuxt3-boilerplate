import { PageContent, PageDataReturnType } from 'types'
import { Ref } from 'vue'
export const usePageData = (data: Ref<PageContent>): PageDataReturnType => {
  return {
    pageData: data,
    pageType: data.value?.meta?.type?.split('.')[1],
  }
}
