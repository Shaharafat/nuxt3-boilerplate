<script setup lang="ts">
import WGImage from '~~/components/ui/WGImage.vue'
interface CompProps {
  compData: any
  id: string
}
const { compData, id } = defineProps<CompProps>()
</script>
<template>
  <h1>HeroSlider</h1>
  <!-- {{ compData }} -->
  <div v-for="(slide, idx) in compData.value.slides" :key="idx" class="">
    <WGImage :image="slide.image" />
  </div>
</template>
<style scoped lang="scss"></style>
