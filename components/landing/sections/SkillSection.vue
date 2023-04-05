<template>
  <div class="bg-white text-black p-8">
    <div class="space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl mb-6">
        Mes domaines de spécialités
      </p>
    </div>
    <SkillLign />
    <SkillLign />
    <SkillLign />
    <SkillLign />
  </div>
</template>
        
<script setup>
import SkillLign from './skill/SkillLign.vue';

const skills = [
  {
    id : 1,
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
    tags: ["THÉMATIQUE 1", "THÉMATIQUE 2"],
    budget: "9 000 000 Euros" ,
  },
  {
    id : 2,
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
    tags: [ "THÉMATIQUE 3"],
    budget: "8 000 000 Euros" ,
  },
  {
    id : 3,
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
    tags: ["THÉMATIQUE 1", "THÉMATIQUE 2"],
    budget: "9 000 000 Euros" ,
  },
  {
    id : 4,
    description: "Lorem ipsum dolor sit amet, consectetur elit.",
    tags: [ "THÉMATIQUE 3"],
    budget: "8 000 000 Euros" ,
  }
];




</script>
      