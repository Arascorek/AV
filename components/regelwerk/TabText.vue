<template>
  <div class="max-w-2xl mx-auto mt-5">
    <p class="text-yellow-500 text-center text-2xl lg:text-3xl 2xl:text-4xl">
      {{ props.title }}
    </p>
    <p class="text-white py-4" v-for="(point, idx) in text" :key="idx">
      <span class="text-2xl text-yellow-500 mr-2"
        >§{{ props.currentTabIndex }}.{{ idx }} </span
      >{{ point }}
    </p>
    <div v-if="props.title === 'Sonstiges'">
      <p class="uppercase text-yellow-500 text-2xl">Blacklisted</p>
      <p v-for="blacklisted in blacklist" class="text-white mt-2">
        <span class="text-yellow-500 mr-2">❱</span>{{ blacklisted }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { blacklist } from '../../data/blacklisted';
const props = defineProps({
  title: String,
  text: Array<String>,
  currentTabIndex: Number,
});
</script>
