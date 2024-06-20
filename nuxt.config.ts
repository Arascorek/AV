
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'pl', name: 'Polski', iso: 'pl-PL', file: 'pl.json' },
      { code: 'de', name: 'Deutsch', iso: 'de-DE', file: 'de.json' }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
  },
  googleFonts: {
    families: {
      Oswald: true,
    },
  },
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    loaders: {
      scss: {
        implementation: require('sass')
      }
    }
  },
  plugins: ['~/plugins/i18n.js']
})
