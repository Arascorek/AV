<template>
  <div class="bg-[#000000] min-h-screen">
    <NuxtImg
      class="absolute w-full h-[85vh] object-cover brightness-[25%]"
      :src="homeData.mainImage"
      alt="background image"
    />
    <div class="px-4 container mx-auto relative z-20 text-white">
      <div class="max-w-lg pt-20 lg:pt-24 2xl:pt-32">
        <h1 class="text-5xl lg:text-6xl 2xl:text-7xl">{{ homeData.title }}</h1>
        <p class="text-md mt-2 mb-10 2xl:text-lg">
          {{ homeData.titleDescription }}
        </p>
        <SharedButton
          :text="homeData.mainButtonText"
          @click="handleScrollWindow"
        />
      </div>

      <div
        class="flex gap-5 flex-col items-center justify-center mt-40 lg:flex-row lg:mt-52"
      >
        <HomeCard
          v-for="card in homeCardsMain"
          :key="card.image"
          :text="card.text"
          :imageLink="card.image"
          :linkTo="card.linkTo"
        />
      </div>

      <div
        v-for="(card, idx) in homeCard"
        :key="card.desc"
        class="flex flex-col items-center lg:items-start lg:flex-row justify-between container mx-auto pt-20 lg:pt-24 2xl:pt-32"
        :class="idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
      >
        <div class="max-w-xl text-center lg:text-left">
          <h1 class="text-5xl lg:text-6xl 2xl:text-7xl">{{ card.title }}</h1>
          <p class="max-w-sm text-md mt-2 mb-10 lg:max-w-lg 2xl:text-lg">
            {{ card.desc }}
          </p>
        </div>
        <NuxtImg
          class="max-w-xs lg:max-w-md rounded-lg"
          :src="card.image"
          alt="background image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { homeData, homeCardsMain, homeCard } from '../data/home';

const handleScrollWindow = () => {
  window.scrollTo(0, 200);
};
</script>
