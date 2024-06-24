<template>
  <div class="bg-[#212121] px-4 pb-4">
    <div class="flex border-b-4 border-b-yellow-500 max-w-2xl mx-auto lg:max-w-4xl 2xl:max-w-5xl">
      <RegelwerkTab
        v-for="item in regelwerkRules"
        :key="item.label"
        :text="item.label"
        @updateLabel="updateLabel"
        :class="currentTab === item.label ? 'bg-yellow-500' : ''"
      />
    </div>
    <RegelwerkTabText
      :content="regelwerkRules[currentTabIndex.value].content"
      :title="regelwerkRules[currentTabIndex.value].label"
      :currentTabIndex="currentTabIndex.value + 1"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { regelwerkRules } from '../../data/regulamin';
import RegelwerkTab from './Tab.vue';
import RegelwerkTabText from './TabText.vue';

const currentTab = ref<string>('Poland');
const currentTabIndex = ref<number>(0);

const updateLabel = (newValue: string) => {
  currentTab.value = newValue;
  currentTabIndex.value = regelwerkRules.findIndex(
    (e) => e.label === currentTab.value
  );
};
</script>
