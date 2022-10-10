import { defineStore } from 'pinia';
import { useFetchConfig } from '../composables/fetchConfig';
// const config = useRuntimeConfig();

export const useSettingsStore = defineStore({
	id: 'settings',
	state: () => {
		return {
			settings: {},
		};
	},

	getters: {
		getAllSettings: (state) => state.settings,
	},

	actions: {
		async loadSettings() {
			const config = useFetchConfig();
			const data = await $fetch('/api/v2/others/settings', config);

			if (data) {
				this.settings = data;
			}
		},
	},
});
