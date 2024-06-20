<template>
  <nav class="relative">
    <div class="absolute top-3 right-3 z-50 lg:hidden lg:relative">
      <NuxtImg
        src="/bars-solid.svg"
        class="invert w-10 h-10"
        :class="isNavOpen ? 'hidden' : ''"
        @click="isNavOpen = !isNavOpen"
      />
      <NuxtImg
        src="/xmark-solid.svg"
        class="invert w-10 h-10"
        :class="!isNavOpen ? 'hidden' : ''"
        @click="isNavOpen = !isNavOpen"
      />
    </div>

    <div
      class="text-white text-2xl p-3 pt-10 absolute top-0 left-0 w-full z-40 bg-black transition lg:translate-y-0 lg:flex lg:gap-5 lg:justify-end lg:py-5 lg:px-20 lg:fixed xl:gap-10 2xl:gap-14"
      :class="[isNavOpen ? 'translate-y-0' : '-translate-y-full']"
    >
      <NuxtLink to="/">
        <p
          class="cursor-pointer hover:text-yellow-500 transition"
          @click="isNavOpen = false"
          :class="routeName === 'index' && 'text-yellow-500'"
        >
          Homee
        </p>
      </NuxtLink>
      <NuxtLink to="/services">
        <p
          class="cursor-pointer hover:text-yellow-500 transition"
          @click="isNavOpen = false"
          :class="routeName === 'philosophie' && 'text-yellow-500'"
        >
          Service
        </p>
      </NuxtLink>
      <NuxtLink to="/projects">
        <p
          class="cursor-pointer hover:text-yellow-500 transition"
          @click="isNavOpen = false"
          :class="routeName === 'regelwerk' && 'text-yellow-500'"
        >
          Projects
        </p>
      </NuxtLink>
      <NuxtLink to="/socials">
        <p
          class="cursor-pointer hover:text-yellow-500 transition"
          @click="isNavOpen = false"
          :class="routeName === 'socials' && 'text-yellow-500'"
        >
          Socials
        </p>
      </NuxtLink>
      <NuxtLink to="/contactus">
        <p
          class="cursor-pointer hover:text-yellow-500 transition"
          @click="isNavOpen = false"
          :class="routeName === 'contactus' && 'text-yellow-500'"
        >
          Contact us
        </p>
      </NuxtLink>
      <li class="language-switcher">
        <button @click="showFlags = !showFlags">
          <img :src="currentFlag" alt="current flag" class="flag-icon"/>
        </button>
        <div v-if="showFlags" class="flags">
          <img src="/flags/en.png" alt="English" @click="changeLocale('en')" class="flag-icon"/>
          <img src="/flags/pl.png" alt="Polski" @click="changeLocale('pl')" class="flag-icon"/>
          <img src="/flags/de.png" alt="Deutsch" @click="changeLocale('de')" class="flag-icon"/>
        </div>
      </li>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isNavOpen = ref(false);
const stickNav = ref(false);
const showFlags = ref(false);
const route = useRoute();
const routeName = ref<any>(route.name);

const currentFlag = computed(() => {
  switch (i18n.global.locale) {
    case 'pl': return '/flags/pl.png';
    case 'de': return '/flags/de.png';
    default: return '/flags/en.png';
  }
});

const changeLocale = (locale: string) => {
  i18n.global.locale = locale;
  showFlags.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', () => {
    stickNav.value = window.scrollY > 0;
  });
  watch(
    () => route.path,
    () => {
      routeName.value = route.name;
    }
  );
});
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
}
.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
.nav-links li {
  margin: 0 1rem;
}
.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}
.language-switcher {
  position: relative;
}
.flags {
  position: absolute;
  top: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.flag-icon {
  cursor: pointer;
  width: 30px;
  height: 20px;
  margin: 0.5rem;
}
</style>
