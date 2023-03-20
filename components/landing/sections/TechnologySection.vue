<template>
  <div class="bg-white text-black">
    <div class="flex flex-col  space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl">
        Mes technologies
      </p>
    </div>
    <div class="mt-6 flex flex-wrap gap-4">
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