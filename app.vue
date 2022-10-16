<script setup lang="ts">
import {
  GlobalThemeOverrides,
  NConfigProvider,
  NGlobalStyle,
  NMessageProvider,
} from 'naive-ui'
interface own extends GlobalThemeOverrides {
  btnColor: 'yellow'
}
const themeOverrides: own = {
  btnColor: 'yellow',

  common: {
    primaryColor: 'red',
    primaryColorHover: 'red',
  },
  Button: {
    textColor: 'yellow',
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: 'blue',
      },
    },
  },
}
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
