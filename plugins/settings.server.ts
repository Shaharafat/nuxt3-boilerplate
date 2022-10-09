import { defineNuxtPlugin } from '#app';

import { useSettingsStore } from 'stores/settings';

export default defineNuxtPlugin(async (nuxtApp) => {
	if (process.server) {
		const settings = useSettingsStore();
		await settings.loadSettings();
		console.log(settings.getAllSettings);
	}
});
