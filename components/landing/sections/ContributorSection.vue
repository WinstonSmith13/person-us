<template>
  <div class="bg-white text-black">
    <p class="text-black font-bold text-2xl mb-10 md:mb-0 md:space-x-6 ">
      Mes collaborateurs
    </p>
    <div class="grid grid-cols-3 gap-3 mt-6">
      <ContributorCard />
      <ContributorCard />
      <ContributorCard />
      <ContributorCard />
      <ContributorCard />
      <MoreButton />
    </div>
  </div>
</template>
<script setup>
  import ContributorCard from './contributor/ContributorCard.vue';
  import MoreButton from '../../template/buttons/MoreButton.vue';
</script>