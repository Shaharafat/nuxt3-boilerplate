<script setup lang="ts">
// import { useCompSharedData } from '~~/composables/compShared'

const { compData, host } = useCompSharedData()
// code goes here
</script>
<template>
  <section>
    <h1>HeroSlider</h1>
    <p>{{ compData }}</p>
  </section>
</template>
<style scoped lang="scss">
/* scoped styles code goes here */
</style>
