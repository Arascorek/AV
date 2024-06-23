<template>
    <div>
      <select v-model="locale" @change="changeLocale">
        <option v-for="locale in locales" :key="locale.code" :value="locale.code">
          {{ locale.name }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  const { locale, locales, setLocale } = useI18n();
  
  function changeLocale(event) {
    setLocale(event.target.value);
  }
  </script>
  
  <style scoped>
  /* Dodaj własne style dla switchera */
  </style>
  