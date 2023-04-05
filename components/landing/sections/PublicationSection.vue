<template>
  <div class="bg-white text-black p-8">
    <div class="flex flex-col  space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl mb-2">
        Mes publications récentes
      </p>
    </div>
    <div class="flex flex-row gap-4">
      <PublicationCard
        v-for="publication in publications"
        :key="publication.id"
        :publication="publication"
      />
    </div>
  </div>
</template>
        
<script setup>
import PublicationCard from './publication/PublicationCard.vue';

const publications = [
  {
    id : 1,
    abstract: "Lorem ipsum dolor sit amet, consectetur elit.", 
    journal: "Lorem ipsum university’s journal",
    date:"(2021)",
    reference:"HAL-00000001",
  },
  {
    id : 2,
    abstract: "Lorem ipsum dolor sit amet, consectetur elit.",
    journal: "Lorem ipsum university’s journal",
    date:"(2019)",
    reference:"HAL-00000002",
  },
  {
    id : 3,
    abstract: "Lorem ipsum dolor sit amet, consectetur elit.",
    journal: "Lorem ipsum university’s journal",
    date:"(2009)",
    reference:"HAL-00000003",
  }
];


</script>