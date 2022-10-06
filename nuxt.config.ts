export default defineNuxtConfig({
	app: {
		// baseURL: process.env.NUXT_BASE_URL || 'localhost:3000',
	},
	modules: ['@pinia/nuxt'],
	vite: {
		css: {
			preprocessorOptions: {
				// This SCSS option below will make available SCSS codes globally.
				scss: {
					additionalData:
						'@use "@/assets/scss/_variables.scss" as *; @use "@/assets/scss/main.scss" as *; @use "@/assets/scss/_mixins.scss" as *;',
				},
			},
		},
	},
});
