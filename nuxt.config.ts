import { fileURLToPath } from 'node:url'
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts'],
  alias: {
    utils: fileURLToPath(new URL('./utils', import.meta.url)),
    store: fileURLToPath(new URL('./stores', import.meta.url)),
    blocks: fileURLToPath(new URL('./components/blocks', import.meta.url)),
    ui: fileURLToPath(new URL('./components/ui', import.meta.url)),
    pages: fileURLToPath(new URL('./components/pages', import.meta.url)),
  },

  components: false,
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        // This SCSS option below will make available SCSS codes globally.
        scss: {
          additionalData:
            '@use "@/assets/scss/_variables.scss" as *;  @use "@/assets/scss/_mixins.scss" as *;',
        },
      },
    },
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : [],
    },
  },
  runtimeConfig: {
    public: {
      apiBase:
        process.env.VUE_APP_STATIC_HOST ||
        process.env.VUE_APP_DEVBROWSERHOST ||
        process.env.VUE_APP_DEVHOST ||
        'http://localhost:8000',

      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || null,
      FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID || null,
    },
  },

  // SHARED BUILD CONFIGURATION
  build: {
    /*
		If you want to transpile specific dependencies with Babel, 
		you can add them here. Each item in transpile can be a package name, 
		a function, a string or regex object matching the dependency's file name.
		*/
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer',
            'gsap',
          ]
        : ['@juggle/resize-observer', 'gsap'],
  },

  // ANCHOR THIRD PARTH MODULE CONFIGURATION
  // Google Fonts
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
})
