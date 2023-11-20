<template>
  <div
    class="relative w-full max-w-sm rounded-xl p-4 flex items-center flex-col justify-center h-96 lg:h-[500px]"
    @mouseover="isMouseOver = true"
    @mouseleave="isMouseOver = false"
  >
    <div class="absolute h-full w-full overflow-hidden rounded-xl">
      <div
        class="absolute w-full h-full z-20 rounded-xl transition-all"
        :class="isMouseOver ? 'image-wrapper mt-0' : ''"
      ></div>
      <NuxtImg
        :src="props.imageLink"
        class="object-cover rounded-xl h-full transition"
        :class="
          isMouseOver ? 'brightness-100 scale-105' : 'brightness-50 scale-100'
        "
        alt="background image"
      />
    </div>
    <p
      class="text-center text-5xl uppercase font-bold relative z-20 text-white transition cursor-default"
      :class="isMouseOver ? '-translate-y-10' : ''"
    >
      {{ props.text }}
    </p>
    <SharedButton
      text="Clicke Hier!"
      :linkTo="props.linkTo"
      class="absolute z-20 left-1/2 -translate-x-1/2 bottom-5 transition"
      :class="isMouseOver ? 'opacity-100' : 'opacity-0'"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  text: String,
  imageLink: String,
  linkTo: String,
});

const isMouseOver = ref(false);
</script>

<style scoped>
.image-wrapper {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1));
}
</style>
