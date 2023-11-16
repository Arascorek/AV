<template>
  <div class="lg:pt-20">
    <RegelwerkImage />
    <div class="px-4 font-roboto pb-10 z-10 relative pt-5">
      <RegelwerkHero />
      <RegelwerkBanner />
    </div>
    <RegelwerkTabs class="z-10 relative" />
  </div>
</template>

<script setup lang="ts"></script>
<style>
.bg {
  background-image: url('/public/image11.png');
  background-size: cover;
  background-position: 65% center;
  background-attachment: local;
}
</style>
