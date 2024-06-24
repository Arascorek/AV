<template>
  <div class="max-w-2xl mx-auto mt-5">
    <p class="text-yellow-500 text-center text-2xl lg:text-3xl 2xl:text-4xl">
      {{ title }}
    </p>
    <div class="text-white py-4">
      <p v-for="(point, idx) in content" :key="idx">
        <span v-if="!isLink(point)" class="text-2xl text-yellow-500 mr-2">
          §{{ currentTabIndex }}.{{ idx }} {{ point }}
        </span>
        <span v-else>
          <a :href="getLink(point)" target="_blank" class="btn">
            {{ getLinkText(point) }}
          </a>
        </span>
      </p>
    </div>
    <div v-if="title === 'Sonstiges'">
      <p class="uppercase text-yellow-500 text-2xl">Blacklisted</p>
      <p v-for="blacklisted in blacklist" :key="blacklisted" class="text-white mt-2">
        <span class="text-yellow-500 mr-2">❱</span>{{ blacklisted }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blacklist } from '../../data/blacklisted';

const props = defineProps({
  title: String,
  content: Array<String>,
  currentTabIndex: Number,
});

const isLink = (text: string) => {
  return text.startsWith('link|');
};

const getLink = (text: string) => {
  return text.split('|')[1];
};

const getLinkText = (text: string) => {
  return text.split('|')[0];
};
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px 0;
  font-size: 1rem;
  color: #fff;
  background-color: #ffc107;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
}

.btn:hover {
  background-color: #e0a800;
}
</style>
