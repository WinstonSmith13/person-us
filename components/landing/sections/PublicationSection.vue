<template>
  <div class="bg-white text-black p-8">
    <div class="flex flex-col  space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl mb-2">
        Mes publications récentes
      </p>
    </div>
    <div class="flex flex-row gap-4">
      <PublicationCard />
      <PublicationCard />
      <PublicationCard />
    </div>
  </div>
</template>
        
      <script setup>
      import PublicationCard from './publication/PublicationCard.vue';
      
      </script>