<template>
  <div class="bg-white text-black">
    <div class="flex flex-col">
      <p class="text-black font-bold text-2xl mb-6">
        Mon agenda
      </p>
    </div>
    <div class="flex flex-wrap -mx-2">
      <AgendaCard class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-2" />
      <AgendaCard class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-2" />
      <AgendaCard class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-2" />
      <MoreButton />
    </div>
  </div>
</template>
    
  <script setup>
  import MoreButton from '../../template/buttons/MoreButton.vue';
  import AgendaCard from './agenda/AgendaCard.vue'
  
  </script>