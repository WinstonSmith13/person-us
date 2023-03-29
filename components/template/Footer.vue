<template>
  <FooterAction class="flex border-t lg:px-24 sm:flex-col " />
  <div class="bg-primary w-full text-white px-6 py-8 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center md:text-left">
        <FooterContact class="" />
        <div class="">
          <LogoUs class=" py-2 mx-8" />
        </div>
        <div class="">
          <h3 class="white font-bold py-2">
            TITRE
          </h3>
          <p class="flex flex-col white text-sm space-y-2">
            Lorem ipsum dolor sit amet, <br>
            consectetur adipiscing elit. Sit.
          </p>
        </div>
      </div>
    </div>
    <div class="text-left flex justify-between pt-2">
      <p>
        &copy; 2023 Poulp.us
      </p>
      <div class="flex space-x-4">
        <!--Ne pas oublier de créer vers les mentions légales-->
        <p>Mention légale</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import FooterAction from './footer/FooterAction.vue';
import FooterContact from './footer/footerContact.vue';
import LogoUs from './icons/LogoUs.vue';

</script>

