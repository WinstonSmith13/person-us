<template>
  <FooterAction class="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center md:text-left " />
  <div class="bg-primary text-white px-6 py-8 sm:px-6 lg:px-8">
    <div class="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center md:text-left">
      <FooterContact />
      <LogoUs class=" py-2 mx-8" />
      <div>
        <h3 class="white font-bold py-2">
          TITRE
        </h3>
        <p class="flex flex-col white text-sm space-y-2">
          Lorem ipsum dolor sit amet, <br>
          consectetur adipiscing elit. Sit.
        </p>
      </div>
    </div>
    <div class="flex sm:flex-row justify-center items-center sm:items-start text-center md:text-left">
      <p class="mx-auto">
        &copy; 2023 Poulp.us
      </p>
      <p class="mx-auto">
        <NuxtLink to="/legals">Mentions Légales</NuxtLink>
        <NuxtLink to="/paralax">Paralax</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import FooterAction from './footer/FooterAction.vue';
import FooterContact from './footer/footerContact.vue';
import LogoUs from './icons/LogoUs.vue';

</script>

