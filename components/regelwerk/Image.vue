<template>
  <NuxtImg
    src="/image11.png"
    class="absolute w-full h-full object-cover"
    :style="{ transform: `scale(${currentScale})` }"
  />
</template>

<script setup lang="ts">
const scrollPosition = ref(0);
const currentScale = ref(1);
const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};

watch(scrollPosition, (newScrollPosition) => {
  // Trigger a function when it's more than 1
  if (newScrollPosition > 1) {
    handleScrollBeyondThreshold();
  }
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScrollBeyondThreshold = () => {
  currentScale.value = 1 + scrollPosition.value * 0.001;
};
</script>

<style lang="scss" scoped></style>
