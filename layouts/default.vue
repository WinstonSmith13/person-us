<template>
  <div class="absolute top-0 w-full">
    <div class="mx-4 md:mx-40 mb-6 md:mb-60">
      <NavigationTemplate />
    </div>
    <div class="shadow-2xl bg-white mx-4 md:mx-40">
      <slot />
      <FooterTemplate />
    </div>
  </div>
</template>
  
<script setup>
import FooterTemplate from '../components/template/Footer.vue';
import NavigationTemplate from '../components/template/Navigation.vue';

</script>