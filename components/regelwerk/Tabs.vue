<template>
  <div class="bg-[#212121]">
    <div
      class="flex border-b-4 border-b-yellow-500 max-w-2xl mx-auto lg:max-w-4xl 2xl:max-w-5xl"
    >
      <RegelwerkTab
        v-for="item in items"
        :key="item.label"
        :text="item.label"
        @updateLabel="updateLabel"
        :class="currentTab === item.label ? 'bg-yellow-500' : ''"
      />
    </div>
    <RegelwerkTabText
      :text="items[currentTabIndex].content"
      :title="items[currentTabIndex].label"
      :currentTabIndex="currentTabIndex + 1"
    />
  </div>
</template>

<script setup lang="ts">
import { items } from '../../data/regulamin';

const currentTab = ref<string>('Allgemeines');
const currentTabIndex = ref<number>(0);

const updateLabel = (newValue: string) => {
  currentTab.value = newValue;
  currentTabIndex.value = items.findIndex((e) => e.label === currentTab.value);
};
</script>
