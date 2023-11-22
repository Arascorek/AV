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
          Start
        </p>
      </NuxtLink>
      <NuxtLink to="/philosophie">
        <p
          class="cursor-pointer hover:text-yellow-500 transition"
          @click="isNavOpen = false"
          :class="routeName === 'philosophie' && 'text-yellow-500'"
        >
          Philosophie
        </p>
      </NuxtLink>
      <NuxtLink to="/regelwerk">
        <p
          class="cursor-pointer hover:text-yellow-500 transition"
          @click="isNavOpen = false"
          :class="routeName === 'regelwerk' && 'text-yellow-500'"
        >
          Regelwerk
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
      <p
        class="cursor-pointer hover:text-yellow-500 transition"
        @click="scrollToBottom"
      >
        Info
      </p>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isNavOpen = ref(false);
const stickNav = ref(false);
const route = useRoute();
const routeName = ref<any>(route.name);
const scrollToBottom = () => {
  isNavOpen.value = false;
  window.scrollTo(0, 99999);
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

<style lang="scss" scoped></style>
