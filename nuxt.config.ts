import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  // Twoja konfiguracja Nuxt.js tutaj
  modules: [
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Konfiguracja i18n
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'pl', iso: 'pl-PL', file: 'pl.json' },
      { code: 'de', iso: 'de-DE', file: 'de.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang'
  },

  // Konfiguracja Google Fonts
  googleFonts: {
    families: {
      Oswald: true,
    }
  },

  // Dodatkowe style CSS
  css: ['~/assets/css/main.scss'],

  // Konfiguracja PostCSS
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  // Lista pluginów
  plugins: ['~/plugins/i18n.js']
});
