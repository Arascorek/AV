<template>
  <SharedNav />
  <div class="bg-black">
    <main>
      <slot />
    </main>
    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
import SharedNav from '~/components/shared/Nav.vue';
import SharedFooter from '~/components/shared/Footer.vue';
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
    lang: 'en',  // Dodanie wartości dla lang
  },
  meta: [
    {
      name: 'keywords',
      content: mainMetaTags.keywords,
    },
  ],
});
</script>