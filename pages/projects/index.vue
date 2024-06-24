<template>
  <div class="lg:pt-20">
    <RegelwerkImage />
    <div class="px-4 font-roboto pb-10 z-10 relative pt-5">
      <SharedHero
        :name="mainRegelwerkData.name"
        :title="mainRegelwerkData.role"
        :desc-title="mainRegelwerkData.title"
        :desc="mainRegelwerkData.titleDesc"
        :image="mainRegelwerkData.authorImage"
      />
      <SharedBanner :title="mainRegelwerkData.bannerWhiteText" :desc="mainRegelwerkData.bannerYellowText" />
    </div>
    <RegelwerkTabs class="z-10 relative min-h-screen" />
  </div>
</template>

<script setup lang="ts">
import { mainRegelwerkData } from '~/data/regulamin';
import { pageTitle, pageKeyWords } from '~/data/main';
useSeoMeta({
  title: pageTitle.regelwerk,
});
useHead({
  meta: [{name: 'keywords', content: pageKeyWords.regelwerk}]
})
</script>
<style>
.bg {
  background-image: url('/public/image11.png');
  background-size: cover;
  background-position: 65% center;
  background-attachment: local;
}
</style>
