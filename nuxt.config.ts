// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		// baseURL: process.env.NUXT_BASE_URL || 'localhost:3000',
	},
	modules: [],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "@/assets/scss/_variables.scss" as *; @use "@/assets/scss/main.scss" as *; @use "@/assets/scss/_mixins.scss" as *;',
				},
			},
		},
	},
});
