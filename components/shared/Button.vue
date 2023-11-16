<template>
  <NuxtLink :to="props.linkTo">
    <button
      class="border border-gray-400 text-white px-4 py-1 font-light text-lg cursor-pointer transition hover:bg-white hover:text-black"
    >
      {{ props.text }}
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  text: String,
  linkTo: String,
});
</script>

<style lang="scss" scoped></style>
