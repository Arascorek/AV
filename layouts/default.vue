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
    lang: 'de',
  },
  meta: [
    {
      name: 'keywords',
      content: mainMetaTags.keywords,
    },
  ],
});
</script>
