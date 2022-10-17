import type { PageContent } from 'types'
import { Ref } from 'vue'
export const usePageData = (data: Ref<PageContent>) => {
  return {
    pageData: data,
    pageType: data.value?.meta?.type?.split('.')[1],
  }
}
