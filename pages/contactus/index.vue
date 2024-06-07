<template>
  <div class="min-h-[calc(100vh-257px)] relative">
    <NuxtImg
      :src="maincontactusData.mainImage"
      class="w-full h-[70vh] object-cover"
    />
    <SharedHero
      :name="maincontactusData.name"
      :title="maincontactusData.role"
      :desc-title="maincontactusData.title"
      :desc="maincontactusData.titleDesc"
      :image="maincontactusData.authorImage"
      class="absolute top-24 left-0 mx-4 lg:left-20 lg:mx-0"
    />

    <SharedBanner
      :title="maincontactusData.bannerWhiteText"
      :desc="maincontactusData.bannerYellowText"
      class="mt-24 lg:-mt-32"
    />
    <div class="mt-10 container mx-auto px-2">
      <p class="text-white">
        {{ maincontactusData.rulesIntroText }}
      </p>

      <div class="my-10">
        <p
          v-for="(element, idx) in contactusData"
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
        {{ maincontactusData.rulesEndText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactusData, maincontactusData } from '../../data/contactus';
import { pageTitle, pageKeyWords } from '../../data/main';
useSeoMeta({
  title: pageTitle.contactus,
});

useHead({
  meta: [{name: 'keywords', content: pageKeyWords.contactus}]
})
</script>

<style scoped></style>
