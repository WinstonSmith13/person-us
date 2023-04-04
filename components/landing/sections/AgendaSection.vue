<template>
  <div class=" bg-white text-black p-8 ">
    <div class=" flex flex-col  space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl mb-6">
        Mon agenda
      </p>
    </div>
    <div class="flex flex-row gap-4">
      <AgendaCard />
      <AgendaCard />
      <AgendaCard />
      <MoreButton />
    </div>
  </div>
</template>
    
<script setup>
import MoreButton from '../../template/buttons/MoreButton.vue';
import AgendaCard from './agenda/AgendaCard.vue'

</script>

<style></style>

