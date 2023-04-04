<template>
  <div class="relative shadow-lg bg-secondary">
    <div class="absolute left-4 top-[-10px]">
      <AgendaHeadband :date="date" />
    </div>

    <nuxt-img
      class="w-full h-48 object-cover"
      :src="activity.image"
      format="webp"
      :alt="activity.image"
    />

    <div class="px-6 py-2">
      <div class="font-bold text-xl font-primary">
        {{ activity.description }}
      </div>
    </div>
  </div>
</template>
  
<script setup>
import AgendaHeadband from '../../../template/headband/AgendaHeadband.vue';

const props = defineProps ( {
  activity: {
    type: Object,
    required: true,
  },
  date: {
    type: Object,
    required: true,
  },
})

</script>

<style scoped>
  .max-w-sm {
    max-width: 100%;
  }
</style>
