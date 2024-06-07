<template>
  <div class="text-white">
    <h1
      class="text-center text-4xl mb-10 uppercase font-bold pt-20 lg:pt-32 2xl:text-7xl"
    >
      {{ socialsMainData.title }}
    </h1>
    <div
      class="bg-transparent z-10 min-h-screen flex gap-5 flex-wrap justify-center items-center container mx-auto"
    >
      <SocialsCard
        v-for="social in socialsData"
        :key="social.name"
        :name="social.name"
        :role="social.role"
        :image="social.image"
        :dcLink="social.dcLink"
        :twitchLink="social.twitchLink"
        :instagramLink="social.instagramLink"
        :tiktokLink="social.tiktokLink"
        :bgImage="social.bgImage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { socialsMainData, socialsData } from '~/data/socials';
import { pageTitle, pageKeyWords } from '~/data/main';
useSeoMeta({
  title: pageTitle.socials,
});
useHead({
  meta: [{ name: 'keywords', content: pageKeyWords.socials }],
});
</script>
