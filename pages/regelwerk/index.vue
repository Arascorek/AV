<template>
  <div class="lg:pt-20">
    <RegelwerkImage />
    <div class="px-4 font-roboto pb-10 z-10 relative pt-5">
      <SharedHero
        name="Samed & Arascor"
        title="Projektleitung"
        desc-title="Regelwerk"
        desc=' "Insgesamt dient ein Regelwerk dazu, ein
      positives und einladendes Umfeld für Rollenspiel-Communitys zu schaffen,
      in dem die Spieler*innen ihre Kreativität ausleben und interagieren
      können, ohne die Rechte und die Sicherheit anderer zu beeinträchtigen. Es
      ermöglicht ein ausgewogenes Miteinander und fördert die Entwicklung von
      Geschichten und Charakteren auf Plan B Roleplay."'
        image="https://images.pexels.com/photos/10155098/pexels-photo-10155098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <SharedBanner title="Regelwerk" desc="Für gutes Miteinander" />
    </div>
    <RegelwerkTabs class="z-10 relative min-h-screen" />
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
