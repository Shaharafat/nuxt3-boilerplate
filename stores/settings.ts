import { defineStore } from 'pinia'
import { useFetchConfig } from '../composables/fetchConfig'

export const useSettingsStore = defineStore({
  id: 'settings',
  state: () => {
    return {
      settings: {},
    }
  },

  getters: {
    getAllSettings: (state) => state.settings,
  },

  actions: {
    async loadSettings() {
      const config = useFetchConfig()
      await $fetch('/api/v2/others/settings', config)
        .then((data) => {
          this.settings = data
        })
        .catch((error) => {
          console.log('ERROR: Loading Settings')
        })
    },
  },
})
