<template>
  <footer
    class="relative z-30 container mx-auto text-white border-t border-gray-300 mt-10 px-4"
  >
    <div
      class="flex flex-col lg:flex-row lg:items-start lg:gap-20 xl:gap-32 2xl:gap-52"
    >
      <div>
        <p class="font-bold text-3xl mt-5">Kontakt</p>
        <a
          :href="'mailto:' + footerData.contactMail"
          class="text-gray-100 cursor-pointer hover:text-gray-300 mt-2"
        >
          {{ footerData.contactMail }}</a
        >
        <p class="text-gray-100 cursor-pointer hover:text-gray-300">
          Datenschutz
        </p>
        <p class="text-gray-100 cursor-pointer hover:text-gray-300">
          Impressum
        </p>
      </div>
      <div>
        <p class="font-bold text-3xl mt-5">Navigation</p>
        <NuxtLink
          to="/philosophie"
          class="text-gray-100 cursor-pointer block hover:text-gray-300 mt-2"
        >
          Philosophie
        </NuxtLink>
        <NuxtLink
          to="/regelwerk"
          class="text-gray-100 cursor-pointer block hover:text-gray-300"
        >
          Regelwerk
        </NuxtLink>
        <NuxtLink
          to="/socials"
          class="text-gray-100 cursor-pointer block hover:text-gray-300"
          >Socials</NuxtLink
        >
      </div>
      <div>
        <p class="font-bold text-3xl mt-5">Social</p>
        <div class="flex gap-3 mt-2">
          <NuxtLink :to="footerData.igLink" target="_blank">
            <NuxtImg
              src="/instagram.svg"
              class="invert w-7 h-7 cursor-pointer"
              alt="icon instagram"
            />
          </NuxtLink>
          <NuxtLink :to="footerData.dcLink" target="_blank">
            <NuxtImg
              src="/discord.svg"
              class="invert w-7 h-7 cursor-pointer"
              alt="icon discord"
            />
          </NuxtLink>
          <NuxtLink :to="footerData.twLink" target="_blank">
            <NuxtImg
              src="/twitch.svg"
              class="invert w-7 h-7 cursor-pointer"
              alt="icon twitch"
            />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="mt-10 pb-4">
      <p class="text-center">
        Alle Rechte vorbehalten &copy; {{ currentYear }} | PlanB Roleplay
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = ref(new Date().getFullYear());
import { footerData } from '~/data/footer';
</script>
