<template>
  <div class="max-w-2xl mx-auto mt-5">
    <p class="text-yellow-500 text-center text-2xl lg:text-3xl 2xl:text-4xl">
      {{ title }}
    </p>
    <div class="text-white py-4" v-for="(point, idx) in contentHtml" :key="idx" v-html="point"></div>
    <div v-if="title === 'Sonstiges'">
      <p class="uppercase text-yellow-500 text-2xl">Blacklisted</p>
      <p v-for="blacklisted in blacklist" class="text-white mt-2">
        <span class="text-yellow-500 mr-2">❱</span>{{ blacklisted }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blacklist } from '../../data/blacklisted';
import { computed } from 'vue';

const props = defineProps({
  title: String,
  content: Array<String>,
  currentTabIndex: Number,
});

const contentHtml = computed(() => {
  return props.content;
});
</script>

<style scoped>
h2 {
  color: #fff;
  margin: 20px 0;
}

.text-yellow-500 {
  color: #ffc107;
}

.text-white {
  color: #fff;
}

.text-center {
  text-align: center;
}

.uppercase {
  text-transform: uppercase;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.text-2xl {
  font-size: 1.5rem;
}

.text-3xl {
  font-size: 1.875rem;
}

.text-4xl {
  font-size: 2.25rem;
}

.lg\\:text-3xl {
  font-size: 1.875rem;
}

.2xl\\:text-4xl {
  font-size: 2.25rem;
}

.max-w-2xl {
  max-width: 42rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
