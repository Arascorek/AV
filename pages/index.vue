<template>
  <div class="bg-[#000000] min-h-screen">
    <NuxtImg
      class="absolute w-full h-[85vh] object-cover brightness-[25%]"
      src="https://cdn.mos.cms.futurecdn.net/aDp3J8JC4dYFDxqpbCikVL-1200-80.jpg"
    />
    <div class="px-4 container mx-auto relative z-20 text-white">
      <div class="max-w-lg pt-20 lg:pt-24 2xl:pt-32">
        <h1 class="text-5xl lg:text-6xl 2xl:text-7xl">Plan B Roleplay</h1>
        <p class="text-md mt-2 mb-10 2xl:text-lg">
          Starte dein Leben in der verzauberten Welt von Plan B. Die Stadt von wahren Roleplay. 
          Komm aus dir heraus und beschreite dein Weg, als Krimineller oder als vorbildlichen Bürger. 
          Zudem sind wir Anfängerfreundlich. Jeder Spieler ist willkommen, ob Pro oder Neuling.
        </p>
        <SharedButton text="Erkunde die Welt!" @click="handleScrollWindow" />
      </div>

      <div
        class="flex gap-5 flex-col items-center justify-center mt-40 lg:flex-row lg:mt-52"
      >
        <HomeCard
          text="Philosophie"
          imageLink="https://images.hindustantimes.com/tech/img/2023/03/06/960x540/gta_v_1678076345536_1678076352712_1678076352712.png"
          linkTo="/test"
        />
        <HomeCard
          text="Regelwerk"
          imageLink="https://webprojektor.pl/wp-content/uploads/2023/02/official-screenshot-pc-700x394.jpg"
          linkTo="/regelwerk"
        />
        <HomeCard
          text="Socials"
          imageLink="https://www.gameinformer.com/sites/default/files/styles/full/public/2022/02/08/01a4ca63/gta_v.jpg"
          linkTo="/socials"
        />
        <HomeCard
          text="Discord"
          imageLink="https://www.pockettactics.com/wp-content/sites/pockettactics/2023/02/gta-v-mobile-1-550x309.jpg"
          linkTo="https://discord.gg/as3VhHMU6a"
        />
      </div>

      <div
        class="mt-16 flex flex-col items-center lg:items-start lg:flex-row justify-between container mx-auto pt-20 lg:pt-24 2xl:pt-32"
      >
        <div class="max-w-xl text-center lg:text-left">
          <h1 class="text-5xl lg:text-6xl 2xl:text-7xl">Bad Fraktion</h1>
          <p class="max-w-sm text-md mt-2 mb-10 lg:max-w-lg 2xl:text-lg">
            Bei Plan B kannst du den Weg als Bad Fraktion beschreiten. 
            Als Gang, Kartell, Mafia o.ä. Kommt aus euch heraus und zeigt der Stadt aus welchen Holz ihr Geschnitzt seit.
          </p>
        </div>
        <NuxtImg
          class="max-w-xs lg:max-w-md rounded-lg"
          src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/b3d17a4e-96bf-11e6-a0d8-00163ed833e7/1317752825/gta-v-how-to-play-grand-theft-auto-v-windows.jpg"
        />
      </div>
      <div
        class="flex flex-col items-center lg:items-start lg:flex-row-reverse justify-between container mx-auto pt-20 lg:pt-24 2xl:pt-32"
      >
        <div class="max-w-xl text-center lg:text-left">
          <h1 class="text-5xl lg:text-6xl 2xl:text-7xl">Staatsfraktion</h1>
          <p class="max-w-sm text-md mt-2 mb-10 lg:max-w-lg 2xl:text-lg">
            Bei Plan B kannst du den Weg als Staatsfraktion beschreiten. 
            Werde ein Teil der Stadt. Versorge die Bürger oder beschütze die Bürger. 
            Lass die Stadt von dir profitieren.
          </p>
        </div>
        <NuxtImg
          class="max-w-xs lg:max-w-md rounded-lg"
          src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/ak73k92o47ko75/5de9d8bc4ffeabb209ec67ab3721ea281da5cd05.jpg"
        />
      </div>
      <div
        class="flex flex-col items-center lg:items-start lg:flex-row justify-between container mx-auto pt-20 lg:pt-24 2xl:pt-32"
      >
        <div class="max-w-xl text-center lg:text-left">
          <h1 class="text-5xl lg:text-6xl 2xl:text-7xl">Zivi Leben</h1>
          <p class="max-w-sm text-md mt-2 mb-10 lg:max-w-lg 2xl:text-lg">
            Bei Plan B kannst du den Weg als Zivilist beschreiten. 
            Entdecke dein eigenen Roleplay  Charakter, mit deiner eigener Art, die du gerne ausspielen möchtest. 
            Zeig der Plan B Community was du drauf hast.
          </p>
        </div>
        <NuxtImg
          class="max-w-xs lg:max-w-md rounded-lg"
          src="https://media-rockstargames-com.akamaized.net/tina-uploads/posts/ak73k92o47ko75/5de9d8bc4ffeabb209ec67ab3721ea281da5cd05.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleScrollWindow = () => {
  window.scrollTo(0, 200);
};
</script>
