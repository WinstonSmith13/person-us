<template>
  <div class="bg-white text-black p-8">
    <p class="text-black font-bold text-2xl mb-10 md:mb-0 md:space-x-6 ">
      Mes collaborateurs
    </p>
    <div class="grid grid-cols-3 gap-3 mt-6">
      <ContributorCard
        v-for="contributor in contributors"
        :key="contributor.id"
        :contributor="contributor"
      />
      <MoreButton />
    </div>
  </div>
</template>

<script setup>
  import ContributorCard from './contributor/ContributorCard.vue';
  import MoreButton from '../../template/buttons/MoreButton.vue';

  const contributors = [
    {
      id: 1,
      name: 'Alice',
      job: 'Développeuse',
      imageSrc: '/images/aiony.jpeg',
    },
    {
      id: 2,
      name: 'Bob',
      job: 'Designer',
      imageSrc: '/images/albert.jpeg',
    },
    {
      id: 3,
      name: 'Charlie',
      job: 'Chef de projet',
      imageSrc: '/images/toa.jpeg',
    },
  ];
</script>