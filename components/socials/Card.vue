<template>
  <div
    class="relative flex flex-col gap-5 p-3 max-w-xs w-full lg:max-w-md rounded-lg bg-2 h-72 text-white"
  >
    <NuxtImg
      :src="props.bgImage"
      class="absolute rounded-lg top-0 left-0 w-full h-full brightness-50"
    />
    <div class="flex gap-5 relative z-10">
      <NuxtImg
        class="w-20 h-20 object-cover rounded-lg lg:w-32 lg:h-32"
        :src="props.image"
        loading="lazy"
      />
      <div>
        <p class="text-xl font-bold leading-5 lg:text-4xl">
          {{ props.name }}
        </p>
        <p class="lg:text-xl">{{ props.role }}</p>
      </div>
    </div>
    <div>
      <p class="text-3xl relative z-30 pb-2 font-bold lg:text-4xl">Socials</p>
      <div class="flex gap-5 mt-5">
        <NuxtLink :to="props.dcLink" target="_blank">
          <NuxtImg src="/discord.svg" class="w-10 h-10 invert" />
        </NuxtLink>
        <NuxtLink :to="props.twitchLink" target="_blank">
          <NuxtImg src="/twitch.svg" class="w-10 h-10 invert" />
        </NuxtLink>
        <NuxtLink :to="props.instagramLink" target="_blank">
          <NuxtImg src="/instagram.svg" class="w-10 h-10 invert" />
        </NuxtLink>
        <NuxtLink :to="props.tiktokLink" target="_blank">
          <NuxtImg src="/tiktok.svg" class="w-10 h-10 invert" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  role: String,
  image: String,
  dcLink: String,
  twitchLink: String,
  instagramLink: String,
  tiktokLink: String,
  bgImage: String,
});
</script>

<style lang="scss" scoped></style>
