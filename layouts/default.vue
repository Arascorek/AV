<template>
  <div class="bg-black">
    <SharedNav />
    <slot />
    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'de',
  },
});
useSeoMeta({
  title: 'PlanB Roleplay',
  ogTitle: 'PlanB Roleplay',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
});
</script>
