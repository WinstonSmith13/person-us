<template>
  <div class="absolute top-0 w-full">
    <div class="fixed inset-x-0 z-10 bg- mx-4 md:mx-40">
      <div class="max-w-screen-lg mx-auto">
        <NavigationTemplate />
      </div>
    </div>
    <div class="mt-80 mx-4 md:mx-40">
      <div class="max-w-screen-lg mx-auto shadow-2xl bg-white">
        <slot />
        <FooterTemplate />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import FooterTemplate from '../components/template/Footer.vue';
import NavigationTemplate from '../components/template/Navigation.vue';

</script>