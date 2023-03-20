<template>
  <div class="bg-white text-black">
    <div class="flex flex-col md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl mb-6">
        Mes dernières actualités
      </p>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <NewsCard />
      <div class="grid grid-cols-3 gap-3 ">
        <NewsCardSecondary />
        <NewsCardSecondary />
        <NewsCardSecondary />
        <NewsCardSecondary />
        <NewsCardSecondary />
        <MoreButton />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import NewsCardSecondary from './news/NewsCardSecondary.vue';
import NewsCard from './news/NewsCard.vue';
import MoreButton from '../../template/buttons/MoreButton.vue'

</script>
  
  