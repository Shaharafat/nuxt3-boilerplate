import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.server) {
    // const settings = useSettingsStore()
    // await settings.loadSettings()
    // console.log(settings.getAllSettings)
  }
})
