<template>
  <div>
    <SharedNav />
    <LanguageSwitcher />
    <div class="bg-black">
      <main>
        <slot />
      </main>
      <SharedFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import SharedNav from '~/components/shared/Nav.vue';
import SharedFooter from '~/components/shared/Footer.vue';
import LanguageSwitcher from '~/components/LanguageSwitcher.vue';
import { mainMetaTags } from '../data/main';

useSeoMeta({
  title: mainMetaTags.title,
  ogTitle: mainMetaTags.ogTitle,
  description: mainMetaTags.description,
  ogDescription: mainMetaTags.ogDescription,
  ogImage: mainMetaTags.ogImage,
});

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'keywords',
      content: mainMetaTags.keywords,
    },
  ],
});
</script>
