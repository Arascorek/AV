<template>
  <nav class="bg-gray-900 text-white p-4">
    <ul class="flex space-x-4">
      <li><NuxtLink to="/">Start</NuxtLink></li>
      <li><NuxtLink to="/services">Services</NuxtLink></li>
      <li><NuxtLink to="/projects">Projects</NuxtLink></li>
      <li><NuxtLink to="/socials">Socials</NuxtLink></li>
      <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
      <li><NuxtLink to="/contact-us">Contact Us</NuxtLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { NuxtLink } from '#components';
</script>

<style scoped>
/* Styles for the navigation */
</style>