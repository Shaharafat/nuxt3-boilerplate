<script setup lang="ts">
import { NConfigProvider, NGlobalStyle, NMessageProvider } from 'naive-ui'
import { themeOverrides } from './theme.js'
</script>
<template>
  <div>
    <NuxtLayout>
      <n-config-provider :theme-overrides="themeOverrides">
        <n-message-provider placement="top-right">
          <NuxtPage />
        </n-message-provider>
        <n-global-style />
      </n-config-provider>
    </NuxtLayout>
  </div>
</template>
<style lang="scss"></style>
