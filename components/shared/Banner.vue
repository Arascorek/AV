<template>
  <div
    class="bg-2 z-10 relative text-white mt-20 rounded-lg p-3 text-center text-2xl max-w-2xl w-full mx-auto lg:max-w-4xl 2xl:max-w-5xl 2xl:text-3xl lg:py-4 2xl:py-5"
  >
    <p>{{ props.title }}</p>
    <p class="text-yellow-500">{{ props.desc }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  desc: String,
});
</script>
