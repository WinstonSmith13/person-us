<template>
  <div class=" flex flex-row  shadow-lg  bg-secondary rounded">
    <div class=" w-full h-44 sm:h-40 sm:w-32 sm:mb-0">
      <nuxt-img
        src="images/albert.jpeg"
        alt="profil picture"
        class="object-cover  w-full h-full rounded"
      />
    </div>
    <div class="flex flex-col space-y-4 p-6">
      <div>
        <h2 class="text-xl font-semibold">
          Prénom Nom 
        </h2>
        <span class="text-sm font-bold text-primary">FONCTION</span>
      </div>
      <div class="flex space-x-1">
        <div>
          <!--Lien vers le profil FB-->
          <!--Penser un component icon avec V-for-->
          <a href="www.poulp.us">
            <FacebookIcon />
          </a>
        </div>
        <div>
          <!--Lien vers le profil Insta-->
          <InstragramIcon />
        </div>
        <div>
          <!--Lien vers le profil Linkedin-->
          <LinkedinIcon />
        </div>
        <div>
          <!--Lien vers le profil Site Internet Perso-->
          <WebIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FacebookIcon from '../../../template/icons/FacebookIcon.vue';
import InstragramIcon from '../../../template/icons/InstragramIcon.vue';
import LinkedinIcon from '../../../template/icons/LinkedinIcon.vue';
import WebIcon from '../../../template/icons/WebIcon.vue';

</script>

