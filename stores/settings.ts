import { defineStore } from 'pinia';

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
			const data = await $fetch('/others/settings');

			if (data) {
				this.settings = data;
			}
		},
	},
});
