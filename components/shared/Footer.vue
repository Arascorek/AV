<template>
  <footer
    class="relative z-30 container mx-auto text-white border-t border-gray-300 mt-10 px-4"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-start lg:gap-20 xl:gap-32 2xl:gap-52"
    >
      <div>
        <p class="font-bold text-3xl mt-5">Kontakt</p>
        <p class="text-gray-100 cursor-pointer hover:text-gray-300 mt-2">
          info@info.com
        </p>
        <p class="text-gray-100 cursor-pointer hover:text-gray-300">
          Datenschutz
        </p>
        <p class="text-gray-100 cursor-pointer hover:text-gray-300">
          Impressum
        </p>
      </div>
      <div>
        <p class="font-bold text-3xl mt-5">Navigation</p>
        <p class="text-gray-100 cursor-pointer hover:text-gray-300 mt-2">
          Philosophie
        </p>
        <p class="text-gray-100 cursor-pointer hover:text-gray-300">
          Regelwerk
        </p>
        <p class="text-gray-100 cursor-pointer hover:text-gray-300">Socials</p>
      </div>
      <div>
        <p class="font-bold text-3xl mt-5">Social</p>
        <div class="flex gap-3 mt-2">
          <NuxtImg src="/instagram.svg" class="invert w-7 h-7 cursor-pointer" />
          <NuxtImg src="/discord.svg" class="invert w-7 h-7 cursor-pointer" />
          <NuxtImg src="/twitch.svg" class="invert w-7 h-7 cursor-pointer" />
        </div>
      </div>
    </div>

    <div class="mt-10 pb-4">
      <p class="text-center">
        All rights reserved &copy; 2023 | PlanB Roleplay
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
