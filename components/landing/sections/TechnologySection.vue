<template>
  <div class="bg-white text-black  p-8 max-w-full">
    <div class="space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl mb-2">
        Mes technologies
      </p>
    </div>
    <div class="grid grid-cols-3 gap-3 mt-6 ">
      <TechnologyCard />
      <TechnologyCard />
      <TechnologyCard />
      <TechnologyCard />
      <TechnologyCard />
      <MoreButton />
    </div>
  </div>
</template>


          
<script setup>
import TechnologyCard from './technology/TechnologyCard.vue'
import MoreButton from '../../template/buttons/MoreButton.vue';

</script>