<template>
  <div class="min-h-[calc(100vh-257px)] relative">
    <NuxtImg
      :src="mainPhilosophieData.mainImage"
      class="w-full h-[70vh] object-cover"
    />
    <SharedHero
      :name="mainPhilosophieData.name"
      :title="mainPhilosophieData.role"
      :desc-title="mainPhilosophieData.title"
      :desc="mainPhilosophieData.titleDesc"
      :image="mainPhilosophieData.authorImage"
      class="absolute top-24 left-0 mx-4 lg:left-20 lg:mx-0"
    />

    <SharedBanner
      :title="mainPhilosophieData.bannerWhiteText"
      :desc="mainPhilosophieData.bannerYellowText"
      class="mt-24 lg:-mt-32"
    />
    <div class="mt-10 container mx-auto px-2">
      <p class="text-white">
        {{ mainPhilosophieData.rulesIntroText }}
      </p>

      <div class="my-10">
        <p
          v-for="(element, idx) in philosophieData"
          key="idx"
          class="text-white my-4 max-w-7xl"
        >
          <span class="text-yellow-500"
            >{{ idx + 1 }}.
            {{ element.slice(0, element.indexOf(':') + 1) }}</span
          >
          {{ element.slice(element.indexOf(':') + 1) }}
        </p>
      </div>

      <p class="text-white">
        {{ mainPhilosophieData.rulesEndText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { philosophieData, mainPhilosophieData } from '../../data/phlilosophie';
import { pageTitle, pageKeyWords } from '~/data/main';
useSeoMeta({
  title: pageTitle.services,
});

useHead({
  meta: [{name: 'keywords', content: pageKeyWords.services}]
})
</script>

<style scoped></style>
