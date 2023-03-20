<template>
  <div class="bg-white text-black">
    <div class="flex flex-col  space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl mb-6">
        Mes projets récents
      </p>
    </div>
    <div class="flex flex-row gap-4">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <MoreButton />
    </div>
  </div>
</template>
      
<script setup>
import MoreButton from '../../template/buttons/MoreButton.vue';
import ProjectCard from './project/ProjectCard.vue'

</script>