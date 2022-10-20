<script setup lang="ts">
import gsap from 'gsap'
import {
  NGrid,
  NGridItem as NGi,
  NH1,
  useMessage,
  useThemeVars,
} from 'naive-ui'
import type { PageContent } from 'types'
import Homepage from '~~/components/pages/Homepage.vue'
import WGImage from '~~/components/ui/WGImage.vue'

const { config } = useFetchConfig()
const route = useRoute()
const message = useMessage()
const theme = useThemeVars()

const { data, error } = await useAsyncData<PageContent | null>('pageData', () =>
  $fetch(`/api/v2/pages/find?format=json&html_path=${route.fullPath}`, config)
)

const { pageData, pageType } = usePageData(data)

const createMessage = () => {
  message.warning('This is a warning')
}

const components: any = {
  HomePage: Homepage,
}
function animation() {
  const tl = gsap.timeline({})
  const header = document.querySelector('[data-anim="page-header"]')
  tl.fromTo(
    header,
    {
      opacity: 0,
    },
    { opacity: 1, duration: 1 }
  )
}
onMounted(() => {
  animation()
})
</script>

<template>
  <div class="custom-container">
    <section class="section-padding">
      <NH1
        style="font-family: roboto"
        class="section-title flex justify-center"
        data-anim="page-header"
      >
        Yeeeyyyy! We are using Nuxt 3
      </NH1>
      <n-grid x-gap="12" y-gap="20" :cols="4">
        <n-gi>
          <div class="light-green" />
        </n-gi>
        <n-gi>
          <div class="green" />
        </n-gi>
        <n-gi>
          <div class="light-green" />
        </n-gi>
        <n-gi>
          <div class="green" />
        </n-gi>

        <n-gi>
          <div class="green" />
        </n-gi>
        <n-gi>
          <div class="green" />
        </n-gi>
        <n-gi>
          <div class="green" />
        </n-gi>
        <n-gi>
          <div class="green" />
        </n-gi>
      </n-grid>

      <WGImage />
    </section>

    <component
      :is="components[pageType]"
      :key="route.fullPath"
      :page-data="pageData"
    />
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

.section-title {
  font-size: 3rem;
  font-weight: $bold;
}

.test {
  & :deep(input) {
    font-size: 2rem;
  }
}

[data-anim='page-header'] {
  opacity: 0;
}
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
