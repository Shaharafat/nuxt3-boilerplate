<script setup lang="ts">
import { NConfigProvider, NGlobalStyle, NMessageProvider } from 'naive-ui'
import { themeOverrides } from './theme.js'

const customBreakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600,
  xxxxl: 1900,
  ultraXl: 2100,
}
</script>
<template>
  <div>
    <NuxtLayout>
      <n-config-provider
        :theme-overrides="themeOverrides"
        :breakpoints="customBreakpoints"
        inline-theme-disabled
      >
        <n-message-provider placement="top-right">
          <NuxtPage />
        </n-message-provider>
        <n-global-style />
      </n-config-provider>
    </NuxtLayout>
  </div>
</template>
<style lang="scss"></style>
