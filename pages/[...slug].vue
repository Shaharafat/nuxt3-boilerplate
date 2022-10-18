<script setup lang="ts">
import HeroSlider from 'blocks/HeroSlider.vue'
import { NButton, NCard, NH1, useMessage, useThemeVars } from 'naive-ui'

const route = useRoute()
const message = useMessage()

const { pageData, pageType } = await usePageDataFetch(route)

const createMessage = () => {
  message.warning('This is a warning')
}

const theme = useThemeVars()

const components: any = {
  hero_slider: HeroSlider,
}
onMounted(() => {
  // const head = document.querySelector('h1')
  // const tl = gsap.timeline()
  // tl.to(head, {
  //   y: 100,
  // })
})
</script>

<template>
  <div>
    <n-h1 style="color: theme.primaryColor">roboto</n-h1>
    <n-button type="primary" @click="createMessage">Primary Button</n-button>
    <component
      :is="components[data.type]"
      v-for="(data, idx) in pageData?.body"
      :key="idx"
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
  // font-family: roboto;
  // color: red;
  background: $bg-color;
}

.test {
  // background: red;
  & :deep(input) {
    font-size: 2rem;
  }
}
</style>
