<script setup lang="ts">
import { NButton, NCard, NH1, useMessage, useThemeVars } from 'naive-ui'
import HeroSlider from '~~/components/blocks/HeroSlider.vue'

const { config } = useFetchConfig()
const route = useRoute()
const message = useMessage()
const theme = useThemeVars()

const { pageData, pageType } = await usePageDataFetch(route)
// const { data, error } = await useAsyncData<PageContent | null>(
//   'pageData',
//   () => {
//     console.log('fetching')
//     return $fetch(
//       `/api/v2/pages/find?format=json&html_path=${route.fullPath}`,
//       config
//     )
//   }
// )
// const pageData = data
// const pageType = data.value?.meta?.type?.split('.')[1]

const createMessage = () => {
  message.warning('This is a warning')
}

const components: any = {
  hero_slider: HeroSlider,
}
onMounted(() => {})
</script>

<template>
  <div>
    <n-h1 style="color: theme.primaryColor">roboto</n-h1>
    <n-button type="primary" @click="createMessage">Primary Button</n-button>
    <component
      :is="components[data.type]"
      v-for="(data, idx) in pageData?.body"
      :key="idx"
      :comp-data="data"
    />

    <!-- <component
			:is="pageType"
			v-if="pageType"
			:key="route.fullPath"
			:page-data="pageData.body"
		/> -->
    <n-card title="Card" :header-style="{ backgroundColor: theme.baseColor }">
      Card Content
    </n-card>
    <!-- <n-message-provider placement="top-right">
      this is a simple message
    </n-message-provider> -->
  </div>
</template>
<style scoped lang="scss">
h1 {
  background: $bg-color;
}

.test {
  // background: red;
  & :deep(input) {
    font-size: 2rem;
  }
}
</style>
