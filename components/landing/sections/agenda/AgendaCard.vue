<template>
  <div class="relative shadow-lg bg-secondary  rounded w-full">
    <div class="absolute left-4 -top-1 h-16">
      <AgendaHeadband />
    </div>

    <nuxt-img
      class="w-full"
      src="images/headway.jpeg"
      format="webp"
      alt="Illustration actualité"
    />

    <div class="px-6 py-2 text-justify">
      <div class="font-bold text-xl font-primary">
        Lorem ipsum dolor sit amet, consectetur elit.
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import AgendaHeadband from '../../../template/headband/AgendaHeadband.vue';
  </script>

  