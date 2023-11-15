<template>
  <div>
    <RegelwerkImage />
    <div class="px-4 font-roboto pb-10 z-10 relative">
      This is regelwerk page
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
