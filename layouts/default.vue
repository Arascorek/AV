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
