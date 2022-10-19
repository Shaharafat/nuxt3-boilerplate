<script setup lang="ts">
import { NButton, NCard, NH1, useMessage, useThemeVars } from 'naive-ui'
import type { PageContent } from 'types'
import HeroSlider from '~~/components/blocks/HeroSlider.vue'

const { config } = useFetchConfig()
const route = useRoute()
const message = useMessage()
const theme = useThemeVars()

const { data, error } = await useAsyncData<PageContent | null>('pageData', () =>
  $fetch(`/api/v2/pages/find?format=json&html_path=${route.fullPath}`, config)
)
if (data) {
  console.log(data)
}
const pageData = data

const pageType = data.value?.meta?.type?.split('.')[1]

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
    <section class="section-padding-bottom custom-container">
      <n-h1 style="color: theme.primaryColor; font-family: roboto"
        >Yeyyyy! We are using Nuxt 3</n-h1
      >
    </section>
    <n-button type="primary" @click="createMessage">Primary Button</n-button>

    <n-card title="Card" :header-style="{ backgroundColor: theme.baseColor }">
      Card Content
    </n-card>
    <!-- <component
      :is="components[data.type]"
      v-for="(data, idx) in pageData?.body"
      :key="idx"
      :comp-data="data"
    /> -->

    <!-- <component
			:is="pageType"
			v-if="pageType"
			:key="route.fullPath"
			:page-data="pageData.body"
		/> -->
    <!-- <n-message-provider placement="top-right">
      this is a simple message
    </n-message-provider> -->
  </div>
</template>
<style scoped lang="scss">
h1 {
  background: red;
  @include media-breakpoint-up($xxxl) {
    background: yellow;
  }

  @include media-breakpoint-up($xxxxl) {
    background: gray;
  }
}

.test {
  & :deep(input) {
    font-size: 2rem;
  }
}
</style>
