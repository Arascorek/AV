<template>
  <div class="min-h-[calc(100vh-257px)] relative">
    <NuxtImg
      src="https://i.redd.it/nduksi52zrs41.jpg"
      class="w-full h-[50vh] object-cover"
    />
    <SharedHero
      name="Samed & Arascor"
      title="Projektleitung"
      desc-title="Philosophie"
      desc=' "Eine gute Philosophie für unseren Server macht nicht nur die Fairness und Gleichbehandlung für jede/n Spieler*in aus, sondern auch die Beteiligung der Community, Feedback und Transparenz. Wir legen viel Wert auf neue Ideen und Visionen, im Einklang mit unseren Richtlinien und Regeln."'
      image="https://images.pexels.com/photos/10155098/pexels-photo-10155098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      class="absolute top-24 left-0 mx-4 lg:left-20 lg:mx-0"
    />

    <SharedBanner
      title="Server- und Community-Philosophie:"
      desc="Gemeinsam auf Abenteuerreise"
      class="mt-24 lg:-mt-32"
    />
    <div class="mt-10 container mx-auto px-2">
      <p class="text-white">
        Classic Roleplay und die damit verbundene Community basiert auf klaren
        Prinzipien und Werten, die uns leiten. Wir sind der festen Überzeugung,
        dass sowohl Spiel, als auch Community-Bildung Hand in Hand gehen können,
        um eine einladende, lustige und entspannte Umgebung zu schaffen.
      </p>

      <div>
        <p v-for="(element, idx) in data" key="idx" class="text-white my-4">
          <span class="text-yellow-500"
            >{{ idx + 1 }}.
            {{ element.slice(0, element.indexOf(':') + 1) }}</span
          >
          {{ element.slice(element.indexOf(':') + 1) }}
        </p>
      </div>

      <p class="text-white">
        Unsere Server- und Community-Philosophie bildet die Grundlage für unser
        Bestreben, eine Community zu schaffen, die Freundschaften, Unterhaltung
        und gemeinsame Erlebnisse fördert. Gemeinsam begeben wir uns auf eine
        spannende Abenteuerreise, auf der jeder willkommen ist und sich zu Hause
        fühlt.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { data } from '../../data/phlilosophie';
</script>

<style scoped></style>
