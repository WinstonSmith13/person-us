<template>
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
</template>

<script setup>
import FacebookIcon from '../../../template/icons/FacebookIcon.vue';
import InstragramIcon from '../../../template/icons/InstragramIcon.vue';
import LinkedinIcon from '../../../template/icons/LinkedinIcon.vue';
import WebIcon from '../../../template/icons/WebIcon.vue';

</script>
