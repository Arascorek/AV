<template>
  <div class="min-h-[calc(100vh-257px)] relative">
    <NuxtImg
      :src="mainPhilosophyData.mainImage"
      class="w-full h-[70vh] object-cover"
    />
    <SharedHero
      :name="mainPhilosophyData.name"
      :title="mainPhilosophyData.role"
      :desc-title="mainPhilosophyData.title"
      :desc="mainPhilosophyData.titleDesc"
      :image="mainPhilosophyData.authorImage"
      class="absolute top-24 left-0 mx-4 lg:left-20 lg:mx-0"
    />

    <SharedBanner
      :title="mainPhilosophyData.bannerWhiteText"
      :desc="mainPhilosophyData.bannerYellowText"
      class="mt-24 lg:-mt-32"
    />
    <div class="mt-10 container mx-auto px-2">
      <p class="text-white">
        {{ mainPhilosophyData.rulesIntroText }}
      </p>

      <div class="my-10">
        <p
          v-for="(element, idx) in philosophyData"
          :key="idx"
          class="text-white my-4 max-w-7xl"
        >
          <span class="text-yellow-500">
            {{ idx + 1 }}. {{ element.slice(0, element.indexOf(':') + 1) }}
          </span>
          {{ element.slice(element.indexOf(':') + 1) }}
        </p>
      </div>

      <p class="text-white">
        {{ mainPhilosophyData.rulesEndText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { philosophyData, mainPhilosophyData } from '../../data/phlilosophy';
import { pageTitle, pageKeyWords } from '../../data/main';
import { useHead } from 'nuxt/app';

useHead({
  title: pageTitle.philosophy,
  meta: [
    { name: 'keywords', content: pageKeyWords.philosophy }
  ]
});
</script>

<style scoped></style>