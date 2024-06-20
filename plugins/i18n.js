import { defineNuxtPlugin } from 'nuxt3'; // Upewnij się, że importujesz defineNuxtPlugin z nuxt3
import { createI18n } from 'vue-i18n'; // Import vue-i18n

import en from '../lang/en.json';
import pl from '../lang/pl.json';
import de from '../lang/de.json';

export default defineNuxtPlugin(nuxtApp => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en,
      pl,
      de
    }
  });

  nuxtApp.vueApp.use(i18n); // Użyj i18n w aplikacji Vue
});
