<script setup lang="ts">
import { PageContent } from 'types'
import { Ref } from 'vue'
import HeroSlider from '~/components/blocks/HeroSlider.vue'
interface pageProps {
  pageData: Ref<PageContent>
  pageType: string
}

const { pageData, pageType } = defineProps<pageProps>()
const components: any = {
  hero_slider: HeroSlider,
  stats: HeroSlider,
}
</script>
<template>
  <section>HomnePage</section>
  <component
    :is="components[data.type]"
    v-for="(data, idx) in pageData?.body"
    :key="idx"
    :comp-data="data"
  />
</template>
<style scoped lang="scss">
</style>
