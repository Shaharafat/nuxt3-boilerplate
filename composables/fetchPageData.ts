import { PageContent } from 'types'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export const usePageDataFetch = async (
  route: RouteLocationNormalizedLoaded
) => {
  const { config } = useRuntimeConfig()

  const { data, error } = await useAsyncData<PageContent | null>(
    'pageData',
    () =>
      $fetch(
        `/api/v2/pages/find?format=json&html_path=${route.fullPath}`,
        config
      )
  )

  if (data) {
    return usePageData(data)
  }
  if (error) {
    navigateTo('/404.vue')
  }
}
