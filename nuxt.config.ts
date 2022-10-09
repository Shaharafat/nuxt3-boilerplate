export default defineNuxtConfig({
	app: {
		baseURL: '',
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

	runtimeConfig: {
		// app: {
		// },
		public: {
			baseURL: '',
		},
	},
});
