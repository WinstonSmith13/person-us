<template>
  <div class="bg-white text-black p-8">
    <div class="flex flex-col  space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl mb-6">
        Mes projets récents
      </p>
    </div>
    <div class="flex flex-wrap gap-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :tags="project.tags"
      />
      <MoreButton />
    </div>
  </div>
</template>
      
<script setup>
import MoreButton from '../../template/buttons/MoreButton.vue';
import ProjectCard from './project/ProjectCard.vue'

const projects = [
  {
    id : 1,
    image: "/images/construction.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
    tags: ["THÉMATIQUE 1", "THÉMATIQUE 2"],
    budget: "9 000 000 Euros" ,
  },
  {
    id : 2,
    image: "/images/construction.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
    tags: [ "THÉMATIQUE 3"],
    budget: "8 000 000 Euros" ,
  }
];

</script>