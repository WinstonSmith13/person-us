<template>
  <div class=" bg-white text-black p-8 ">
    <div class=" flex flex-col  space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl mb-6">
        Mon agenda
      </p>
    </div>
    <div class="flex flex-col md:flex-row gap-4">
      <AgendaCard
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        :date="activity.date"
      />
      <MoreButton />
    </div>
  </div>
</template>
    
<script setup>
import MoreButton from '../../template/buttons/MoreButton.vue';
import AgendaCard from './agenda/AgendaCard.vue';

const activities = [
    {
      id: 1,
      description: 'Lorem ipsum dolor sit amet, consectetur elit.',
      image: '/images/actualite.jpeg',
      date:{
        day:'MER',
        month:'FÉV',
        num:'23',
      }
    },
    {
      id: 2,
      description: 'Lorem ipsum dolor sit amet, consectetur elit.',
      image: '/images/headway.jpeg',
      date:{
        day:'LUN',
        month:'MARS',
        num:'07',
      }
    },
    {
      id: 3,
      description: 'Lorem ipsum dolor sit amet, consectetur elit.',
      image: '/images/chemical.jpeg',
      date:{
        day:'JEU',
        month:'MAI',
        num:'30',
      }
    },
  ];

</script>



