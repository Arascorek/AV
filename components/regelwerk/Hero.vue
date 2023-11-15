<template>
  <div class="text-white">
    <div
      class="flex flex-col gap-5 bg-slate-100 p-3 max-w-xl w-full rounded-lg bg-2"
    >
      <div class="flex gap-5">
        <NuxtImg
          class="w-20 h-20 object-cover rounded-lg lg:w-32 lg:h-32"
          src="https://images.pexels.com/photos/10155098/pexels-photo-10155098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          loading="lazy"
        />
        <div>
          <p class="text-xl font-bold leading-5 lg:text-4xl">Samed & Arascor</p>
          <p class="lg:text-xl">Projektleitung</p>
        </div>
      </div>
      <div>
        <p class="text-3xl pb-2 font-bold lg:text-4xl 2xl:text-5xl">
          Regelwerk
        </p>
        <p class="2xl:text-lg">
          "Insgesamt dient ein Regelwerk dazu, ein positives und einladendes
          Umfeld für Rollenspiel-Communitys zu schaffen, in dem die
          Spieler*innen ihre Kreativität ausleben und interagieren können, ohne
          die Rechte und die Sicherheit anderer zu beeinträchtigen. Es
          ermöglicht ein ausgewogenes Miteinander und fördert die Entwicklung
          von Geschichten und Charakteren auf Classic Roleplay."
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.bg-2 {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
