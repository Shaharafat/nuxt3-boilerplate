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
    </section>
    <!-- <section class="section-padding-bottom" style="background: theme.baseColor">
      <n-h1
        style="color: theme.primaryColor; font-family: roboto"
        class="custom-container"
        >Yeyyyy! We are using Nuxt 3</n-h1
      >
    </section>
    <n-button type="primary" @click="createMessage">Primary Button</n-button>

    <n-card title="Card" :header-style="{ backgroundColor: theme.baseColor }">
      Card Content
    </n-card> -->
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
