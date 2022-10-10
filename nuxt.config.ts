export default defineNuxtConfig({
	// app: {
	// 	baseURL: '',
	// },
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
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASEURL || 'http://localhost:8000',
		},
	},
	// publicRuntimeConfig: {
	// 	host:
	// 		process.env.VUE_APP_STATIC_HOST ||
	// 		process.env.VUE_APP_DEVBROWSERHOST ||
	// 		process.env.VUE_APP_DEVHOST ||
	// 		'http://localhost:8000',
	// 	siteUrl: process.env.SITE_URL || 'http://localhost:3000',
	// 	baseURL: process.env.VUE_APP_DEVHOST,
	// },
});
