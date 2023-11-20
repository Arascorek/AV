<template>
  <div class="text-white">
    <div
      class="flex flex-col gap-5 bg-slate-100 p-3 max-w-xl w-full rounded-lg bg-2"
    >
      <div class="flex gap-5">
        <NuxtImg
          class="w-20 h-20 object-cover rounded-lg lg:w-32 lg:h-32"
          :src="props.image"
          loading="lazy"
        />
        <div>
          <p class="text-xl font-bold leading-5 lg:text-4xl">
            {{ props.name }}
          </p>
          <p class="lg:text-xl">{{ props.title }}</p>
        </div>
      </div>
      <div>
        <p class="text-3xl pb-2 font-bold lg:text-4xl 2xl:text-5xl">
          {{ props.descTitle }}
        </p>
        <p class="2xl:text-lg">
          {{ props.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  title: String,
  descTitle: String,
  desc: String,
  image: String,
});
</script>

<style>
.bg-2 {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
